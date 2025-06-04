'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function CalendlyScript() {
  useEffect(() => {
    // This ensures the Calendly object is available globally
    if (typeof window !== 'undefined') {
      window.Calendly = window.Calendly || {};
    }
  }, []);

  return (
    <>
      <link
        href='https://assets.calendly.com/assets/external/widget.css'
        rel='stylesheet'
      />
      <Script
        src='https://assets.calendly.com/assets/external/widget.js'
        strategy='lazyOnload'
      />
    </>
  );
}
