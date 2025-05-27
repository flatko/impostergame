
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';
import Card from './Card';
import { translations, Language } from '../translations'; 

interface Props {
  children: ReactNode;
  lang?: Language; 
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  }

  public render() {
    const lang = this.props.lang || Language.EN;
    const t = translations[lang];


    if (this.state.hasError) {
      return (
        // Ensure error boundary background and text match the new theme
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-[var(--color-brand-background)] text-[var(--color-brand-text)]">
            {/* Card component will already use new theme colors */}
            <Card className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-[var(--color-danger)] mb-4">{t.errorBoundaryTitle}</h1>
                <p className="text-[var(--color-brand-text)] mb-6">
                  {t.errorBoundaryMessage}
                </p>
                {this.state.error && (
                    // Use a card-internal darker background for the error detail pre
                    <pre className="text-xs text-[var(--color-brand-text-muted)] bg-[var(--color-brand-input-bg)] p-3 rounded-md overflow-auto max-h-32 mb-6 text-left">
                        {this.state.error.toString()}
                    </pre>
                )}
                <Button onClick={this.handleRefresh} variant="primary" size="lg">
                    {t.errorBoundaryAction}
                </Button>
            </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;