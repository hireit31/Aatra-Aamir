import { BrowserRouter, Navigate, Routes, useNavigate } from "react-router";
import AppLayout from "./components/AppLayout/AppLayout";
import { Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import FoodPage from "./pages/FoodPage";
import EcommercePage from "./pages/EcommercePage";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<LandingPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="ecommerce" element={<EcommercePage />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      {/* <AppNavbar />
      <GridLayout /> */}
    </>
  );
}

export default App;
