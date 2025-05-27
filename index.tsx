
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { Language } from './translations'; // To pass initial language to ErrorBoundary if needed

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Determine initial language for ErrorBoundary if needed, e.g., from localStorage or browser settings
// For simplicity, we'll just let App.tsx handle the language state primarily.
// ErrorBoundary can have its own lang prop if we want to pass it explicitly here.

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary lang={Language.DE}> {/* Pass default/initial lang if desired */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
