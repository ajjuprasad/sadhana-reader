import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../i18n/useTranslation';

export default function UserMenu() {
  const { user, loading, signIn, signOut } = useAuth();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  if (loading) return null;

  if (!user) {
    return (
      <button
        onClick={signIn}
        className="p-2 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--color-text-primary)' }}
        aria-label={t('auth.signIn')}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 hover:opacity-80 transition-opacity"
        aria-label="User menu"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="w-7 h-7 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center font-hind font-semibold text-xs"
            style={{
              backgroundColor: 'var(--color-accent-primary)',
              color: 'white',
            }}
          >
            {(user.displayName || user.email || '?')[0].toUpperCase()}
          </div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-2 rounded-xl p-4 shadow-lg z-50"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              minWidth: '200px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <p
              className="font-hind font-semibold text-sm truncate"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {user.displayName}
            </p>
            <p
              className="font-body text-xs mt-0.5 truncate"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {user.email}
            </p>
            <button
              onClick={() => {
                setOpen(false);
                signOut();
              }}
              className="mt-3 w-full font-hind text-xs font-medium uppercase py-1.5 px-3 rounded-lg hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: 'rgba(255,153,51,0.12)',
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.08em',
              }}
            >
              {t('auth.signOut')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
