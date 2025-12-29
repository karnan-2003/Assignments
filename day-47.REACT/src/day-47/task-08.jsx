import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
