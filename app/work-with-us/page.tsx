import type { Metadata } from "next";
import { AudioProgrammeRequest } from "../components/AudioProgrammeRequest";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { collaborationDirections } from "../../data/site";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "Ways to Work Together | FA HUA Cultural Objects",
  description: "Personal commissions, channel partnerships, and institutional collaborations shaped around cultural objects, music, and heritage craft.",
};

export default function WorkWithUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero section-shell">
        <p className="eyebrow">Ways to work together</p>
        <h1>Begin with the audience, occasion, and cultural context.</h1>
        <p>Choose the route that best reflects your project. Each path leads to a structured brief so the first conversation can be useful and specific.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={sitePath("/brief/")}>Start a project brief</a>
          <a className="button button-secondary" href={sitePath("/#selected")}>Explore selected objects</a>
        </div>
      </section>

      <nav className="path-index section-shell" aria-label="Collaboration paths">
        {collaborationDirections.map((direction, index) => (
          <a href={`#${direction.id}`} key={direction.id}><span>0{index + 1}</span><b>{direction.audience}</b><em>↓</em></a>
        ))}
      </nav>

      <div className="partnership-paths">
        {collaborationDirections.map((direction, index) => (
          <section className="partnership-path section-shell" id={direction.id} key={direction.id}>
            <div className="path-heading">
              <p className="eyebrow">Path 0{index + 1} · {direction.audience}</p>
              <h2>{direction.title}</h2>
              <p>{direction.introduction}</p>
            </div>
            <div className="path-columns">
              <article><h3>What to bring</h3><ul>{direction.bring.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><h3>What we can shape</h3><ul>{direction.shape.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
            <a className="button button-primary" href={sitePath(`/brief/?path=${direction.id}`)}>Discuss this collaboration</a>
          </section>
        ))}
      </div>

      <section className="audio-programme-section section-shell"><AudioProgrammeRequest /></section>
      <SiteFooter />
    </main>
  );
}
