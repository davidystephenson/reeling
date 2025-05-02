import { JSX, useEffect } from 'react'

export default function LoaderView(): JSX.Element {
  // Create the keyframes animation dynamically
  useEffect(() => {
    // Create a style element if it doesn't exist
    const styleId = 'cloudsort-rotation-keyframes';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = `
        @keyframes cloudsort-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(styleEl);
    }
    
    // Clean up on unmount
    return () => {
      const styleEl = document.getElementById(styleId);
      if (styleEl) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  return (
    <span
      style={{
        height: '22px',
        width: '22px',
        border: '3px solid rgba(255, 255, 255, 0.75)',
        borderRightColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: 'cloudsort-rotation 1s linear infinite'
      }}
    />
  );
}
