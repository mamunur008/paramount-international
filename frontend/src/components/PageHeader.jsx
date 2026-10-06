import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function PageHeader({ title, crumbs = [], eyebrow }) {
  return (
    <section className="page-heading">
      <div className="container-c">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="title-h1" data-testid="page-title" data-cursor="-opaque">
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ol>
            {crumbs.map((c, i) => (
              <li key={i}>
                {c.to ? (
                  <Link to={c.to}>{c.label}</Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={13} />}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
