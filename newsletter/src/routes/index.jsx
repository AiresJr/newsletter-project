import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { SuccessPage } from "../pages/SucessPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};
