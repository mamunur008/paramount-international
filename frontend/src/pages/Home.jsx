import React from "react";
import { CompanyHero, CompanyServices, CompanyIntroduction, SelectedCompanyProjects, TeamPreview, StrengthPreview } from "../components/CompanySections";
import { ContactCTA } from "../components/Footer";
export default function Home() {
  return <div data-testid="home-page"><CompanyHero/><CompanyServices/><CompanyIntroduction/><SelectedCompanyProjects/><TeamPreview/><StrengthPreview/><ContactCTA/></div>;
}
