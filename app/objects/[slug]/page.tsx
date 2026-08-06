/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { collectionObjects, getCollectionObject } from "../../../data/site";
import { mediaPath, sitePath } from "../../../lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return collectionObjects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionObject(slug);
  if (!item) return {};
  return {
    title: `${item.title} | FA HUA Cultural Objects`,
    description: item.context,
  };
}

export default async function ObjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCollectionObject(slug);
  if (!item) notFound();
  const currentIndex = collectionObjects.findIndex((entry) => entry.slug === slug);
  const previous = collectionObjects[(currentIndex - 1 + collectionObjects.length) % collectionObjects.length];
  const next = collectionObjects[(currentIndex + 1) % collectionObjects.length];

  return (
    <main>
      <SiteHeader />
      <section className="detail-hero section-shell">
        <div className="detail-copy">
          <p className="eyebrow">Selected object · Form {item.imageNumber}</p>
          <h1>{item.title}</h1>
          <p className="detail-lede">{item.context}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={sitePath(`/brief/?object=${item.slug}`)}>Discuss this direction</a>
            <a className="button button-secondary" href={sitePath("/#selected")}>Return to the collection</a>
          </div>
        </div>
        <figure className="detail-object">
          <span className="object-orbit" aria-hidden="true" />
          <img src={mediaPath(`/media/internal-review/timepieces/watch-${item.imageNumber}-transparent.png`)} alt={`${item.title}, representative form ${item.imageNumber}`} />
        </figure>
      </section>

      <section className="detail-body section-shell">
        <div className="detail-overview">
          <p className="eyebrow">The direction</p>
          <h2>A starting point for a project, not a fixed off-the-shelf product.</h2>
          <p>{item.overview}</p>
        </div>
        <div className="detail-lists">
          <article>
            <p className="eyebrow">Suited to</p>
            <ul>{item.suitedTo.map((entry) => <li key={entry}>{entry}</li>)}</ul>
          </article>
          <article>
            <p className="eyebrow">What may be developed</p>
            <ul>{item.development.map((entry) => <li key={entry}>{entry}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="detail-note">
        <div className="section-shell">
          <p className="eyebrow">Project scope</p>
          <h2>Every commission begins with context, permissions, and an agreed brief.</h2>
          <p>Final materials, specifications, production feasibility, timing, and commercial terms are confirmed only after project review.</p>
          <a className="button button-primary" href={sitePath(`/brief/?object=${item.slug}`)}>Start a brief for this object</a>
        </div>
      </section>

      <nav className="detail-pagination section-shell" aria-label="Browse selected objects">
        <a href={sitePath(`/objects/${previous.slug}/`)}><small>Previous direction</small><span>← {previous.title}</span></a>
        <a href={sitePath(`/objects/${next.slug}/`)}><small>Next direction</small><span>{next.title} →</span></a>
      </nav>
      <SiteFooter />
    </main>
  );
}
