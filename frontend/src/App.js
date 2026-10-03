import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import useReveal from "./hooks/useReveal";
import { ThemeProvider } from "./context/ThemeContext";
import { CursorProvider } from "./context/CursorContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/cursor/CustomCursor";
import CursorPicker from "./components/cursor/CursorPicker";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  useReveal(pathname);
  return (
    <div className="App">
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CursorPicker />
      <CustomCursor />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CursorProvider>
    </ThemeProvider>
  );
}
