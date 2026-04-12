/** Trigger a gentle haptic vibration if the device supports it. */
export function haptic(style: 'light' | 'medium' = 'light') {
  if (!navigator.vibrate) return;
  navigator.vibrate(style === 'light' ? 10 : 20);
}
