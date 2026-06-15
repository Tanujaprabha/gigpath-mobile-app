import React, { useState, useEffect } from 'react';
import './InstallPrompt.css';

const LOCAL_STORAGE_KEY = 'gigpath-install-dismissed';
const SUPPRESSION_DAYS = 7;
const SUPPRESSION_MS = SUPPRESSION_DAYS * 24 * 60 * 60 * 1000;

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if the app is already installed / running in standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      return; // Never show if already installed
    }

    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      
      // Check if user recently dismissed the prompt
      const lastDismissedStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (lastDismissedStr) {
        const lastDismissed = parseInt(lastDismissedStr, 10);
        const now = Date.now();
        if (now - lastDismissed < SUPPRESSION_MS) {
          // Still within the suppression period, do not show
          return;
        }
      }

      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Show the custom prompt
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the native install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, hide our custom UI
    setDeferredPrompt(null);
    setShowPrompt(false);
    
    console.log(`User interaction with A2HS prompt: ${outcome}`);
  };

  const handleLaterClick = () => {
    // Hide the prompt
    setShowPrompt(false);
    
    // Store dismissal time to suppress for 7 days
    localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="install-prompt-overlay">
      <div className="install-prompt-content">
        <img src="/pwa-192x192.png" alt="GigPath Logo" className="install-prompt-logo" />
        <div className="install-prompt-text">
          <h3 className="install-prompt-title">Install GigPath</h3>
          <p className="install-prompt-desc">Install GigPath for the best mobile experience.</p>
        </div>
      </div>
      <div className="install-prompt-actions">
        <button onClick={handleLaterClick} className="btn-later">Later</button>
        <button onClick={handleInstallClick} className="btn-install">Install</button>
      </div>
    </div>
  );
}
