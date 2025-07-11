import useProductsData from "./hooks/useProductsData";
import Spinner from "./components/Spinner";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import { Router, Routes, Route, BrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import { Toaster } from "react-hot-toast";
import OrderSuccess from "./pages/OrderSuccess";
function App(){
  // const { products, loading, error } = useProductsData();

  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path="/" element={<RootLayout />} >
        <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderSuccess/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;