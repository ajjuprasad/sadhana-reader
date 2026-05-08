import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'All Stotras', path: '/stotras', icon: 'grid' },
  { label: 'Stories for Kids', path: '/stories', icon: 'book' },
  { label: 'My Favorites', path: '/favorites', icon: 'heart' },
  { label: 'Coming Soon', path: '/coming-soon', icon: 'clock' },
  { label: 'Pañchāṅga 2026', path: '/panchanga', icon: 'calendar' },
  { label: 'About', path: '/about', icon: 'info' },
];

function MenuIcon({ icon }: { icon: string }) {
  const props = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (icon) {
    case 'grid':
      return <svg {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>;
    case 'heart':
      return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
    case 'calendar':
      return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
    case 'book':
      return <svg {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
    case 'info':
      return <svg {...props}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>;
    default:
      return null;
  }
}

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--color-text-primary)' }}
        aria-label="Open menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100]"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-[101] w-72 max-w-[80vw] overflow-y-auto"
              style={{ backgroundColor: 'var(--color-bg)' }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl" style={{ color: 'var(--color-accent-primary)' }}>ॐ</span>
                  <span className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                    Sādhanā Reader
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="h-px mx-5" style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.06))' }} />

              {/* Nav items */}
              <nav className="px-3 py-4">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors hover:bg-black/[0.03]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                  >
                    <span style={{ color: 'var(--color-accent-primary)', opacity: 0.8 }}>
                      <MenuIcon icon={item.icon} />
                    </span>
                    <span className="font-hind font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {item.label}
                    </span>
                    {'isNew' in item && item.isNew && (
                      <span
                        className="font-label font-semibold uppercase px-1.5 py-0.5 rounded-full"
                        style={{
                          fontSize: '0.5rem',
                          letterSpacing: '0.08em',
                          backgroundColor: 'var(--color-accent-primary)',
                          color: '#fff',
                        }}
                      >
                        NEW
                      </span>
                    )}
                  </motion.button>
                ))}
              </nav>

              <div className="h-px mx-5" style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.06))' }} />

              {/* Footer */}
              <div className="px-5 py-4">
                <p className="font-hind text-[0.65rem]" style={{ color: 'var(--color-text-muted)' }}>
                  A free, open-source project
                </p>
                <p className="font-hind text-[0.65rem] mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                  Built with Claude Code
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
