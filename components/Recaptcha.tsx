"use client";

import React, { useEffect, useRef } from "react";

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
  }
}

const SCRIPT_ID = "google-recaptcha-script";

interface RecaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export const Recaptcha = ({ onVerify, onExpire }: RecaptchaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;

    const renderWidget = () => {
      if (!containerRef.current || widgetIdRef.current !== null) return;
      if (!window.grecaptcha?.render) return;
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        "expired-callback": onExpire,
      });
    };

    if (window.grecaptcha?.render) {
      renderWidget();
      return;
    }

    // Poll instead of relying on a named global onload callback — avoids
    // the race where Google's script tries to call that callback before
    // React has finished mounting and defined it.
    const interval = setInterval(() => {
      if (window.grecaptcha?.render) {
        clearInterval(interval);
        renderWidget();
      }
    }, 200);

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey]);

  if (!siteKey) return null;

  return <div ref={containerRef} />;
};

export default Recaptcha;
