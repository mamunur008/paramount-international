import React, { useState } from "react";
import { Phone, Mail, Star } from "lucide-react";
import { JOIN, ABOUT } from "../mock";
import { useToast } from "../hooks/use-toast";

const ContactItem = ({ Icon, item, testId }) => (
  <a href={item.href} className="flex items-center gap-4 group" data-testid={testId}>
    <span className="w-[60px] h-[60px] shrink-0 rounded-full bg-c-accent text-white flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-[#090915]">
      <Icon size={22} />
    </span>
    <span>
      <h3 className="text-xl font-medium text-white mb-1">{item.label}</h3>
      <p className="m-0 text-white/80 group-hover:text-white transition-colors">{item.value}</p>
    </span>
  </a>
);

export default function Join() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    toast({ title: "Request sent!", description: "Our team will reach out to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" data-testid="contact-section" className="dark-section section-pad overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[500px] rounded-full bg-c-accent/20 blur-[150px]" />
        <div className="hero-shape hero-shape-1 !top-[80px]" />
        <div className="hero-shape hero-shape-2 !top-auto bottom-[80px]" />
      </div>
      <div className="container-c relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
        <div className="reveal">
          <span className="eyebrow">{JOIN.eyebrow}</span>
          <h2 className="title-h2 mt-[10px] text-white" data-cursor="-opaque">
            {JOIN.title}
          </h2>
          <div className="mt-8 lg:mt-10 rounded-[20px] lg:rounded-[30px] bg-white/10 backdrop-blur-xl p-5 lg:p-[30px] grid sm:grid-cols-2 gap-6">
            <ContactItem Icon={Phone} item={JOIN.contact} testId="contact-phone" />
            <ContactItem Icon={Mail} item={JOIN.email} testId="contact-email" />
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-2 font-semibold text-white">
            <li>{ABOUT.rating}</li>
            <li className="flex text-c-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
              ))}
            </li>
            <li>{ABOUT.reviews}</li>
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-[20px] lg:rounded-[30px] bg-white/10 backdrop-blur-xl p-5 lg:p-10 space-y-4 reveal" data-testid="contact-form" noValidate>
          <input type="text" placeholder="Your Name" value={form.name} onChange={set("name")} className="form-control" data-testid="contact-name-input" />
          <input type="email" placeholder="Your Email" value={form.email} onChange={set("email")} className="form-control" data-testid="contact-email-input" />
          <textarea rows={4} placeholder="Tell us about your project" value={form.message} onChange={set("message")} className="form-control resize-none" data-testid="contact-message-input" />
          <button type="submit" className="btn-default w-full" data-testid="contact-submit-button">
            Get a Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
