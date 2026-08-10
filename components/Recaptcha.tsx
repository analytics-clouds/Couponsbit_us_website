"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

interface RecaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export const Recaptcha = ({ onVerify, onExpire }: RecaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current) return;
    if (widgetIdRef.current !== null) return;

    const renderWidget = () => {
      if (!window.grecaptcha || !containerRef.current) return;
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "expired-callback": onExpire,
      });
    };

    if (window.grecaptcha) {
      renderWidget();
    } else {
      window.onRecaptchaLoad = renderWidget;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptReady, siteKey]);

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} />
    </>
  );
};

export default Recaptcha;
