/* eslint-disable @next/next/no-img-element */
import { siteContent } from "../data/site";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  ["Collection", "#objects"],
  ["For whom", "#audiences"],
  ["Selected objects", "#selected"],
  ["Partnerships", "#collaboration"],
  ["Source story", "#story"],
  ["Contact", "#contact"],
] as const;

const collectionOffers = [
  {
    kicker: "Wear and collect",
    title: "Collectible timepieces",
    detail:
      "Timepieces provide a considered material setting for visual motifs, commemorative themes, and stories connected to sound.",
    image: "02",
  },
  {
    kicker: "Sound and gifting",
    title: "Sound-led gifting concepts",
    detail:
      "Where the relevant rights are in place, sound may be paired with a card, presentation box, certificate, or physical keepsake.",
    image: "11",
  },
  {
    kicker: "Institutions and places",
    title: "Heritage-craft collaborations",
    detail:
      "Curatorial directions for museums, cultural programmes, gifting initiatives, and partners seeking a thoughtful collection format.",
    image: "20",
  },
] as const;

const audienceEntries = [
  {
    title: "Collectors and gift buyers",
    detail:
      "Explore meaningful objects for personal collecting, remembrance, and gifts that carry a clear cultural point of view.",
    href: "#personal",
  },
  {
    title: "Channel partners",
    detail:
      "Discuss a focused collection, presentation materials, sample review, and a partnership shaped for your audience.",
    href: "#channel",
  },
  {
    title: "Museums and cultural institutions",
    detail:
      "Develop programmes and objects around music, heritage craft, exhibitions, and institutional gifting.",
    href: "#institution",
  },
] as const;

const representativeThemes = [
  "Personal keepsake",
  "Thoughtful gift",
  "Institutional gift",
  "Portrait or family commission",
  "Sound-led edition",
  "Heritage-craft collaboration",
  "Cultural exchange collection",
] as const;

const collaborationModes = [
  {
    id: "personal",
    tag: "Collectors and gift buyers",
    title: "Begin with a selected form, then shape the meaning around the occasion.",
    detail:
      "A suitable route for remembrance, appreciation, and significant personal moments. Motifs, inscriptions, presentation, and sound-linked elements can be discussed within confirmed production and permission boundaries.",
    cta: "Discuss a personal commission",
  },
  {
    id: "channel",
    tag: "Channel partners",
    title: "Introduce a focused cultural collection to your audience.",
    detail:
      "For cultural gifting, design-led retail, and premium client services. We begin with audience, assortment, sample review, market context, and practical delivery requirements.",
    cta: "Discuss a channel partnership",
  },
  {
    id: "institution",
    tag: "Museums and cultural institutions",
    title: "Translate music, craft, and place into a coherent group of objects.",
    detail:
      "For exhibitions, exchange programmes, commemorative projects, and institutional gifts. Development starts from verified source material and proceeds within agreed permissions.",
    cta: "Discuss an institutional collaboration",
  },
] as const;

const collaborationProcess = [
  {
    title: "Share the brief",
    detail: "Tell us the audience, intended use, quantity range, timing, and market or venue.",
  },
  {
    title: "Select a direction",
    detail: "Choose a representative object, a sound-led format, or an institutional collaboration.",
  },
  {
    title: "Align the scope",
    detail: "Confirm source material, permissions, craft approach, samples, and delivery requirements.",
  },
  {
    title: "Develop and deliver",
    detail: "Produce the agreed objects, presentation elements, and project documentation.",
  },
] as const;

const values = [
  {
    title: "Quiet reflection",
    detail: "Objects that create a quiet pause in everyday life and give memory a place to settle.",
  },
  {
    title: "Cultural access",
    detail: "Thoughtful formats that allow music and craft traditions to travel beyond specialist spaces.",
  },
  {
    title: "Shared memory",
    detail: "Gifts and collections that connect people, institutions, and significant occasions over time.",
  },
] as const;

