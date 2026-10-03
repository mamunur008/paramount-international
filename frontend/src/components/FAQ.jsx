import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQS } from "../mock";

export default function FAQ() {
  return (
    <section className="section-pad relative">
      <div className="container-c">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal">
            <span className="eyebrow mb-5">{FAQS.eyebrow}</span>
            <h2 className="section-title mt-5">{FAQS.title}</h2>
            <p className="mt-6 text-gray-400 leading-relaxed">{FAQS.desc}</p>
            <a href="#contact" className="btn-lime px-7 py-3.5 mt-8 inline-flex items-center gap-2">
              View all FAQs <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="lg:col-span-3 reveal">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {FAQS.items.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="card-dark px-6 border !border-white/8 data-[state=open]:!border-[#c6f934]/40"
                >
                  <AccordionTrigger className="text-left text-white font-semibold hover:no-underline py-5 text-base">
                    <span>
                      <span className="text-[#c6f934] mr-3">{String(i + 1).padStart(2, "0")}.</span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
