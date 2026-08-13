import React, { useState } from 'react';

export const GridOverlay: React.FC = () => {
  const [showGridLines, setShowGridLines] = useState(true);

  return (
    <>
      {showGridLines && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 3,
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            columnGap: '24px',
            height: '100%',
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: '100%',
                borderLeft: '1px solid rgba(255, 255, 255, 0.035)',
                borderRight: index === 11 ? '1px solid rgba(255, 255, 255, 0.035)' : 'none',
                position: 'relative',
              }}
            >
              {/* Subtle monospaced column header tick mark */}
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 4,
                  fontSize: '9px',
                  fontFamily: 'Space Mono, monospace',
                  color: 'rgba(255, 255, 255, 0.15)',
                  userSelect: 'none',
                }}
              >
                C{String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Grid toggle helper button floating on bottom right */}
      <button
        onClick={() => setShowGridLines(!showGridLines)}
        data-cursor="TOGGLE GRID"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 90,
          background: showGridLines ? 'rgba(0, 245, 212, 0.12)' : 'rgba(255, 255, 255, 0.05)',
          border: showGridLines ? '1px solid #00f5d4' : '1px solid rgba(255, 255, 255, 0.15)',
          color: showGridLines ? '#00f5d4' : '#8e8e93',
          padding: '6px 12px',
          borderRadius: '8px',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.72rem',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
      >
        GRID: {showGridLines ? '12-COL ON' : 'OFF'}
      </button>
    </>
  );
};
