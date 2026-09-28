import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../viewmodels/ThemeContext";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { WhyUsPage } from "./pages/WhyUsPage";
import { CoveragePage } from "./pages/CoveragePage";
import { QuotePage } from "./pages/QuotePage";
import { ContactPage } from "./pages/ContactPage";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col transition-colors duration-300">
          <Header />
          <main className="grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/coverage" element={<CoveragePage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
