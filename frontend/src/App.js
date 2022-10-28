import HomeDashboard from "./pages/HomeDashboard";
import PageNotFound from "./pages/PageNotFound";
import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Box>
          <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;