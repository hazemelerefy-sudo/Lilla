import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

// Lilla reference clone: light editorial portfolio, electric cobalt display type, asymmetric image-led composition.
export default function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
