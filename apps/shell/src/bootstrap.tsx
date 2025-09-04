import * as React from "react";
import { createRoot } from "react-dom/client";

type RemoteModule = { default: React.ComponentType };
const ProductsApp = React.lazy(async () => {
  // matches remote exposes key
  const mod = (await import("products/App")) as RemoteModule;
  return { default: mod.default };
});

function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Shell (host)</h1>
      <React.Suspense fallback={<p>Loading Products…</p>}>
        <ProductsApp />
      </React.Suspense>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
