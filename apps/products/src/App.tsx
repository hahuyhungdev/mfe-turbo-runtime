import { Button } from "@mfe/ui";

function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Products App</h1>

      <h2>Products (remote)</h2>
      <Button onClick={() => alert("Add to cart!")}>Add to cart</Button>
    </div>
  );
}
export default App;
