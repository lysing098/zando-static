import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import WishList from "./page/WishList.jsx";
import NotFound from "./page/NotFound.jsx";
import ProductDetail from "./page/ProductDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Product from "./page/Product.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </Provider>
);
