import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import type { useSettings } from '../hooks/useSettings';
import type { Settings, Language } from '../hooks/useSettings';
import { useTranslation } from '../i18n/useTranslation';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'ml', label: 'മലയാളം' },
];

interface ProfileScreenProps {
  settingsState: ReturnType<typeof useSettings>;
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onChange}
      className="relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron"
      style={{
        backgroundColor: checked
          ? 'var(--color-accent-primary)'
          : 'var(--color-text-muted)',
        opacity: checked ? 1 : 0.4,
      }}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <span
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300"
        style={{
          transform: checked ? 'translateX(20px)' : 'translateX(0)',
        }}
      />
    </button>
  );
}

export default function ProfileScreen({ settingsState }: ProfileScreenProps) {
  const navigate = useNavigate();
  const { user, loading, signIn, signOut } = useAuth();
  const { t } = useTranslation();
  const { settings, applySettings } = settingsState;
  const [draft, setDraft] = useState<Settings>(settings);

  const update = (partial: Partial<Settings>) => {
    const next = { ...draft, ...partial };
    setDraft(next);
    applySettings(next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <motion.header
        className="sticky top-0 z-30 flex items-center px-4 py-3"
        style={{ backgroundColor: 'var(--color-bg)' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: sacredEase as unknown as number[] }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-hind text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label="Go back"
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">{t('common.back')}</span>
        </button>
      </motion.header>

      {/* Content */}
      <div className="flex-1 px-4 pb-10">
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: sacredEase as unknown as number[] }}
        >
          {/* Account section */}
          {!loading && (
            <section className="mb-8">
              {user ? (
                <div className="flex flex-col items-center py-4">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-20 h-20 rounded-full mb-3"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center font-hind font-bold text-2xl mb-3"
                      style={{
                        backgroundColor: 'var(--color-accent-primary)',
                        color: 'white',
                      }}
                    >
                      {(user.displayName || user.email || '?')[0].toUpperCase()}
                    </div>
                  )}
                  <p
                    className="font-display font-bold text-xl"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {user.displayName}
                  </p>
                  <p
                    className="font-body text-sm mt-0.5"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {user.email}
                  </p>
                  {user.metadata.creationTime && (
                    <p
                      className="font-hind text-xs mt-2"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {t('profile.memberSince', {
                        date: new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
                          month: 'long',
                          year: 'numeric',
                        }),
                      })}
                    </p>
                  )}
                  <button
                    onClick={async () => {
                      await signOut();
                      navigate('/');
                    }}
                    className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-hind font-semibold text-sm mt-5"
                    style={{
                      backgroundColor: 'rgba(255,153,51,0.12)',
                      color: 'var(--color-accent-primary)',
                    }}
                  >
                    {t('auth.signOut')}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center py-4">
                  {/* Deepam illustration */}
                  <div className="w-20 h-20 rounded-full mb-3 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.9 }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Outer glow rings */}
                      <circle cx="24" cy="14" r="10" fill="#FFF3E0" opacity="0.10" />
                      <circle cx="24" cy="14" r="7" fill="#FFF3E0" opacity="0.15" />
                      {/* Flame — outer teardrop */}
                      <path
                        d="M24 4 C21.5 9 19 13.5 19 16.5 C19 19.8 21.2 22 24 22 C26.8 22 29 19.8 29 16.5 C29 13.5 26.5 9 24 4Z"
                        fill="#FFF3E0"
                        opacity="0.9"
                      />
                      {/* Flame — inner bright core */}
                      <path
                        d="M24 9 C22.8 12 21.5 14.5 21.5 16.5 C21.5 18.5 22.6 20 24 20 C25.4 20 26.5 18.5 26.5 16.5 C26.5 14.5 25.2 12 24 9Z"
                        fill="white"
                        opacity="0.95"
                      />
                      {/* Wick */}
                      <line x1="24" y1="22" x2="24" y2="24.5" stroke="#FFF3E0" strokeWidth="1" opacity="0.6" />
                      {/* Lamp rim — ornate top edge */}
                      <ellipse cx="24" cy="25" rx="11" ry="2.5" fill="#FFF3E0" opacity="0.85" />
                      <ellipse cx="24" cy="25" rx="9" ry="1.8" fill="var(--color-accent-primary)" opacity="0.7" />
                      {/* Decorative dots on rim */}
                      <circle cx="15" cy="25" r="0.8" fill="white" opacity="0.7" />
                      <circle cx="18" cy="24" r="0.6" fill="white" opacity="0.5" />
                      <circle cx="21" cy="23.5" r="0.6" fill="white" opacity="0.5" />
                      <circle cx="27" cy="23.5" r="0.6" fill="white" opacity="0.5" />
                      <circle cx="30" cy="24" r="0.6" fill="white" opacity="0.5" />
                      <circle cx="33" cy="25" r="0.8" fill="white" opacity="0.7" />
                      {/* Bowl — elegant curved body */}
                      <path
                        d="M13 25 Q13 27 14.5 30 Q17 35 24 37 Q31 35 33.5 30 Q35 27 35 25"
                        fill="#FFF3E0"
                        opacity="0.7"
                      />
                      {/* Bowl decorative band */}
                      <path
                        d="M15 28 Q19.5 30 24 30 Q28.5 30 33 28"
                        stroke="var(--color-accent-primary)"
                        strokeWidth="0.6"
                        fill="none"
                        opacity="0.5"
                      />
                      <path
                        d="M16.5 31 Q20 33 24 33 Q28 33 31.5 31"
                        stroke="var(--color-accent-primary)"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.4"
                      />
                      {/* Decorative petals on bowl */}
                      <circle cx="19" cy="29" r="0.5" fill="white" opacity="0.4" />
                      <circle cx="24" cy="30.5" r="0.5" fill="white" opacity="0.4" />
                      <circle cx="29" cy="29" r="0.5" fill="white" opacity="0.4" />
                      {/* Stem */}
                      <path
                        d="M21 37 Q24 38.5 27 37 L26 41 Q24 42 22 41Z"
                        fill="#FFF3E0"
                        opacity="0.65"
                      />
                      {/* Base — lotus-petal pedestal */}
                      <ellipse cx="24" cy="42" rx="5.5" ry="1.5" fill="#FFF3E0" opacity="0.6" />
                      <path d="M18.5 42 Q20 40 21.5 42" stroke="#FFF3E0" strokeWidth="0.5" fill="none" opacity="0.4" />
                      <path d="M21.5 42 Q23 40.5 24 42" stroke="#FFF3E0" strokeWidth="0.5" fill="none" opacity="0.4" />
                      <path d="M24 42 Q25 40.5 26.5 42" stroke="#FFF3E0" strokeWidth="0.5" fill="none" opacity="0.4" />
                      <path d="M26.5 42 Q28 40 29.5 42" stroke="#FFF3E0" strokeWidth="0.5" fill="none" opacity="0.4" />
                      {/* Spout — traditional diya nozzle */}
                      <path
                        d="M13 25 Q10 25.5 9 27 Q10 28 13 27"
                        fill="#FFF3E0"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-display font-bold text-xl"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {t('profile.welcome')}
                  </p>
                  <p
                    className="font-body text-xs text-center mt-1.5 max-w-[15rem] leading-relaxed mb-5"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {t('auth.signInReason')}
                  </p>
                  {/* Sign in button */}
                  <button
                    onClick={signIn}
                    className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-hind font-semibold text-sm"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      color: 'var(--color-text-primary)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                    {t('auth.signIn')}
                  </button>
                </div>
              )}
            </section>
          )}

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ backgroundColor: 'var(--color-text-muted)', opacity: 0.15 }}
          />

          {/* Settings section */}
          <h2
            className="font-hind font-semibold uppercase mb-6"
            style={{
              fontSize: '0.625rem',
              color: 'var(--color-accent-primary)',
              letterSpacing: '0.18em',
            }}
          >
            {t('settings.title')}
          </h2>

          {/* Font Size */}
          <div className="mb-8">
            <label
              className="block font-hind font-semibold text-sm mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('settings.fontSize', { size: draft.fontSize })}
            </label>
            <input
              type="range"
              min={14}
              max={36}
              step={1}
              value={draft.fontSize}
              onChange={(e) => update({ fontSize: Number(e.target.value) })}
              className="w-full accent-saffron"
              aria-label="Adjust font size"
            />
            <p
              className="font-sanskrit text-center mt-3"
              lang="sa"
              style={{
                fontSize: `${draft.fontSize}px`,
                color: 'var(--color-text-primary)',
                lineHeight: 2.2,
              }}
            >
              ॐ नमः शिवाय
            </p>
          </div>

          {/* Deepam Mode */}
          <div className="flex items-center justify-between mb-6 py-3">
            <div>
              <p
                className="font-hind font-semibold text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t('settings.deepamMode')}
              </p>
              <p
                className="font-hind text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {t('settings.deepamDesc')}
              </p>
            </div>
            <Toggle
              checked={draft.deepamMode}
              onChange={() => update({ deepamMode: !draft.deepamMode })}
              label="Toggle Deepam Mode"
            />
          </div>

          {/* Hide Sanskrit */}
          <div className="flex items-center justify-between mb-6 py-3">
            <div>
              <p
                className="font-hind font-semibold text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t('settings.hideSanskrit')}
              </p>
              <p
                className="font-hind text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {t('settings.hideSanskritDesc')}
              </p>
            </div>
            <Toggle
              checked={draft.hideSanskrit}
              onChange={() => update({ hideSanskrit: !draft.hideSanskrit })}
              label="Toggle Hide Sanskrit Verses"
            />
          </div>

          {/* Language */}
          <div className="py-3 mb-8">
            <label
              className="block font-hind font-semibold text-sm mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('settings.language')}
            </label>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => update({ language: lang.code })}
                  className="px-4 py-2 rounded-full font-hind text-sm transition-all duration-200"
                  style={{
                    backgroundColor:
                      draft.language === lang.code
                        ? 'var(--color-accent-primary)'
                        : 'transparent',
                    color:
                      draft.language === lang.code
                        ? '#fff'
                        : 'var(--color-text-secondary)',
                    border:
                      draft.language === lang.code
                        ? '1px solid var(--color-accent-primary)'
                        : '1px solid var(--color-text-muted)',
                    opacity: draft.language === lang.code ? 1 : 0.7,
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
