import React from "react";
import PageHeader from "../components/PageHeader";
import { ContactCTA } from "../components/Footer";
import {
  ServicesSection,
  ProjectsSection,
  ProductSection,
  AboutSection,
  ProcessSection,
  LeadershipSection,
  ContactSection,
  FAQSection,
} from "../components/SiteSections";
const heading = (eyebrow, title) => (
  <PageHeader
    eyebrow={eyebrow}
    title={title}
    crumbs={[{ label: "Home", to: "/" }, { label: eyebrow }]}
  />
);
export function ServicesPage() {
  return (
    <>
      {heading("Our services", "Built around your business.")}
      <ServicesSection full />
      <ProcessSection />
      <ContactCTA />
    </>
  );
}
export function ProjectsPage() {
  return (
    <>
      {heading("Our work", "Real workflows. Considered software.")}
      <ProjectsSection full />
      <ContactCTA />
    </>
  );
}
export function ProductsPage() {
  return (
    <>
      {heading("Our products", "Bring your business together.")}
      <div className="product-page">
        <ProductSection />
      </div>
      <FAQSection />
      <ContactCTA />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      {heading("Our company", "Good software starts with people.")}
      <AboutSection />
      <LeadershipSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
export function ContactPage() {
  return (
    <>
      {heading("Contact", "Let’s make something useful.")}
      <div className="contact-page">
        <ContactSection />
      </div>
      <FAQSection />
    </>
  );
}
export function PrivacyPage() {
  return (
    <>
      {heading("Privacy", "Your enquiry, handled with care.")}
      <section className="section-pad">
        <article className="container-c prose-content max-w-3xl">
          <h2>Information you send us</h2>
          <p>
            The contact form asks for your name, email address, organisation,
            phone number, service interest and project message. We use the
            information you choose to provide to respond to your enquiry and
            discuss a possible engagement.
          </p>
          <h2>Form processing</h2>
          <p>
            Form submissions are processed through Netlify Forms for delivery to
            Paramount International. Please avoid including passwords or
            confidential customer records in your message.
          </p>
          <h2>Display preferences</h2>
          <p>
            This website stores your theme and cursor selections in your
            browser’s local storage. These preferences stay on your device and
            can be removed by clearing the site’s stored data. Custom cursors
            are disabled on touch devices and when reduced motion is enabled.
          </p>
          <h2>Questions</h2>
          <p>
            For questions about information you have submitted, contact{" "}
            <a href="mailto:anam4mba@gmail.com">anam4mba@gmail.com</a>.
          </p>
        </article>
      </section>
    </>
  );
}
