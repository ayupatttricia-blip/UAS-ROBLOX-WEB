import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Splash from "./pages/Splash";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
