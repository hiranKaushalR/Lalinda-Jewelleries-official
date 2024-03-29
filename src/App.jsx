import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomeCanvas from "./Pages/Home/HomeCanvas";
import AboutCanvas from "./Pages/About/AboutCanvas";
import JewelleryCanvas from "./Pages/Jewellery/JewelleryCanvas";
import OfferCanvas from "./Pages/Offers/OfferCanvas";
import NewCanvas from "./Pages/New/NewCanvas";
import ServiceCanvas from "./Pages/Service/ServiceCanvas";
import ContactCanvas from "./Pages/Contact/ContactCanvas";
import ProductCanvas from "./Pages/Product/ProductCanvas";
import NoPageIndex from "./Pages/NoPage/NoPageIndex";
import { CategoryProvider } from "./CategoryProvider";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";

function App() {
  return (
    <CategoryProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeCanvas />} />
            <Route path="jewellery/:id" element={<ProductCanvas />} />
            <Route path="jewellery/*" element={<NoPageIndex />} />
            <Route path="about" element={<AboutCanvas />} />
            <Route path="jewellery" element={<JewelleryCanvas />} />
            <Route path="offers" element={<OfferCanvas />} />
            <Route path="offers/:id" element={<ProductCanvas />} />
            <Route path="new" element={<NewCanvas />} />
            <Route path="new/:id" element={<ProductCanvas />} />
            <Route path="services" element={<ServiceCanvas />} />
            <Route path="contact" element={<ContactCanvas />} />
            <Route path="*" element={<NoPageIndex />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CategoryProvider>
  );
}

export default App;
