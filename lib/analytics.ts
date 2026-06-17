// Lightweight, provider-agnostic event tracking.
// No-ops until an analytics provider (GA4 via NEXT_PUBLIC_GA_ID) is present,
// so the funnel is "measurement-ready" without committing a tracking ID.

type EventParams = Record<string, string | number | boolean | undefined>;

interface WindowWithAnalytics extends Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}

/**
 * Fire a funnel/analytics event. Safe to call anywhere (SSR no-ops).
 * Wire a provider by setting NEXT_PUBLIC_GA_ID (see components/site/Analytics).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as WindowWithAnalytics;

  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...params });
  }

  if (process.env.NODE_ENV !== "production") {
    // Visible during local dev so the funnel is verifiable without a provider.
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, params);
  }
}
