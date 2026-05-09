import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { startPurchase } from '../lib/razorpay';
import { SUBSCRIPTION_PLANS } from '../data/pricing';

interface Props {
  open: boolean;
  contentId: string;
  contentType: 'stotra' | 'story';
  title: string;
  price: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function PurchaseModal({ open, contentId, contentType, title, price, onClose, onSuccess }: Props) {
  const { user, signIn } = useAuth();
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuy = async () => {
    if (!user) {
      await signIn();
      return;
    }
    setPurchasing(true);
    setError(null);
    try {
      const result = await startPurchase({
        contentId,
        contentType,
        amount: price,
        title,
        userEmail: user.email ?? undefined,
        userName: user.displayName ?? undefined,
      });
      if (result.success) {
        onSuccess();
        onClose();
      }
    } catch {
      setError('Payment failed. Please try again.');
    } finally {
      setPurchasing(false);
    }
  };

  const handleSubscribe = async () => {
    if (!user) {
      await signIn();
      return;
    }
    setPurchasing(true);
    setError(null);
    try {
      const plan = SUBSCRIPTION_PLANS.monthly;
      const result = await startPurchase({
        contentId: plan.id,
        contentType: 'subscription',
        amount: plan.price,
        title: `Sadhana Reader Premium — ${plan.label}`,
        userEmail: user.email ?? undefined,
        userName: user.displayName ?? undefined,
      });
      if (result.success) {
        onSuccess();
        onClose();
      }
    } catch {
      setError('Payment failed. Please try again.');
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-4 top-1/2 z-[101] max-w-md mx-auto rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--color-bg)', transform: 'translateY(-50%)' }}
            initial={{ opacity: 0, scale: 0.95, y: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base" style={{ color: 'var(--color-text-primary)' }}>
                  Premium Content
                </h3>
                <button onClick={onClose} className="p-1 hover:opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <p className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>
                {title}
              </p>
              <p className="font-hind text-xs mb-5" style={{ color: 'var(--color-text-muted)' }}>
                This is premium content. Purchase to unlock.
              </p>

              {error && (
                <p className="font-hind text-xs text-red-500 mb-3">{error}</p>
              )}

              <button
                onClick={handleBuy}
                disabled={purchasing}
                className="w-full py-3 rounded-xl font-hind font-semibold text-sm text-white mb-3 transition-opacity"
                style={{
                  backgroundColor: 'var(--color-accent-primary)',
                  opacity: purchasing ? 0.6 : 1,
                }}
              >
                {!user ? 'Sign in to Purchase' : purchasing ? 'Processing...' : `Buy for ₹${price}`}
              </button>

              <div className="flex items-center gap-3 my-3">
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.08))' }} />
                <span className="font-hind text-[0.6rem] uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>or</span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border, rgba(0,0,0,0.08))' }} />
              </div>

              <button
                onClick={handleSubscribe}
                disabled={purchasing}
                className="w-full py-3 rounded-xl font-hind font-medium text-sm transition-opacity"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  color: 'var(--color-accent-primary)',
                  border: '1px solid rgba(255,153,51,0.3)',
                  opacity: purchasing ? 0.6 : 1,
                }}
              >
                Unlock all — {SUBSCRIPTION_PLANS.monthly.label}
              </button>

              <div className="flex items-center justify-center gap-3 mt-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-muted)' }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="font-hind text-[0.6rem]" style={{ color: 'var(--color-text-muted)' }}>
                  Secured by Razorpay · UPI, Cards, Wallets
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
