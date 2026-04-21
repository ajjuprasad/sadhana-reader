import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import type { useSettings } from '../hooks/useSettings';
import type { Settings, Language, NarrationVoiceGender } from '../hooks/useSettings';
import { useTranslation } from '../i18n/useTranslation';

const sacredEase = [0.76, 0, 0.24, 1] as const;

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
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
  const [signingIn, setSigningIn] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const handleSignIn = async () => {
    setSigningIn(true);
    try {
      await signIn();
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = () => {
    setSigningOut(true);
    setTimeout(async () => {
      await signOut();
      navigate('/');
    }, 600);
  };

  const update = (partial: Partial<Settings>) => {
    const next = { ...draft, ...partial };
    setDraft(next);
    applySettings(next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Profile & Settings — Sadhana Reader</title>
      </Helmet>
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
          <section className="mb-8" style={{ minHeight: 160 }}>
            <AnimatePresence mode="wait">
              {!loading && (user ? (
                <motion.div
                  key="signed-in"
                  className="flex flex-col items-center py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: sacredEase as unknown as number[] }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={signingOut
                      ? { opacity: 0, scale: 0.85, transition: { duration: 0.35, delay: 0.2, ease: sacredEase as unknown as number[] } }
                      : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: sacredEase as unknown as number[] }}
                  >
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
                  </motion.div>
                  <motion.p
                    className="font-display font-bold text-xl"
                    style={{ color: 'var(--color-text-primary)' }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={signingOut
                      ? { opacity: 0, y: -6, transition: { duration: 0.3, delay: 0.14, ease: sacredEase as unknown as number[] } }
                      : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15, ease: sacredEase as unknown as number[] }}
                  >
                    {user.displayName}
                  </motion.p>
                  <motion.p
                    className="font-body text-sm mt-0.5"
                    style={{ color: 'var(--color-text-muted)' }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={signingOut
                      ? { opacity: 0, y: -6, transition: { duration: 0.3, delay: 0.08, ease: sacredEase as unknown as number[] } }
                      : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.22, ease: sacredEase as unknown as number[] }}
                  >
                    {user.email}
                  </motion.p>
                  {user.metadata.creationTime && (
                    <motion.p
                      className="font-hind text-xs mt-2"
                      style={{ color: 'var(--color-text-muted)' }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={signingOut
                        ? { opacity: 0, y: -6, transition: { duration: 0.3, delay: 0.04, ease: sacredEase as unknown as number[] } }
                        : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.28, ease: sacredEase as unknown as number[] }}
                    >
                      {t('profile.memberSince', {
                        date: new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
                          month: 'long',
                          year: 'numeric',
                        }),
                      })}
                    </motion.p>
                  )}
                  <motion.button
                    onClick={handleSignOut}
                    disabled={signingOut}
                    className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-hind font-semibold text-sm mt-5"
                    style={{
                      backgroundColor: 'rgba(255,153,51,0.12)',
                      color: 'var(--color-accent-primary)',
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={signingOut
                      ? { opacity: 0, y: -6, transition: { duration: 0.3, delay: 0, ease: sacredEase as unknown as number[] } }
                      : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35, ease: sacredEase as unknown as number[] }}
                  >
                    {t('auth.signOut')}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="guest"
                  className="flex flex-col items-center py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: sacredEase as unknown as number[] } }}
                  transition={{ duration: 0.4, ease: sacredEase as unknown as number[] }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full mb-3 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: 'var(--color-bg-card)' }}
                    animate={signingIn ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                    transition={signingIn ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : {}}
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <style>{`
                          @keyframes deepam-outer {
                            0%, 100% { opacity: 0.55; transform: scaleY(1) scaleX(1) translateX(0); }
                            20% { opacity: 0.38; transform: scaleY(0.92) scaleX(0.97) translateX(-0.8px); }
                            45% { opacity: 0.62; transform: scaleY(1.06) scaleX(1.02) translateX(0.6px); }
                            70% { opacity: 0.42; transform: scaleY(0.95) scaleX(0.98) translateX(-0.5px); }
                            90% { opacity: 0.58; transform: scaleY(1.02) scaleX(1.01) translateX(0.3px); }
                          }
                          @keyframes deepam-mid {
                            0%, 100% { opacity: 0.7; transform: scaleY(1) scaleX(1) translateX(0); }
                            18% { opacity: 0.50; transform: scaleY(0.90) scaleX(0.96) translateX(0.7px); }
                            40% { opacity: 0.75; transform: scaleY(1.08) scaleX(1.03) translateX(-0.5px); }
                            62% { opacity: 0.52; transform: scaleY(0.93) scaleX(0.97) translateX(0.4px); }
                            85% { opacity: 0.68; transform: scaleY(1.03) scaleX(1.01) translateX(-0.3px); }
                          }
                          @keyframes deepam-core {
                            0%, 100% { opacity: 0.45; transform: scaleY(1) scaleX(1) translateX(0); }
                            15% { opacity: 0.28; transform: scaleY(0.88) scaleX(0.95) translateX(-0.6px); }
                            35% { opacity: 0.55; transform: scaleY(1.10) scaleX(1.04) translateX(0.5px); }
                            55% { opacity: 0.32; transform: scaleY(0.91) scaleX(0.96) translateX(-0.4px); }
                            80% { opacity: 0.50; transform: scaleY(1.05) scaleX(1.02) translateX(0.3px); }
                          }
                          @keyframes deepam-glow {
                            0%, 100% { opacity: 1; }
                            25% { opacity: 0.75; }
                            50% { opacity: 0.92; }
                            75% { opacity: 0.78; }
                          }
                        `}</style>
                      </defs>
                      <circle cx="40" cy="40" r="40" fill="var(--color-accent-primary)" opacity="0.12" />
                      <g style={{ animation: 'deepam-glow 3.2s ease-in-out infinite' }}>
                        <circle cx="40" cy="28" r="36" fill="var(--color-accent-primary)" opacity="0.06" />
                        <circle cx="40" cy="28" r="28" fill="var(--color-accent-primary)" opacity="0.08" />
                        <circle cx="40" cy="28" r="21" fill="var(--color-accent-primary)" opacity="0.10" />
                        <circle cx="40" cy="28" r="15" fill="var(--color-accent-primary)" opacity="0.12" />
                        <circle cx="40" cy="28" r="10" fill="var(--color-accent-primary)" opacity="0.15" />
                      </g>
                      <path
                        d="M40 10 C37 17 34 23 34 27 C34 31.5 36.7 34 40 34 C43.3 34 46 31.5 46 27 C46 23 43 17 40 10Z"
                        fill="var(--color-accent-primary)"
                        style={{ animation: 'deepam-outer 3s ease-in-out infinite', transformOrigin: '40px 28px' }}
                      />
                      <path
                        d="M40 14 C38 19 36 23.5 36 27 C36 30 37.8 32 40 32 C42.2 32 44 30 44 27 C44 23.5 42 19 40 14Z"
                        fill="var(--color-accent-primary)"
                        style={{ animation: 'deepam-mid 2.6s ease-in-out infinite', transformOrigin: '40px 26px' }}
                      />
                      <path
                        d="M40 19 C39 22 38 24.5 38 27 C38 29 38.9 30.5 40 30.5 C41.1 30.5 42 29 42 27 C42 24.5 41 22 40 19Z"
                        fill="var(--color-accent-primary)"
                        style={{ animation: 'deepam-core 2.1s ease-in-out infinite', transformOrigin: '40px 25px' }}
                      />
                      <line x1="40" y1="34" x2="40" y2="37" stroke="var(--color-accent-primary)" strokeWidth="0.8" opacity="0.4" />
                      <ellipse cx="40" cy="37.5" rx="13" ry="2.8" fill="var(--color-accent-primary)" opacity="0.45" />
                      <ellipse cx="40" cy="37.5" rx="10.5" ry="2" fill="var(--color-bg-card)" opacity="0.3" />
                      <circle cx="29" cy="37.5" r="0.7" fill="var(--color-accent-primary)" opacity="0.4" />
                      <circle cx="33" cy="36.5" r="0.5" fill="var(--color-accent-primary)" opacity="0.35" />
                      <circle cx="37" cy="36" r="0.5" fill="var(--color-accent-primary)" opacity="0.3" />
                      <circle cx="43" cy="36" r="0.5" fill="var(--color-accent-primary)" opacity="0.3" />
                      <circle cx="47" cy="36.5" r="0.5" fill="var(--color-accent-primary)" opacity="0.35" />
                      <circle cx="51" cy="37.5" r="0.7" fill="var(--color-accent-primary)" opacity="0.4" />
                      <path
                        d="M27 37.5 Q27 40 29 44 Q33 50 40 52 Q47 50 51 44 Q53 40 53 37.5"
                        fill="var(--color-accent-primary)"
                        opacity="0.35"
                      />
                      <path
                        d="M29.5 41 Q34.5 43 40 43 Q45.5 43 50.5 41"
                        stroke="var(--color-accent-primary)"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.3"
                      />
                      <path
                        d="M31.5 45 Q35.5 47 40 47 Q44.5 47 48.5 45"
                        stroke="var(--color-accent-primary)"
                        strokeWidth="0.5"
                        fill="none"
                        opacity="0.25"
                      />
                      <circle cx="35" cy="42" r="0.5" fill="var(--color-accent-primary)" opacity="0.3" />
                      <circle cx="40" cy="43.5" r="0.5" fill="var(--color-accent-primary)" opacity="0.3" />
                      <circle cx="45" cy="42" r="0.5" fill="var(--color-accent-primary)" opacity="0.3" />
                      <path
                        d="M37 52 Q40 53.5 43 52 L42 57 Q40 58 38 57Z"
                        fill="var(--color-accent-primary)"
                        opacity="0.3"
                      />
                      <ellipse cx="40" cy="58" rx="6" ry="1.8" fill="var(--color-accent-primary)" opacity="0.28" />
                      <path d="M34 58 Q35.5 56 37 58" stroke="var(--color-accent-primary)" strokeWidth="0.5" fill="none" opacity="0.25" />
                      <path d="M37 58 Q38.5 56.5 40 58" stroke="var(--color-accent-primary)" strokeWidth="0.5" fill="none" opacity="0.25" />
                      <path d="M40 58 Q41.5 56.5 43 58" stroke="var(--color-accent-primary)" strokeWidth="0.5" fill="none" opacity="0.25" />
                      <path d="M43 58 Q44.5 56 46 58" stroke="var(--color-accent-primary)" strokeWidth="0.5" fill="none" opacity="0.25" />
                      <path
                        d="M27 37.5 Q24 38 23 40 Q24 41 27 40"
                        fill="var(--color-accent-primary)"
                        opacity="0.35"
                      />
                    </svg>
                  </motion.div>
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
                  <AnimatePresence mode="wait">
                    {signingIn ? (
                      <motion.p
                        key="signing-in-indicator"
                        className="font-hind text-sm py-3"
                        style={{ color: 'var(--color-text-muted)' }}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {t('auth.signingIn')}
                      </motion.p>
                    ) : (
                      <motion.button
                        key="sign-in-btn"
                        onClick={handleSignIn}
                        className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-hind font-semibold text-sm"
                        style={{
                          backgroundColor: 'var(--color-bg-card)',
                          color: 'var(--color-text-primary)',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        }}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: sacredEase as unknown as number[] }}
                      >
                        <svg width="20" height="20" viewBox="0 0 48 48">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                        {t('auth.signIn')}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </section>

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

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ backgroundColor: 'var(--color-text-muted)', opacity: 0.15 }}
          />

          {/* Narration settings */}
          <h2
            className="font-hind font-semibold uppercase mb-6"
            style={{
              fontSize: '0.625rem',
              color: 'var(--color-accent-primary)',
              letterSpacing: '0.18em',
            }}
          >
            Story Narration
          </h2>

          {/* Voice Gender */}
          <div className="mb-6">
            <label
              className="block font-hind font-semibold text-sm mb-3"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Voice
            </label>
            <div className="flex gap-2">
              {([['female', 'Female'], ['male', 'Male']] as [NarrationVoiceGender, string][]).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => update({ narrationVoice: value })}
                  className="px-4 py-2 rounded-full font-hind text-sm transition-all duration-200"
                  style={{
                    backgroundColor: draft.narrationVoice === value ? 'var(--color-accent-primary)' : 'transparent',
                    color: draft.narrationVoice === value ? '#fff' : 'var(--color-text-secondary)',
                    border: draft.narrationVoice === value ? '1px solid var(--color-accent-primary)' : '1px solid var(--color-text-muted)',
                    opacity: draft.narrationVoice === value ? 1 : 0.7,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
