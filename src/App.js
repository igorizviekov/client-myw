import React from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
