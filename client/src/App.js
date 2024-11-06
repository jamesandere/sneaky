import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Purchase from "./components/checkout-components/Purchase";
import Shipping from "./components/checkout-components/Shipping";
import Dashboard from "./admin/Dashboard";
import Summary from "./admin/Summary";
// import Products from "./admin/Products";
import CreateProduct from "./admin/CreateProduct";
import EditProduct from "./admin/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<Summary />} />
            {/* <Route path="products" element={<Products />} /> */}
            <Route path="create-product" element={<CreateProduct />} />
            {/* <Route path="edit-product/:id" element={<EditProduct />} /> */}
          </Route>
          <Route path="/checkout" element={<Checkout />}>
            <Route index element={<Shipping />} />
            <Route path="payment" element={<Purchase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
