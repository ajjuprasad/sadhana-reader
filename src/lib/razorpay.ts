import { getFunctions, httpsCallable } from 'firebase/functions';

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  modal?: { ondismiss?: () => void };
  prefill?: { email?: string; name?: string };
  theme?: { color?: string };
}

interface RazorpayInstance {
  open: () => void;
}

export interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

let scriptLoaded = false;

function loadRazorpayScript(): Promise<void> {
  if (scriptLoaded && window.Razorpay) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="razorpay"]');
    if (existing) {
      existing.addEventListener('load', () => { scriptLoaded = true; resolve(); });
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => { scriptLoaded = true; resolve(); };
    script.onerror = () => reject(new Error('Failed to load Razorpay'));
    document.head.appendChild(script);
  });
}

export async function startPurchase(options: {
  contentId: string;
  contentType: 'stotra' | 'story' | 'subscription';
  amount: number;
  title: string;
  userEmail?: string;
  userName?: string;
}): Promise<{ success: boolean; contentId?: string }> {
  await loadRazorpayScript();

  const functions = getFunctions();
  const createOrderFn = httpsCallable<
    { contentId: string; contentType: string; amount: number },
    { orderId: string; amount: number; currency: string; keyId: string }
  >(functions, 'createOrder');

  const { data: order } = await createOrderFn({
    contentId: options.contentId,
    contentType: options.contentType,
    amount: options.amount,
  });

  return new Promise((resolve) => {
    const rzp = new window.Razorpay({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: 'Sadhana Reader',
      description: options.title,
      order_id: order.orderId,
      handler: async (response: RazorpayResponse) => {
        try {
          const verifyFn = httpsCallable<
            { orderId: string; paymentId: string; signature: string },
            { success: boolean; contentId: string }
          >(functions, 'verifyPayment');

          const { data } = await verifyFn({
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          resolve({ success: data.success, contentId: data.contentId });
        } catch {
          resolve({ success: false });
        }
      },
      modal: {
        ondismiss: () => resolve({ success: false }),
      },
      prefill: {
        email: options.userEmail,
        name: options.userName,
      },
      theme: { color: '#FF9933' },
    });

    rzp.open();
  });
}
