import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { FOOTER } from "../mock";

const socials = [Facebook, Twitter, Linkedin, Instagram];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0b0a] border-t border-white/8 pt-16 pb-8">
      <div className="container-c">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 pb-12 border-b border-white/8">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#c6f934] text-[#0a0b0a] font-extrabold">{"</>"}</span>
              <span className="text-2xl font-extrabold text-white">codeio</span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm">{FOOTER.desc}</p>
            <div className="flex gap-3 mt-6">
              {socials.map((Icon, i) => (
                <a key={i} href="#home" className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center text-gray-300 hover:bg-[#c6f934] hover:text-[#0a0b0a] hover:border-[#c6f934] transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER.columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold text-white mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#home" className="text-sm text-gray-400 hover:text-[#c6f934] transition-colors inline-flex items-center gap-1 group">
                      <ArrowUpRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-10 border-b border-white/8">
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#c6f934]/10 text-[#c6f934] flex items-center justify-center"><Phone size={18} /></span>
            <span className="text-sm"><span className="block text-gray-500 text-xs">Phone</span><span className="text-white font-medium">{FOOTER.contact.phone}</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#c6f934]/10 text-[#c6f934] flex items-center justify-center"><Mail size={18} /></span>
            <span className="text-sm"><span className="block text-gray-500 text-xs">Email</span><span className="text-white font-medium">{FOOTER.contact.email}</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#c6f934]/10 text-[#c6f934] flex items-center justify-center shrink-0"><MapPin size={18} /></span>
            <span className="text-sm"><span className="block text-gray-500 text-xs">Address</span><span className="text-white font-medium">{FOOTER.contact.address}</span></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-gray-500">© 2025 Codeio. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#home" className="hover:text-[#c6f934] transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-[#c6f934] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
