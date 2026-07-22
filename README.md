# Fahua International · Private Review Edition

An internal, English-first website concept for Venerable Fahua and Hua Yue Tuan.
It is prepared for subject review and is not approved for publication.

## Current scope

- High-end international homepage concept
- Responsive desktop and mobile layouts
- Replaceable person name, timeline, journey and works data
- Audio player interface with no media file attached
- Clear review labels for unverified or uncleared material
- No deployment configuration, analytics, forms or public indexing

## Content replacement

Edit `data/site.ts` to replace the working name, biography, journey and works.

The featured audio interface is ready. Add an authorised file under `public/audio/`
and set `audio.src` in `data/site.ts`, for example:

```ts
src: "/audio/featured-track.mp3"
```

The hero currently uses a portrait extracted directly from the project-source PDF,
plus three stage images from the same file. These assets are stored under
`public/media/internal-review/` and are for private layout review only. Replace them
with official high-resolution files whose web and international usage has been cleared.

## Local review

```bash
npm run dev
npm run build
npm test
```

Do not publish until the person, institution, works, media and operator approvals
listed in the project handoff have been completed.
