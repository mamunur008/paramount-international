import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div data-testid="not-found-page">
      <PageHeader title="Page not found" crumbs={[{ label: "Home", to: "/" }, { label: "404" }]} />
      <section className="section-pad text-center">
        <div className="container-c max-w-[640px]">
          <div className="text-[120px] lg:text-[160px] font-bold leading-none text-c-accent/20">404</div>
          <p className="mt-2 text-c-text/80">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8">
            <Link to="/" className="btn-default" data-testid="back-home">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
