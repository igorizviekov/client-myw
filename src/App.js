import React from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/UI/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
