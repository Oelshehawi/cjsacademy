// Google Analytics 4. Tracking is off unless NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXXXXX).
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Coach = 'josh' | 'christine';

// Event names are what GA4 shows. Mark booking_click as a key event in GA4
// (Admin → Events) so it counts as a conversion. Both coaches book on Google
// Calendar in a new tab, so a finished booking can't be seen from the site.
type AnalyticsEvent =
  | { name: 'booking_click'; params: { coach: Coach; source: 'pricing' | 'coach_page'; package?: string } }
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
