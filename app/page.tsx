/* eslint-disable @next/next/no-img-element */
import { AudioProgrammeRequest } from "./components/AudioProgrammeRequest";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { siteContent } from "../data/site";
import { mediaPath, sitePath } from "../lib/paths";

const collectionOffers = [
  {
    kicker: "Wear and collect",
    title: "Collectible timepieces",
    detail: "Selected timepiece forms provide a material setting for visual motifs, commemorative themes, and stories connected to sound.",
    image: "02",
    href: sitePath("/objects/personal-keepsake/"),
    cta: "View the personal keepsake direction",
  },
  {
    kicker: "Sound and gifting",
    title: "Sound-led gifting concepts",
    detail: "Where the relevant rights are in place, sound may inform a card, presentation box, certificate, or physical keepsake.",
    image: "14",
    href: sitePath("/brief/?path=audio"),
    cta: "Request an audio programme",
  },
  {
    kicker: "Institutions and places",
    title: "Heritage-craft collaborations",
    detail: "Curatorial directions for museums, cultural programmes, gifting initiatives, and partners seeking a thoughtful collection format.",
    image: "17",
    href: sitePath("/work-with-us/#institution"),
    cta: "Explore institutional collaboration",
  },
] as const;

const values = [
  { title: "Quiet reflection", detail: "Objects that create a quiet pause in everyday life and give memory a place to settle." },
  { title: "Cultural access", detail: "Thoughtful formats that allow music and craft traditions to travel beyond specialist spaces." },
  { title: "Shared memory", detail: "Gifts and collections that connect people, institutions, and significant occasions over time." },
] as const;

