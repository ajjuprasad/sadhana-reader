import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useAuth } from '../contexts/AuthContext';
import { useIsAdmin } from '../hooks/useIsAdmin';
import { app } from '../lib/firebase';

interface AdminStats {
  totalUsers: number;
  dau: number;
  mau: number;
  retained7d: number;
  retained28d: number;
  generatedAt: number;
}

interface AdminUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  firstLoginAt: number | null;
  lastLoginAt: number | null;
  lastSeenAt: number | null;
  loginCount: number;
}

function formatRelative(ms: number | null): string {
  if (!ms) return '—';
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const date = new Date(ms);
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div
      className="rounded-2xl p-4 sm:p-5"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <p
        className="font-label font-semibold uppercase text-[0.6rem] tracking-[0.14em] mb-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {label}
      </p>
      <p
        className="font-display font-bold text-2xl"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {value}
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [statsError, setStatsError] = useState<string | null>(null);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (authLoading || adminLoading) return;
    if (!user || !isAdmin) {
      navigate('/', { replace: true });
    }
  }, [authLoading, adminLoading, user, isAdmin, navigate]);

  const load = async (cursor: number | null) => {
    setLoading(true);
    setStatsError(null);
    setUsersError(null);
    const functions = getFunctions(app);
    try {
      if (!cursor) {
        const statsFn = httpsCallable<unknown, AdminStats>(functions, 'adminStats');
        const statsRes = await statsFn();
        setStats(statsRes.data);
      }
    } catch (err) {
      setStatsError(err instanceof Error ? err.message : String(err));
    }
    try {
      const usersFn = httpsCallable<
        { limit?: number; cursorMs?: number | null },
        { items: AdminUser[]; nextCursorMs: number | null; hasMore: boolean }
      >(functions, 'adminUsers');
      const usersRes = await usersFn({ limit: 50, cursorMs: cursor ?? undefined });
      setUsers((prev) => (cursor ? [...prev, ...usersRes.data.items] : usersRes.data.items));
      setNextCursor(usersRes.data.nextCursorMs);
      setHasMore(usersRes.data.hasMore);
    } catch (err) {
      setUsersError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin && !adminLoading) load(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, adminLoading]);

  if (authLoading || adminLoading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-hind text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Loading…
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      <Helmet>
        <title>Admin — Sadhana Reader</title>
      </Helmet>

      <div className="sticky top-0 z-30" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm font-hind"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Home
          </button>
          <h1 className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
            Admin
          </h1>
          <button
            onClick={() => load(null)}
            className="font-hind text-xs"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4">
        <h2 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Engagement
        </h2>
        {statsError && (
          <p className="font-hind text-xs text-red-500 mb-3">{statsError}</p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          <StatCard label="Total users" value={stats?.totalUsers ?? '—'} />
          <StatCard label="DAU" value={stats?.dau ?? '—'} />
          <StatCard label="MAU (30d)" value={stats?.mau ?? '—'} />
          <StatCard label="7-day retained" value={stats?.retained7d ?? '—'} />
          <StatCard label="28-day retained" value={stats?.retained28d ?? '—'} />
        </div>

        <h2 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Recent users
        </h2>
        {usersError && (
          <p className="font-hind text-xs text-red-500 mb-3">{usersError}</p>
        )}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--color-bg-card)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
        >
          {users.map((u, i) => (
            <div
              key={u.uid}
              className="flex items-center gap-3 px-4 py-3"
              style={{
                borderBottom: i === users.length - 1 ? 'none' : '1px solid var(--color-border, rgba(0,0,0,0.06))',
              }}
            >
              {u.photoURL ? (
                <img src={u.photoURL} alt="" width={32} height={32} className="rounded-full" />
              ) : (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-hind text-xs"
                  style={{ backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                >
                  {(u.displayName ?? u.email ?? '?')[0].toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-hind font-medium text-sm truncate" style={{ color: 'var(--color-text-primary)' }}>
                  {u.displayName ?? u.email ?? u.uid}
                </p>
                <p className="font-hind text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>
                  {u.email ?? '—'} · {u.loginCount} logins
                </p>
              </div>
              <p className="font-hind text-xs flex-shrink-0" style={{ color: 'var(--color-text-muted)' }}>
                {formatRelative(u.lastSeenAt)}
              </p>
            </div>
          ))}
          {users.length === 0 && !loading && (
            <p className="font-hind text-sm py-6 text-center" style={{ color: 'var(--color-text-muted)' }}>
              No users yet.
            </p>
          )}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => load(nextCursor)}
              disabled={loading}
              className="font-hind font-medium text-sm px-5 py-2 rounded-full"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                color: 'var(--color-accent-primary)',
                border: '1px solid var(--color-accent-primary)',
                opacity: loading ? 0.5 : 1,
              }}
            >
              {loading ? 'Loading…' : 'Load more'}
            </button>
          </div>
        )}

        <p className="font-hind text-xs mt-8 text-center" style={{ color: 'var(--color-text-muted)' }}>
          For graphs &amp; funnels, see{' '}
          <a
            href={`https://console.firebase.google.com/project/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/analytics`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-accent-primary)' }}
          >
            Firebase Analytics
          </a>
          .
        </p>
      </div>
    </div>
  );
}
