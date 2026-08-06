"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { collectionObjects, siteContent } from "../../data/site";

type BriefData = {
  projectType: string;
  objectSlug: string;
  name: string;
  email: string;
  organisation: string;
  phone: string;
  market: string;
  quantity: string;
  timing: string;
  background: string;
  consent: boolean;
};

const initialData: BriefData = {
  projectType: "",
  objectSlug: "",
  name: "",
  email: "",
  organisation: "",
  phone: "",
  market: "",
  quantity: "",
  timing: "",
  background: "",
  consent: false,
};

const projectTypes = [
  ["personal", "Personal commission"],
  ["channel", "Channel partnership"],
  ["institution", "Institutional collaboration"],
  ["audio", "Audio programme request"],
] as const;

function validateBrief(data: BriefData) {
  const errors: Record<string, string> = {};
  if (!data.projectType) errors.projectType = "Choose the collaboration path that best fits your enquiry.";
  if (data.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Enter a valid email address.";
  if (data.market.trim().length < 2) errors.market = "Tell us the country, market, or venue for the project.";
  if (data.background.trim().length < 40) errors.background = "Please provide at least 40 characters of project context.";
  if (!data.consent) errors.consent = "Confirm that you are ready to open this brief in your email application.";
  return errors;
}

function buildMailto(data: BriefData) {
  const projectLabel = projectTypes.find(([value]) => value === data.projectType)?.[1] ?? data.projectType;
  const objectLabel = collectionObjects.find((item) => item.slug === data.objectSlug)?.title ?? "No selected object yet";
  const subject = `FA HUA project brief — ${projectLabel}`;
  const body = [
    "FA HUA CULTURAL OBJECTS — PROJECT BRIEF",
    "",
    `Project path: ${projectLabel}`,
    `Selected object direction: ${objectLabel}`,
    "",
    "CONTACT",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Organisation: ${data.organisation.trim() || "Not specified"}`,
    `Phone: ${data.phone.trim() || "Not specified"}`,
    `Country / market / venue: ${data.market.trim()}`,
    "",
    "PROJECT PARAMETERS",
    `Indicative quantity: ${data.quantity.trim() || "To be discussed"}`,
    `Target timing: ${data.timing.trim() || "To be discussed"}`,
    "",
    "PROJECT BACKGROUND",
    data.background.trim(),
    "",
    "I understand that final feasibility, permissions, specifications, timing, and commercial terms require project review and written agreement.",
  ].join("\n");

  return `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function BriefForm() {
  const [data, setData] = useState<BriefData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedMailto, setPreparedMailto] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path") ?? "";
    const objectSlug = params.get("object") ?? "";
    const frame = window.requestAnimationFrame(() => {
      setData((current) => ({
        ...current,
        projectType: projectTypes.some(([value]) => value === path) ? path : current.projectType,
        objectSlug: collectionObjects.some((item) => item.slug === objectSlug) ? objectSlug : current.objectSlug,
      }));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const remainingCharacters = useMemo(() => Math.max(0, 40 - data.background.trim().length), [data.background]);

  const update = <Key extends keyof BriefData>(key: Key, value: BriefData[Key]) => {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    setPreparedMailto("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateBrief(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = Object.keys(validationErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    const mailto = buildMailto(data);
    setPreparedMailto(mailto);
    window.location.assign(mailto);
  };

  return (
    <section className="brief-layout section-shell">
      <form className="brief-form" noValidate onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-section-heading"><span>01</span><div><h2>Choose the project path</h2><p>This helps us route the first conversation appropriately.</p></div></div>
          <div className="form-grid">
            <label className="field field-wide" htmlFor="projectType">
              <span>Project path *</span>
              <select id="projectType" value={data.projectType} onChange={(event) => update("projectType", event.target.value)} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined}>
                <option value="">Select a path</option>
                {projectTypes.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
              {errors.projectType ? <small className="field-error" id="projectType-error">{errors.projectType}</small> : null}
            </label>
            <label className="field field-wide" htmlFor="objectSlug">
              <span>Selected object direction</span>
              <select id="objectSlug" value={data.objectSlug} onChange={(event) => update("objectSlug", event.target.value)}>
                <option value="">Not selected yet</option>
                {collectionObjects.map((item) => <option value={item.slug} key={item.slug}>{item.title} · Form {item.imageNumber}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading"><span>02</span><div><h2>Contact and context</h2><p>Share the details needed for a relevant reply.</p></div></div>
          <div className="form-grid">
            <label className="field" htmlFor="name"><span>Name *</span><input id="name" value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <small className="field-error" id="name-error">{errors.name}</small> : null}</label>
            <label className="field" htmlFor="email"><span>Email *</span><input id="email" type="email" value={data.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <small className="field-error" id="email-error">{errors.email}</small> : null}</label>
            <label className="field" htmlFor="organisation"><span>Organisation</span><input id="organisation" value={data.organisation} onChange={(event) => update("organisation", event.target.value)} autoComplete="organization" /></label>
            <label className="field" htmlFor="phone"><span>Phone</span><input id="phone" type="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" /></label>
            <label className="field field-wide" htmlFor="market"><span>Country, market, or venue *</span><input id="market" value={data.market} onChange={(event) => update("market", event.target.value)} placeholder="For example: Belgium, Singapore, or a named cultural venue" aria-invalid={Boolean(errors.market)} aria-describedby={errors.market ? "market-error" : undefined} />{errors.market ? <small className="field-error" id="market-error">{errors.market}</small> : null}</label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading"><span>03</span><div><h2>Project parameters</h2><p>Indicative information is enough at this stage.</p></div></div>
          <div className="form-grid">
            <label className="field" htmlFor="quantity"><span>Indicative quantity</span><input id="quantity" value={data.quantity} onChange={(event) => update("quantity", event.target.value)} placeholder="For example: one commission or 50–100 pieces" /></label>
            <label className="field" htmlFor="timing"><span>Target timing</span><input id="timing" value={data.timing} onChange={(event) => update("timing", event.target.value)} placeholder="For example: Q1 2027 or an event date" /></label>
            <label className="field field-wide" htmlFor="background">
              <span>Project background *</span>
              <textarea id="background" rows={7} value={data.background} onChange={(event) => update("background", event.target.value)} placeholder="Describe the occasion, audience, cultural context, source material, and what a successful outcome would mean." aria-invalid={Boolean(errors.background)} aria-describedby={errors.background ? "background-error" : "background-help"} />
              {errors.background ? <small className="field-error" id="background-error">{errors.background}</small> : <small id="background-help">{remainingCharacters > 0 ? `${remainingCharacters} more characters recommended` : "Thank you — there is enough context to begin."}</small>}
            </label>
          </div>
        </div>

        <label className="consent-field" htmlFor="consent">
          <input id="consent" type="checkbox" checked={data.consent} onChange={(event) => update("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} />
          <span>I am ready to open this structured brief in my email application. Nothing is uploaded or stored by this website.</span>
        </label>
        {errors.consent ? <small className="field-error consent-error" id="consent-error">{errors.consent}</small> : null}

        <div className="form-submit">
          <button className="button button-primary" type="submit">Generate email enquiry</button>
          <p>Your email application will open with the project details already organised. You can review and edit the message before sending.</p>
        </div>
        {preparedMailto ? <div className="mail-ready" role="status"><b>Your brief is ready.</b><span>If your email application did not open, <a href={preparedMailto}>open the prepared enquiry</a>.</span></div> : null}
      </form>

      <aside className="brief-aside">
        <p className="eyebrow">What happens next</p>
        <ol>
          <li><span>01</span><p>We review the audience, context, timing, and selected direction.</p></li>
          <li><span>02</span><p>We identify questions around feasibility, source material, and permissions.</p></li>
          <li><span>03</span><p>We propose a suitable next conversation or sample-review path.</p></li>
        </ol>
        <div><b>Prefer direct contact?</b><a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a><a href={`tel:${siteContent.contact.phoneHref}`}>{siteContent.contact.phoneDisplay}</a></div>
      </aside>
    </section>
  );
}
