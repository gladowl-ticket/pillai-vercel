import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ThankYou from "../pages/ThankYou";

const AppRoutes = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/admissions-2026/" element={<Home />} />
        
        <Route path="/admissions-2026/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;