export type CollectionObject = {
  slug: string;
  imageNumber: string;
  title: string;
  context: string;
  overview: string;
  suitedTo: readonly string[];
  development: readonly string[];
};

export type CollaborationDirection = {
  id: "personal" | "channel" | "institution";
  audience: string;
  title: string;
  introduction: string;
  bring: readonly string[];
  shape: readonly string[];
};

export const collectionObjects: readonly CollectionObject[] = [
  {
    slug: "personal-keepsake",
    imageNumber: "02",
    title: "Personal keepsake",
    context: "A considered object for a story that belongs to one person or one moment.",
    overview:
      "This direction begins with a selected timepiece form, then develops its meaning through an agreed motif, inscription, presentation format, and project narrative.",
    suitedTo: ["Personal milestones", "Private commissions", "Family remembrance"],
    development: ["Motif and story direction", "Inscription placement", "Presentation and documentation"],
  },
  {
    slug: "thoughtful-gift",
    imageNumber: "05",
    title: "Thoughtful gift",
    context: "A gift shaped around appreciation rather than generic occasion branding.",
    overview:
      "A focused route for clients seeking a culturally grounded gift. The object, message, and presentation are considered together so the result feels personal and appropriate.",
    suitedTo: ["Client appreciation", "Significant occasions", "Small-group gifting"],
    development: ["Occasion narrative", "Gift presentation", "Message and certificate direction"],
  },
  {
    slug: "institutional-gift",
    imageNumber: "08",
    title: "Institutional gift",
    context: "A coherent keepsake for cultural, civic, or organisational exchange.",
    overview:
      "This direction translates an institution's purpose, place, or programme into a restrained object and presentation system, developed from verified source material.",
    suitedTo: ["Institutional exchange", "Programme recognition", "Cultural delegations"],
    development: ["Institutional context", "Commemorative details", "Presentation and project notes"],
  },
  {
    slug: "portrait-family-commission",
    imageNumber: "11",
    title: "Portrait or family commission",
    context: "A private commission built around people, memory, and continuity.",
    overview:
      "A portrait or family commission starts with the story to be preserved. Visual references, words, and any personal source material are reviewed before an object direction is proposed.",
    suitedTo: ["Family narratives", "Private portrait projects", "Intergenerational gifts"],
    development: ["Source-material review", "Portrait or symbolic direction", "Private presentation format"],
  },
  {
    slug: "sound-led-edition",
    imageNumber: "14",
    title: "Sound-led edition",
    context: "A keepsake direction in which sound may become part of the wider presentation.",
    overview:
      "Where the relevant permissions are confirmed, a recording or musical source can inform the narrative, visual language, and optional listening pathway around a physical object.",
    suitedTo: ["Music-led gifting", "Commissioned editions", "Cultural programmes"],
    development: ["Rights and source review", "Listening-path concept", "Object and presentation direction"],
  },
  {
    slug: "heritage-craft-collaboration",
    imageNumber: "17",
    title: "Heritage-craft collaboration",
    context: "A collaborative route between an object, a craft practice, and a cultural story.",
    overview:
      "The collaboration begins with a suitable craft context and verified references. Material, motif, and documentation are developed with respect for the makers and permissions involved.",
    suitedTo: ["Craft-led programmes", "Curated gifting", "Design and cultural partnerships"],
    development: ["Craft and source mapping", "Material and motif direction", "Attribution and documentation"],
  },
  {
    slug: "cultural-exchange-collection",
    imageNumber: "20",
    title: "Cultural exchange collection",
    context: "A group of related objects for dialogue across institutions, places, or audiences.",
    overview:
      "This direction is suited to programmes that need a coherent collection rather than a single object. The framework can connect music, craft, place, and shared memory without flattening their origins.",
    suitedTo: ["Museum and cultural programmes", "International exchange", "Curated institutional collections"],
    development: ["Programme and audience framework", "Collection architecture", "Interpretive and presentation materials"],
  },
] as const;

export const collaborationDirections: readonly CollaborationDirection[] = [
  {
    id: "personal",
    audience: "Collectors and gift buyers",
    title: "Shape a personal commission around a meaningful occasion.",
    introduction:
      "Begin with a selected form, then develop the motif, inscription, presentation, and story within an agreed scope.",
    bring: ["The occasion and recipient", "Any source material you wish us to consider", "Timing and an indicative quantity"],
    shape: ["Object direction", "Narrative and inscription", "Presentation and documentation"],
  },
  {
    id: "channel",
    audience: "Channel partners",
    title: "Build a focused cultural collection for your audience.",
    introduction:
      "For design-led retail, cultural gifting, and premium client services. We align audience, assortment, sample review, market context, and delivery requirements.",
    bring: ["Audience and market", "Preferred assortment scale", "Target timing and quantity range"],
    shape: ["Collection structure", "Sample and presentation plan", "Channel-ready project narrative"],
  },
  {
    id: "institution",
    audience: "Museums and cultural institutions",
    title: "Translate music, craft, and place into a coherent programme of objects.",
    introduction:
      "For exhibitions, exchange programmes, commemorative projects, and institutional gifts. Development starts from verified source material and agreed permissions.",
    bring: ["Programme or exhibition context", "Audience and venue", "Available source material and rights context"],
    shape: ["Curatorial object framework", "Interpretive materials", "Institutional gifting or collection format"],
  },
] as const;

export const siteContent = {
  person: { displayName: "Venerable Fahua" },
  contact: {
    email: "540148510@qq.com",
    phoneDisplay: "+86 137 1267 0275",
    phoneHref: "+8613712670275",
  },
  objects: collectionObjects,
  collaborations: collaborationDirections,
  archivedTimepieceNumbers: ["01", "03", "04", "06", "07", "09", "10", "12", "13", "15", "16", "18", "19", "21"],
} as const;

export function getCollectionObject(slug: string) {
  return collectionObjects.find((item) => item.slug === slug);
}
