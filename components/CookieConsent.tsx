"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { Cookie, Settings, X } from "lucide-react";

type Consent = {
  analytics: boolean;
  version: 1;
};

const STORAGE_KEY = "cb_cookie_consent";

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean") return parsed;
    return null;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore
  }
}

export const CookieConsent = () => {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
  }, []);

  const saveConsent = (next: Consent) => {
    writeConsent(next);
    setConsent(next);
    setShowPreferences(false);
  };

  const acceptAll = () => saveConsent({ analytics: true, version: 1 });
  const necessaryOnly = () => saveConsent({ analytics: false, version: 1 });
  const openPreferences = () => {
    setAnalyticsDraft(consent?.analytics ?? false);
    setShowPreferences(true);
  };

  const bannerVisible = consent === null;

  return (
    <>
      {/* Necessary — always loads immediately, independent of the consent
          check below, so translation keeps working exactly as before. */}
      <Script id="google-translate-setup" strategy="afterInteractive">
        {`
          (function () {
            try {
              if (!document.cookie.includes('googtrans=')) {
                var browserLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
                if (browserLang && browserLang !== 'en') {
                  document.cookie = 'googtrans=/en/' + browserLang + '; path=/';
                }
              }
            } catch (e) {}
          })();

          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              'google_translate_element'
            );
          }
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Everything below waits for the localStorage check (avoids a flash
          of the banner before we know a choice was already made). */}
      {consent === undefined ? null : (
        <>
      {consent?.analytics && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-GG00HVDG2R"
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GG00HVDG2R');
            `}
          </Script>
        </>
      )}

      {bannerVisible && (
        <div className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] sm:max-w-xl rounded-2xl border-2 border-[#051a33] bg-white p-5 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 rounded-full bg-brand-primary/10 p-2 text-brand-primary">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#051a33]">We use cookies</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                We use cookies to keep the site running smoothly and, with
                your permission, to understand how it's used. You can accept
                all cookies or choose what you're comfortable with.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:flex-nowrap sm:items-center gap-2">
            <button
              onClick={acceptAll}
              className="w-full sm:w-auto rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-primary-dark"
            >
              Accept All
            </button>
            <button
              onClick={necessaryOnly}
              className="w-full sm:w-auto rounded-full border border-brand-primary px-4 py-2 text-xs font-bold text-brand-primary transition-colors hover:bg-brand-primary/5"
            >
              Necessary Only
            </button>
            <button
              onClick={openPreferences}
              className="w-full sm:w-auto rounded-full px-4 py-2 text-xs font-bold text-gray-500 transition-colors hover:text-[#051a33]"
            >
              Manage Preferences
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border-2 border-[#051a33] bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-brand-primary" />
              <p className="text-sm font-bold text-[#051a33]">Cookie Preferences</p>
            </div>
            <button
              onClick={() => setShowPreferences(false)}
              aria-label="Close"
              className="text-gray-400 hover:text-[#051a33]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
              <div>
                <p className="text-xs font-bold text-[#051a33]">Necessary</p>
                <p className="text-[11px] text-gray-500">Always active</p>
              </div>
              <div className="h-5 w-9 rounded-full bg-brand-primary/40 p-0.5">
                <div className="h-4 w-4 translate-x-4 rounded-full bg-brand-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-3 py-2.5">
              <div>
                <p className="text-xs font-bold text-[#051a33]">Analytics</p>
                <p className="text-[11px] text-gray-500">Helps us understand site usage</p>
              </div>
              <button
                role="switch"
                aria-checked={analyticsDraft}
                onClick={() => setAnalyticsDraft((v) => !v)}
                className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
                  analyticsDraft ? "bg-brand-primary" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition-transform ${
                    analyticsDraft ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          <button
            onClick={() => saveConsent({ analytics: analyticsDraft, version: 1 })}
            className="mt-4 w-full rounded-full bg-brand-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Save Preferences
          </button>
        </div>
      )}
        </>
      )}
    </>
  );
};

export default CookieConsent;
