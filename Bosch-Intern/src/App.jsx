import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart";
import "./App.css";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
