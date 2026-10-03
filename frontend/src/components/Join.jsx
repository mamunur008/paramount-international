import React, { useState } from "react";
import { Phone, Mail, ArrowUpRight, Star } from "lucide-react";
import { JOIN, IMAGES } from "../mock";
import { useToast } from "../hooks/use-toast";

export default function Join() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    <section id="contact" className="section-pad relative">
      <div className="container-c">
        <div className="rounded-[2rem] bg-[#101210] border border-white/8 p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#c6f934]/10 blur-[120px]" />
          <div className="relative z-10 reveal">
            <span className="eyebrow mb-5">{JOIN.eyebrow}</span>
            <h2 className="section-title mt-5">{JOIN.title}</h2>

            <div className="mt-10 space-y-5">
              <a href={JOIN.contact.href} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#c6f934]/10 text-[#c6f934] flex items-center justify-center group-hover:bg-[#c6f934] group-hover:text-[#0a0b0a] transition-colors">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-gray-500">{JOIN.contact.label}</span>
                  <span className="font-semibold text-white">{JOIN.contact.value}</span>
                </span>
              </a>
              <a href={JOIN.email.href} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-[#c6f934]/10 text-[#c6f934] flex items-center justify-center group-hover:bg-[#c6f934] group-hover:text-[#0a0b0a] transition-colors">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs text-gray-500">{JOIN.email.label}</span>
                  <span className="font-semibold text-white">{JOIN.email.value}</span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {IMAGES.authors.map((a, i) => (
                  <img key={i} src={a} alt="" className="w-9 h-9 rounded-full border-2 border-[#101210] object-cover" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-[#c6f934]">
                <Star size={15} fill="#c6f934" stroke="#c6f934" />
                <span className="text-sm text-gray-300">4.9/5 · Over 4200 Reviews</span>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="relative z-10 reveal space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-[#0a0b0a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c6f934] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-[#0a0b0a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c6f934] transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-[#0a0b0a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c6f934] transition-colors resize-none"
            />
            <button type="submit" className="btn-lime w-full py-4 flex items-center justify-center gap-2">
              Get a Free Consultation <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
