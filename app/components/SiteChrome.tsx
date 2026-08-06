import { siteContent } from "../../data/site";
import { sitePath } from "../../lib/paths";

const navItems = [
  ["Collection", sitePath("/#selected")],
  ["Partnerships", sitePath("/work-with-us/")],
  ["Source story", sitePath("/#story")],
  ["Project brief", sitePath("/brief/")],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath("/")} aria-label="FA HUA cultural objects homepage">
        <span>FA HUA</span>
        <small>CULTURAL KEEPSAKES &amp; COLLABORATIONS</small>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a href={href} key={href}><span>{label}</span></a>)}
      </nav>
      <a className="header-cta" href={sitePath("/brief/")}>Start a project brief</a>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  const { person, contact } = siteContent;
  return (
    <footer className="site-footer">
      <div>
        <b>{person.displayName}</b>
        <span>FA HUA Cultural Objects</span>
      </div>
      <p>
        <strong>Rights &amp; Permissions.</strong> Public and commercial use of names, portraits, recordings, texts, institutional references, images, and derivative works is subject to the relevant written permissions and the final project scope.
      </p>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={sitePath("/brief/")}>Start a brief →</a>
      </div>
    </footer>
  );
}