export default function Home() {
  const { person, flagships } = siteContent;

  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="FA HUA cultural objects homepage">
          <span>FA HUA</span>
          <small>CULTURAL KEEPSAKES &amp; COLLABORATIONS</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Start a conversation</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </details>
      </header>

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
            <a className="button button-primary" href="#objects">Explore the collection</a>
            <a className="button button-secondary" href="#channel">Discuss a channel partnership</a>
          </div>
        </div>

        <div className="hero-objects" aria-label="Representative cultural objects">
          <figure className="hero-object hero-object-main">
            <span className="object-orbit" aria-hidden="true" />
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-11-transparent.png`} alt="Representative cultural object, form 11" />
            <figcaption><span>Selected form 11</span><small>Collection study</small></figcaption>
          </figure>
          <figure className="hero-object hero-object-small hero-object-left">
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-02-transparent.png`} alt="Representative cultural object, form 02" />
          </figure>
          <figure className="hero-object hero-object-small hero-object-right">
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-20-transparent.png`} alt="Representative cultural object, form 20" />
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
            <article className={index === 1 ? "offer-card offer-card-featured" : "offer-card"} key={offer.title}>
              <figure>
                <span className="card-ring" aria-hidden="true" />
                <img src={`${publicBasePath}/media/internal-review/timepieces/watch-${offer.image}-transparent.png`} alt={`${offer.title}, representative form ${offer.image}`} loading="lazy" />
              </figure>
              <div>
                <p className="card-kicker">{offer.kicker}</p>
                <h3>{offer.title}</h3>
                <p>{offer.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="audience-section section-shell" id="audiences" aria-labelledby="audiences-title">
        <div className="section-heading">
          <p className="eyebrow">Who it is for</p>
          <h2 id="audiences-title">Three paths into the collection.</h2>
        </div>
        <div className="audience-dock" aria-label="Choose the path that fits your interest">
          {audienceEntries.map((entry) => (
            <a href={entry.href} key={entry.title}>
              <span><b>{entry.title}</b></span>
              <p>{entry.detail}</p>
              <em aria-hidden="true">↗</em>
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
            These are representative form studies, presented as starting points. Names, specifications, and commercial terms are set only within an agreed project scope.
          </p>
        </div>
        <div className="object-rail section-shell">
          {flagships.map((item, index) => (
            <article className="object-card" key={item.imageNumber}>
              <figure>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img
                  src={`${publicBasePath}/media/internal-review/timepieces/watch-${item.imageNumber}-transparent.png`}
                  alt={`${representativeThemes[index]}, representative form ${item.imageNumber}`}
                  loading="lazy"
                />
              </figure>
              <div>
                <h3>{representativeThemes[index]}</h3>
                <small>Form {item.imageNumber}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-section section-shell" id="collaboration" aria-labelledby="collaboration-title">
        <div className="section-heading collaboration-heading">
          <p className="eyebrow">Ways to work together</p>
          <h2 id="collaboration-title">Choose a partnership model that fits the audience and occasion.</h2>
        </div>
        <div className="collaboration-list">
          {collaborationModes.map((mode) => (
            <article id={mode.id} key={mode.id}>
              <p className="mode-tag">{mode.tag}</p>
              <div><h3>{mode.title}</h3></div>
              <div><p>{mode.detail}</p></div>
              <a href="#contact">{mode.cta} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-shell process-layout">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2 id="process-title">From a clear brief to an agreed object.</h2>
          </div>
          <ol className="process-list">
            {collaborationProcess.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="story-visual">
          <figure className="story-portrait">
            <img src={`${publicBasePath}/media/internal-review/fahua-portrait-source.jpg`} alt="Project-source portrait of Venerable Fahua" loading="lazy" />
          </figure>
          <figure className="story-stage">
            <img src={`${publicBasePath}/media/internal-review/huayuetuan-stage-01.jpg`} alt="Project-source image of a Chinese instrumental music performance" loading="lazy" />
          </figure>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The source story</p>
          <h2 id="story-title">The collection begins with sound, material, and living cultural context.</h2>
          <p>
            The cultural world around {person.displayName} provides a starting point: Buddhist-inspired vocal music, Chinese instrumental music, quiet reflection, and craft traditions through which memory can take material form.
          </p>
          <p>
            This is not presented as a biography or a religious promise. It is a careful curatorial framework for developing objects and collaborations from cultural source material.
          </p>
          <div className="sound-preview" aria-label="Audio programme preview">
            <button type="button" disabled aria-label="Audio will be available when the relevant permissions are in place">▶</button>
            <span><b>Sound programme</b><small>Audio will open when the relevant permissions are in place.</small></span>
          </div>
        </div>
      </section>

      <section className="three-practices section-shell" aria-labelledby="values-title">
        <div className="section-heading">
          <p className="eyebrow">Values</p>
          <h2 id="values-title">Reflection, cultural access, and shared memory.</h2>
        </div>
        <div className="practice-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-shell">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Tell us what you are planning to collect, gift, or co-create.</h2>
          <p>Helpful details include the intended audience, quantity range, timing, market or venue, and the cultural context you want the project to respect.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:540148510@qq.com">Email the partnership team</a>
            <div className="contact-details">
              <a href="mailto:540148510@qq.com">540148510@qq.com</a>
              <a href="tel:+8613712670275">+86 137 1267 0275</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <b>{person.displayName}</b>
          <span>FA HUA Cultural Objects</span>
        </div>
        <p>
          <strong>Rights &amp; Permissions.</strong> Public and commercial use of names, portraits, recordings, texts, institutional references, images, and derivative works is subject to the relevant written permissions and the final project scope.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
