export const SUBSCRIPTION_PLANS = {
  monthly: { id: 'plan_monthly', price: 99, label: '₹99/month', period: 'month' as const },
  yearly: { id: 'plan_yearly', price: 799, label: '₹799/year', period: 'year' as const, savings: '33%' },
};
