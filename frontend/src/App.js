import HomeDashboard from "./pages/HomeDashboard";
import PageNotFound from "./pages/PageNotFound";
import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import FileUploadPage from "./pages/FileUploadPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Box>
          <Routes>
          <Route exact path="" element={<HomeDashboard />} />
          <Route exact path="/upload" element={<FileUploadPage />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/company" element={<Company />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;