import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "../common/ui/button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (<div className="flex h-screen w-screen items-center justify-center">

                <Button type="button" key="console" onClick={() => {
                    window.history.back()
                    this.setState({ hasError: false })
                }
                }>
                    Go back
                </Button>



            </div>)
        }

        return this.props.children;
    }
}

export default ErrorBoundary;