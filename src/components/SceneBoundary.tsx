import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback: ReactNode
}

type State = {
  failed: boolean
}

/** Keeps a WebGL/import failure from taking the whole hero down. */
export class SceneBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('3D scene failed to render', error, info)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
