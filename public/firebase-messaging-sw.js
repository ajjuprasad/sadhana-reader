// Firebase Cloud Messaging service worker. Loaded at /firebase-messaging-sw.js
// and registered by src/lib/pushNotifications.ts. Receives push messages while
// the page is closed and shows them as system notifications.
//
// Note: this file is served as a static asset, so it cannot use Vite env vars
// at build time. Firebase config is injected by /firebase-messaging-sw-config.js
// (also static, written at build time by vite.config.ts).
/* global importScripts, firebase, self, clients */

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
importScripts('/firebase-messaging-sw-config.js');

if (self.__SADHANA_FIREBASE_CONFIG__) {
  firebase.initializeApp(self.__SADHANA_FIREBASE_CONFIG__);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title ?? 'Sādhanā Reader';
    const options = {
      body: payload.notification?.body ?? '',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      data: payload.data ?? {},
    };
    self.registration.showNotification(title, options);
  });
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url ?? '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      for (const win of wins) {
        if (win.url.includes(self.location.origin)) {
          win.focus();
          win.navigate(url);
          return;
        }
      }
      return clients.openWindow(url);
    }),
  );
});
