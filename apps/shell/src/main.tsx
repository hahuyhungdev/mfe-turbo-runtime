import * as React from "react";
import ReactDOM from "react-dom/client";

const ProductsApp = React.lazy(async () => {
  try {
    const mod = await import("products/App");
    // Handle both default and named exports
    return { default: mod.default || mod };
  } catch (error) {
    console.error("Failed to load products app:", error);
    // Return a fallback component
    return {
      default: () => (
        <div style={{ color: "red", padding: "20px" }}>
          <h2>Failed to load Products App</h2>
          <p>Please make sure the products service is running on port 3002</p>
        </div>
      ),
    };
  }
});

function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Shell (Host App)</h1>
      <React.Suspense
        fallback={
          <div style={{ padding: "20px", background: "#f0f0f0" }}>
            <p>Loading Products App...</p>
          </div>
        }
      >
        <ProductsApp />
      </React.Suspense>
    </div>
  );
}

// Check if root already exists to prevent double mounting
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasAttribute("data-reactroot")) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
  rootElement.setAttribute("data-reactroot", "true");
}
