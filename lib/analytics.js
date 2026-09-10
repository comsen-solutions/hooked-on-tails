export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") return;

  const eventParameters = {
    ...parameters,
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParameters);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventParameters });
}

export function trackBookingClick({ tripType, source, action = "booking" }) {
  const eventName =
    action === "phone" ? "booking_phone_click" : "booking_cta_click";

  trackEvent(eventName, {
    trip_type: tripType || "not_selected",
    link_source: source,
  });
}
