import { sitePath } from "../../lib/paths";

export function AudioProgrammeRequest() {
  return (
    <div className="audio-request" aria-label="Audio programme on request">
      <div>
        <p className="eyebrow">Audio programme on request</p>
        <h3>Discuss a listening pathway for your project.</h3>
        <p>
          No public recording is presented here. Where source material and permissions are available, we can discuss an appropriate audio programme for a gift, edition, exhibition, or cultural collaboration.
        </p>
      </div>
      <a className="text-link" href={sitePath("/brief/?path=audio")}>Request an audio programme →</a>
    </div>
  );
}
