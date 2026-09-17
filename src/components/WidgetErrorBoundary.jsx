import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 13px;
  padding: 12px;
`;

// Catches render errors in a widget so the rest of the panel stays usable.
// Class component required: error boundaries need getDerivedStateFromError
// and componentDidCatch, which have no hook equivalents.
export class WidgetErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Widget crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage>This widget couldn't be displayed.</ErrorMessage>;
    }
    return this.props.children;
  }
}
