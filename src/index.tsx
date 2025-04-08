import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "./screens/Box/Box";
import { Products } from "./screens/Products/Products"; // Import the new Products screen
import "../tailwind.css"; // Correct path to the CSS file in the root directory

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/products" element={<Products />} /> {/* Add route for products */}
        {/* Add other routes here if needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
