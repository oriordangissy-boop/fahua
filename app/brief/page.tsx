import type { Metadata } from "next";
import { BriefForm } from "./BriefForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Start a Project Brief | FA HUA Cultural Objects",
  description: "Share the context for a personal commission, channel partnership, institutional collaboration, or audio programme request.",
};

export default function BriefPage() {
  return (
    <main>
      <SiteHeader />
      <section className="brief-hero section-shell">
        <div>
          <p className="eyebrow">Project brief</p>
          <h1>Give the first conversation a clear place to begin.</h1>
        </div>
        <p>Tell us who the project is for, why it matters, and what practical boundaries we should understand. We will use this context to identify the right object or collaboration path.</p>
      </section>
      <BriefForm />
      <SiteFooter />
    </main>
  );
}
