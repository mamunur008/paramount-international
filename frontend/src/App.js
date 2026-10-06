import "./App.css";
import "./polish.css";
import "./company.css";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import useReveal from "./hooks/useReveal";
import { ThemeProvider } from "./context/ThemeContext";
import { CursorProvider } from "./context/CursorContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/cursor/CustomCursor";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Engineering from "./pages/Engineering";
import { CompanyPage, LeadershipPage } from "./pages/CompanyPages";
import {
  ServicesPage,
  ProjectsPage,
  ProductsPage,
  ContactPage,
  PrivacyPage,
} from "./pages/CollectionPages";
import NotFound from "./pages/NotFound";
import { SERVICES, PROJECTS, BRAND } from "./data/siteContent";
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = setTimeout(
        () =>
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            }),
        60,
      );
      return () => clearTimeout(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  useEffect(() => {
    const labels = {
      "/": "Business software, thoughtfully built",
      "/about": "Our company",
      "/leadership": "Leadership and team",
      "/services": "Software services",
      "/products": "Our products",
      "/engineering": "Engineering and technology",
      "/projects": "Our work",
      "/contact": "Contact",
      "/privacy": "Privacy",
    };
    const entry = [...SERVICES, ...PROJECTS].find((p) =>
      pathname.endsWith("/" + p.slug),
    );
    document.title = `${entry?.title || labels[pathname] || "Page not found"} | Paramount International`;
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", BRAND.domain + pathname);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        entry?.desc ||
          "Paramount International builds custom software, enterprise platforms and connected business tools from Dhaka, Bangladesh. Explore our products, work and team.",
      );
  }, [pathname]);
  return null;
}
function Layout() {
  const { pathname } = useLocation();
  useReveal(pathname);
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <RouteEffects />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route
            path="/portfolio"
            element={<Navigate to="/projects" replace />}
          />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CustomCursor />
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
