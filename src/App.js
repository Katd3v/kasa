import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Description from "./pages/Description";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Ce lien dirige vers la page de détails de l'appartement avec l'id correspondant */}
          <Route path="/appartements/:id" element={<Description />} />
          {/* path="*" fonctionne si jamais l'url n'est pas retrouvé'*/}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
