'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_ID, trackEvent } from '../lib/analytics';

export default function GoogleAnalytics() {
  // Calendly's popup posts a message when a booking is confirmed, so Josh's
  // bookings count as completed, not just clicked. (Christine's Google Calendar
  // page opens in a new tab, so only the click can be tracked.)
  useEffect(() => {
    if (!GA_ID) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      if (e.data?.event === 'calendly.event_scheduled') {
        trackEvent({ name: 'booking_completed', params: { coach: 'josh' } });
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='ga4-init' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
