import React from 'react';

interface BrowserMockupFrameProps {
  children: React.ReactNode;
}

export const BrowserMockupFrame: React.FC<BrowserMockupFrameProps> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0a0a0a',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

