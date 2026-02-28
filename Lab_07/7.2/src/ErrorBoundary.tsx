import { Component } from "react";
import type { ReactNode } from "react";
interface Props {
    children: ReactNode;
    fallback: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {hasError: false};
    }

static getDerivedStateFromError(): State {
    return{hasError: true};
}

resetError = (): void => {
    this.setState({hasError: false});
};
render(): ReactNode {
    if (this.state.hasError){
        return(
            <div>
                {this.props.fallback}
                <button onClick={this.resetError}>Try again</button>
            </div>
        );
    }

    return this.props.children;
}
}
export default ErrorBoundary;