export default function Home() {
  const { person, contact, objects, collaborations } = siteContent;

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-soundline" aria-hidden="true">
          {Array.from({ length: 23 }, (_, index) => <i key={index} />)}
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Buddhist-inspired vocal music · Chinese instrumental music · Heritage craft</p>
          <h1 id="hero-title">Cultural keepsakes shaped by sound, craft and story.</h1>
          <p className="hero-lede">
            We curate timepieces, sound-led gifting concepts, and heritage-craft collaborations for collectors, thoughtful gift buyers, channel partners, and cultural institutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={sitePath("/brief/")}>Start a project brief</a>
            <a className="button button-secondary" href={sitePath("/#selected")}>Explore selected objects</a>
          </div>
        </div>

        <div className="hero-objects" aria-label="Representative cultural objects">
          <a className="hero-object hero-object-main" href={sitePath("/objects/portrait-family-commission/")} aria-label="View portrait or family commission direction">
            <span className="object-orbit" aria-hidden="true" />
            <img src={mediaPath("/media/internal-review/timepieces/watch-11-transparent.png")} alt="Representative cultural object, form 11" />
            <span className="hero-caption"><b>Selected form 11</b><small>View object direction →</small></span>
          </a>
          <figure className="hero-object hero-object-small hero-object-left">
            <img src={mediaPath("/media/internal-review/timepieces/watch-02-transparent.png")} alt="Representative cultural object, form 02" />
          </figure>
          <figure className="hero-object hero-object-small hero-object-right">
            <img src={mediaPath("/media/internal-review/timepieces/watch-20-transparent.png")} alt="Representative cultural object, form 20" />
          </figure>
        </div>
      </section>

      <section className="offer-section section-shell" id="objects" aria-labelledby="objects-title">
        <div className="section-heading">
          <p className="eyebrow">What the collection offers</p>
          <h2 id="objects-title">Objects designed to be kept, given, and developed together.</h2>
          <p>A focused collection framework rather than a conventional biography or souvenir range.</p>
        </div>
        <div className="offer-grid">
          {collectionOffers.map((offer, index) => (
            <a className={index === 1 ? "offer-card offer-card-featured" : "offer-card"} href={offer.href} key={offer.title}>
              <figure>
                <span className="card-ring" aria-hidden="true" />
                <img src={mediaPath(`/media/internal-review/timepieces/watch-${offer.image}-transparent.png`)} alt={`${offer.title}, representative form ${offer.image}`} loading="lazy" />
              </figure>
              <div>
                <p className="card-kicker">{offer.kicker}</p>
                <h3>{offer.title}</h3>
                <p>{offer.detail}</p>
                <span className="card-link">{offer.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="audience-section section-shell" id="audiences" aria-labelledby="audiences-title">
        <div className="section-heading">
          <p className="eyebrow">Who it is for</p>
          <h2 id="audiences-title">Three paths into the collection.</h2>
        </div>
        <div className="audience-dock" aria-label="Choose the path that fits your interest">
          {collaborations.map((entry) => (
            <a href={sitePath(`/work-with-us/#${entry.id}`)} key={entry.id}>
              <span><b>{entry.audience}</b></span>
              <p>{entry.introduction}</p>
              <em aria-hidden="true">→</em>
            </a>
          ))}
        </div>
      </section>

      <section className="representatives-section" id="selected" aria-labelledby="representatives-title">
        <div className="section-shell representatives-heading">
          <div className="section-heading">
            <p className="eyebrow">Selected objects</p>
            <h2 id="representatives-title">Seven directions for collecting, gifting, and cultural collaboration.</h2>
          </div>
          <p className="section-lede">
            Each representative form now opens into a clear project direction. Names, specifications, and commercial terms are set only within an agreed project scope.
          </p>
        </div>
        <div className="object-rail section-shell">
          {objects.map((item, index) => (
            <a className="object-card" href={sitePath(`/objects/${item.slug}/`)} key={item.slug}>
              <figure>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={mediaPath(`/media/internal-review/timepieces/watch-${item.imageNumber}-transparent.png`)} alt={`${item.title}, representative form ${item.imageNumber}`} loading="lazy" />
              </figure>
              <div>
                <h3>{item.title}</h3>
                <small>Form {item.imageNumber} · View direction →</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="collaboration-section section-shell" id="collaboration" aria-labelledby="collaboration-title">
        <div className="section-heading collaboration-heading">
          <p className="eyebrow">Ways to work together</p>
          <h2 id="collaboration-title">Choose a partnership model that fits the audience and occasion.</h2>
        </div>
        <div className="collaboration-list">
          {collaborations.map((mode) => (
            <article id={mode.id} key={mode.id}>
              <p className="mode-tag">{mode.audience}</p>
              <div><h3>{mode.title}</h3></div>
              <div><p>{mode.introduction}</p></div>
              <a href={sitePath(`/work-with-us/#${mode.id}`)}>Explore this path →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-shell process-layout">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2 id="process-title">From a clear brief to an agreed object.</h2>
            <a className="text-link" href={sitePath("/brief/")}>Start your brief →</a>
          </div>
          <ol className="process-list">
            {[
              ["Share the brief", "Tell us the audience, intended use, quantity range, timing, and market or venue."],
              ["Select a direction", "Choose a representative object, a sound-led format, or an institutional collaboration."],
              ["Align the scope", "Confirm source material, permissions, craft approach, samples, and delivery requirements."],
              ["Develop and deliver", "Produce the agreed objects, presentation elements, and project documentation."],
            ].map(([title, detail], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{detail}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="story-visual">
          <figure className="story-portrait"><img src={mediaPath("/media/internal-review/fahua-portrait-source.jpg")} alt="Project-source portrait of Venerable Fahua" loading="lazy" /></figure>
          <figure className="story-stage"><img src={mediaPath("/media/internal-review/huayuetuan-stage-01.jpg")} alt="Project-source image of a Chinese instrumental music performance" loading="lazy" /></figure>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The source story</p>
          <h2 id="story-title">The collection begins with sound, material, and living cultural context.</h2>
          <p>
            The cultural world around {person.displayName} provides a starting point: Buddhist-inspired vocal music, Chinese instrumental music, quiet reflection, and craft traditions through which memory can take material form.
          </p>
          <p>This is not presented as a biography or a religious promise. It is a careful curatorial framework for developing objects and collaborations from cultural source material.</p>
          <AudioProgrammeRequest />
        </div>
      </section>

      <section className="three-practices section-shell" aria-labelledby="values-title">
        <div className="section-heading"><p className="eyebrow">Values</p><h2 id="values-title">Reflection, cultural access, and shared memory.</h2></div>
        <div className="practice-grid">
          {values.map((value) => <article key={value.title}><h3>{value.title}</h3><p>{value.detail}</p></article>)}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-shell">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Tell us what you are planning to collect, gift, or co-create.</h2>
          <p>Use the project brief to share the intended audience, quantity range, timing, market or venue, and the cultural context you want the project to respect.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={sitePath("/brief/")}>Start a project brief</a>
            <div className="contact-details">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
