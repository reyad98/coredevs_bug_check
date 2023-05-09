import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentMd from "../Components/Modal/PaymentMd";
import CheckoutPage from "../Pages/CheckoutPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/pay" element={<PaymentMd />}></Route>
    </Routes>
  );
}
