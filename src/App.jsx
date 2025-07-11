import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import RootLayout from './layout/RootLayout';
import { Toaster } from 'react-hot-toast';

const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
