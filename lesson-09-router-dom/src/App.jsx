import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; //we import our routes and route to use below
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header";
import AboutEmployees from "./pages/AboutEmployees";
import AboutCompany from "./pages/AboutCompany";//we need to import two child route elements here 
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (
    <>
      <Header />{/**we called our header and imported it above*/}
      
      <Routes>{/**we opend routes here to put "route"s inside this (so we can renderour pages (components)) and we should import them above*/}
        
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}> {/**we add two route element in routes element thus we obtain a nested router structure //* we define an outlet element to the end of the app component to render them (children route elements)*/}
          <Route path="employees" element={<AboutEmployees />} />
          <Route path="company" element={<AboutCompany />} /> {/**due to the syntax structure of the child route element, we cannot put a slash mark at the beginning of the path */}
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        {/**if user write invalid path to the end of the URL this component will run */}
      </Routes>
      {/**when our URL address matches with a path from here, it takes us to the component of that path */}
    </>
  );
}

export default App;