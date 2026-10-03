import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import { FAQS } from "../mock";

export default function FAQ() {
  return (
    <section data-testid="faq-section" className="section-pad">
      <div className="container-c grid lg:grid-cols-2 gap-10 lg:gap-[60px]">
        <div className="lg:sticky lg:top-[100px] self-start reveal">
          <span className="eyebrow">{FAQS.eyebrow}</span>
          <h2 className="title-h2 mt-[10px]" data-cursor="-opaque">
            {FAQS.title}
          </h2>
          <p className="mt-5 m-0 text-c-text/80">{FAQS.desc}</p>
          <div className="mt-8 lg:mt-10">
            <Link to="/#contact" className="btn-default" data-testid="faq-cta">
              view all FAQs
            </Link>
          </div>
        </div>
        <div className="reveal">
          <Accordion items={FAQS.items} testId="faq" />
        </div>
      </div>
    </section>
  );
}
