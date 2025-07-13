import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart";
import "./App.css";
import { ProductsProvider } from "./context/ProductContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
