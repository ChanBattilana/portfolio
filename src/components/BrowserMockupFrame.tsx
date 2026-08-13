import React, { useState } from 'react';
import { Lock, RotateCw, Copy, Check, Maximize2, Minimize2, Globe, Monitor } from 'lucide-react';

interface BrowserMockupFrameProps {
  children: React.ReactNode;
}

export const BrowserMockupFrame: React.FC<BrowserMockupFrameProps> = ({ children }) => {
  const [isWindowed, setIsWindowed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  const url = 'http://localhost:3000/santos-battilana';

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReload = () => {
    setIsReloading(true);
    setTimeout(() => setIsReloading(false), 600);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isWindowed ? '#040507' : 'transparent',
        padding: isWindowed ? '1.5rem 2rem' : '0',
        transition: 'padding 0.4s ease, background-color 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Viewport mode toggle header on desktop workspace */}
      {isWindowed && (
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            marginBottom: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#8e8e93',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Monitor size={14} color="#00f5d4" />
            <span>MODE: BROWSER SCREENSHOT MOCKUP ( 1440 × 900 )</span>
          </div>

          <button
            onClick={() => setIsWindowed(false)}
            data-cursor="EXPAND VIEW"
            style={{
              background: 'rgba(0, 245, 212, 0.08)',
              border: '1px solid rgba(0, 245, 212, 0.25)',
              color: '#00f5d4',
              padding: '4px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
            }}
          >
            <Maximize2 size={12} />
            <span>FULLSCREEN VIEW</span>
          </button>
        </div>
      )}

      {/* Main Browser Window Frame Container */}
      <div
        style={{
          width: '100%',
          maxWidth: isWindowed ? '1440px' : '100%',
          borderRadius: isWindowed ? '14px' : '0',
          border: isWindowed ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
          boxShadow: isWindowed
            ? '0 30px 90px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 245, 212, 0.08)'
            : 'none',
          overflow: 'hidden',
          backgroundColor: '#0a0a0a',
          transition: 'all 0.4s ease',
          position: 'relative',
        }}
      >
        {/* Browser Top Navigation Chrome Bar */}
        <div
          style={{
            backgroundColor: '#111318',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            userSelect: 'none',
            zIndex: 50,
            position: 'relative',
          }}
        >
          {/* Window Action Dots (macOS style) */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56', border: '1px solid #e0443e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e', border: '1px solid #dea123' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f', border: '1px solid #1aab29' }} />
          </div>

          {/* Simulated Active Browser Tab */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0a0a0a',
              padding: '6px 14px',
              borderRadius: '8px 8px 0 0',
              fontSize: '0.78rem',
              color: '#f5f5f7',
              fontFamily: 'Inter, sans-serif',
              borderTop: '2px solid #00f5d4',
              maxWidth: '240px',
            }}
          >
            <Globe size={13} color="#00f5d4" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              SANTOS BATTILANA
            </span>
          </div>

          {/* Address Bar */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#181b22',
              borderRadius: '8px',
              padding: '6px 14px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
              fontFamily: 'DM Sans, sans-serif',
              color: '#a0a0a8',
            }}
          >
            <Lock size={13} color="#00f5d4" />
            <span style={{ color: '#ffffff', flex: 1 }}>{url}</span>
            
            <button
              onClick={handleReload}
              title="Reload Page"
              style={{
                background: 'none',
                border: 'none',
                color: '#8e8e93',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transform: isReloading ? 'rotate(360deg)' : 'none',
                transition: 'transform 0.6s ease',
              }}
            >
              <RotateCw size={13} />
            </button>

            <button
              onClick={handleCopy}
              title="Copy URL"
              data-cursor="COPY URL"
              style={{
                background: 'none',
                border: 'none',
                color: copied ? '#00f5d4' : '#8e8e93',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
            </button>
          </div>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#00f5d4' }}>
              LOCAL: PORT 3000
            </span>

            <button
              onClick={() => setIsWindowed(!isWindowed)}
              title={isWindowed ? 'Exit Windowed Frame' : 'Enter Windowed Frame'}
              data-cursor="TOGGLE FRAME"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {isWindowed ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* Browser Content Area */}
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
