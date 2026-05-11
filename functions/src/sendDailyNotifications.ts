import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { ekadasi2026 } from "./data/ekadasi2026";
import { highlights2026 } from "./data/highlights";

function todayKey(now: Date): string {
  // Asia/Kolkata local YYYY-MM-DD.
  const ist = new Date(now.getTime() + 5.5 * 3600 * 1000);
  return ist.toISOString().slice(0, 10);
}

function buildMessage(key: string): { title: string; body: string; url: string } {
  const festival = highlights2026.find((h) => h.date === key);
  if (festival) {
    return { title: festival.title, body: festival.body, url: festival.url ?? "/" };
  }
  const ek = ekadasi2026.find((e) => e.date === key);
  if (ek) {
    return {
      title: `${ek.name} Ekādaśī today`,
      body: `${ek.paksha} pakṣa Ekādaśī of ${ek.month}. Read Viṣṇu Sahasranāma.`,
      url: "/panchanga/today",
    };
  }
  return {
    title: "Today's sādhanā is ready",
    body: "A new stotra, story, and reflection await. Open Sādhanā Reader.",
    url: "/",
  };
}

// Runs once a day at 07:00 IST. For every fcmToken across all users, sends
// today's notification. Prunes tokens that the FCM API reports as
// unregistered/invalid so the collection doesn't grow stale.
export const sendDailyNotifications = onSchedule(
  { schedule: "0 7 * * *", timeZone: "Asia/Kolkata" },
  async () => {
    const key = todayKey(new Date());
    const message = buildMessage(key);
    logger.info("sendDailyNotifications", { key, message });

    const db = admin.firestore();
    // Collection-group query over all users' fcmTokens subcollections.
    const tokensSnap = await db.collectionGroup("fcmTokens").get();
    if (tokensSnap.empty) {
      logger.info("No FCM tokens registered; nothing to send.");
      return;
    }

    type TokenDoc = { ref: FirebaseFirestore.DocumentReference; token: string };
    const tokenDocs: TokenDoc[] = tokensSnap.docs
      .map((d) => ({ ref: d.ref, token: (d.data() as { token?: string }).token ?? "" }))
      .filter((t) => t.token);

    // FCM sendEachForMulticast caps at 500 tokens per call.
    const CHUNK = 500;
    let sent = 0;
    let failed = 0;
    const toPrune: FirebaseFirestore.DocumentReference[] = [];

    for (let i = 0; i < tokenDocs.length; i += CHUNK) {
      const chunk = tokenDocs.slice(i, i + CHUNK);
      const res = await admin.messaging().sendEachForMulticast({
        tokens: chunk.map((c) => c.token),
        notification: { title: message.title, body: message.body },
        data: { url: message.url },
        webpush: {
          fcmOptions: { link: message.url },
          notification: { icon: "/icon-192.png" },
        },
      });
      res.responses.forEach((r, idx) => {
        if (r.success) {
          sent += 1;
        } else {
          failed += 1;
          const code = r.error?.code ?? "";
          if (
            code === "messaging/registration-token-not-registered" ||
            code === "messaging/invalid-registration-token"
          ) {
            toPrune.push(chunk[idx].ref);
          }
        }
      });
    }

    // Prune stale tokens in batches of 500 (Firestore batch limit).
    for (let i = 0; i < toPrune.length; i += 500) {
      const batch = db.batch();
      toPrune.slice(i, i + 500).forEach((ref) => batch.delete(ref));
      await batch.commit();
    }

    logger.info("Done.", { sent, failed, pruned: toPrune.length });
  },
);
