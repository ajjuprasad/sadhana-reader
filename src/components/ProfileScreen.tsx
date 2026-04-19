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
                  <div className="mb-4">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Glow */}
                      <circle cx="40" cy="30" r="20" fill="var(--color-accent-primary)" opacity="0.08" />
                      <circle cx="40" cy="30" r="14" fill="var(--color-accent-primary)" opacity="0.12" />
                      {/* Flame outer */}
                      <path
                        d="M40 14 C36 22 33 28 33 32 C33 36 36.1 38 40 38 C43.9 38 47 36 47 32 C47 28 44 22 40 14Z"
                        fill="var(--color-accent-primary)"
                        opacity="0.85"
                      />
                      {/* Flame inner */}
                      <path
                        d="M40 20 C38 25 36.5 29 36.5 32 C36.5 34.5 38 36 40 36 C42 36 43.5 34.5 43.5 32 C43.5 29 42 25 40 20Z"
                        fill="#FFF3E0"
                      />
                      {/* Lamp bowl */}
                      <path
                        d="M28 42 Q28 38 33 38 L47 38 Q52 38 52 42 Q52 48 40 50 Q28 48 28 42Z"
                        fill="var(--color-accent-primary)"
                        opacity="0.7"
                      />
                      {/* Lamp rim */}
                      <ellipse cx="40" cy="38.5" rx="12" ry="2.5" fill="var(--color-accent-primary)" opacity="0.9" />
                      {/* Lamp base */}
                      <path
                        d="M35 50 Q40 52 45 50 L44 56 Q40 58 36 56Z"
                        fill="var(--color-accent-primary)"
                        opacity="0.6"
                      />
                      <ellipse cx="40" cy="56.5" rx="5" ry="1.5" fill="var(--color-accent-primary)" opacity="0.5" />
                      {/* Small decorative dots */}
                      <circle cx="34" cy="43" r="1" fill="#FFF3E0" opacity="0.5" />
                      <circle cx="40" cy="44" r="1" fill="#FFF3E0" opacity="0.5" />
                      <circle cx="46" cy="43" r="1" fill="#FFF3E0" opacity="0.5" />
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
