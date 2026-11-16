"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { getGoogleAnalyticsId, trackPageView } from "@/lib/analytics";

export default function GoogleAnalytics() {
  const measurementId = getGoogleAnalyticsId();
  const pathname = usePathname();

  useEffect(() => {
    if (measurementId) trackPageView(pathname);
  }, [measurementId, pathname]);

  if (!measurementId) return null;

  return (
    <Script
      id="google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
  );
}
