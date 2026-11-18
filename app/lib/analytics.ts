// Google Analytics 4. Tracking is off unless NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXXXXX).
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Coach = 'josh' | 'christine';

// Event names are what GA4 shows. Mark booking_click and booking_completed
// as key events in GA4 (Admin → Events) so they count as conversions.
type AnalyticsEvent =
  | { name: 'booking_click'; params: { coach: Coach; source: 'pricing' | 'coach_page'; package?: string } }
  | { name: 'booking_completed'; params: { coach: Coach } }
  | { name: 'email_click'; params: { source: string } };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ name, params }: AnalyticsEvent) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}
