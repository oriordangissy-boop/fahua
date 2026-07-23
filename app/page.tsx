/* eslint-disable @next/next/no-img-element */
import { AudioPlayer } from "./components/AudioPlayer";
import { siteContent } from "../data/site";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  ["三民", "Three Practices", "#voice"],
  ["梵音", "Sacred Sound", "#music"],
  ["七级", "L1—L7", "#levels"],
  ["双轨", "Two Paths", "#routes"],
  ["地图", "7×7 Map", "#matrix"],
  ["合作", "Collaboration", "#collaboration"],
] as const;

function matrixStateClass(state: string) {
  if (state === "已验证") return "matrix-state status-verified";
  if (state === "可打样") return "matrix-state status-sample";
  if (state === "待授权") return "matrix-state status-rights";
  return "matrix-state status-concept";
}

export default function Home() {
  const {
    person,
    audio,
    timeline,
    journey,
    works,
    tracks,
    flagships,
    archivedTimepieceNumbers,
    matrixCarriers,
    rightsLedger,
  } = siteContent;

  return (
    <main id="top">
      <div className="review-bar">
        <span>公开审稿版本 · Public review edition</span>
        <span>事实、概念与授权状态逐项标注 · Evidence and rights status shown per item</span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="法华独立文化入口审稿首页 FA HUA review homepage">
          <span>FA HUA</span>
          <small>梵音 · 文化信物 · 文明对话 / Sacred sound · cultural objects · dialogue</small>
        </a>
        <nav className="desktop-nav" aria-label="主导航 Primary navigation">
          {navItems.map(([zh, en, href]) => (
            <a href={href} key={href}><b lang="zh-CN">{zh}</b><small lang="en">{en}</small></a>
          ))}
        </nav>
        <a className="header-cta" href="#collaboration">私洽 · Private enquiry</a>
        <details className="mobile-menu">
          <summary aria-label="打开导航 Open navigation">菜单 · Menu</summary>
          <nav aria-label="移动端导航 Mobile navigation">
            {navItems.map(([zh, en, href]) => <a href={href} key={href}>{zh} · {en}</a>)}
          </nav>
        </details>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">法华 · 独立文化入口 / FA HUA · Independent cultural gateway</p>
          <h1 id="hero-title" lang="zh-CN">慈悲之声，<em>由东方音乐传向世界。</em></h1>
          <p className="en-echo" lang="en">A voice of compassion, carried through Eastern music.</p>
          <div className="hero-lede dual-copy">
            <p lang="zh-CN">这是一份关于{person.chineseName}的阶段性人物叙事：以禅修实践、文化记忆与音乐为桥，探索声音如何连接不同的人与世界。</p>
            <p lang="en">A working portrait of {person.displayName}: a life shaped by contemplative practice, cultural memory and the belief that music can become a quiet bridge between people.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#levels">查看七级代表作 · Explore L1—L7</a>
            <a className="button button-quiet" href="#listen">聆听声音 · Listen</a>
          </div>
          <p className="verification-note">人物称谓与履历仍待官方确认 · Working titles and biographical details remain subject to official confirmation.</p>
        </div>

        <figure className="portrait-stage" aria-label="法华法师项目来源人像 Fahua project-source portrait">
          <div className="portrait-glow" aria-hidden="true" />
          <img
            className="portrait-photo"
            src={`${publicBasePath}/media/internal-review/fahua-portrait-source.jpg`}
            alt="法华法师项目来源人像，公开使用授权待归档"
          />
          <div className="sound-lines" aria-hidden="true">
            {Array.from({ length: 17 }, (_, index) => (
              <i key={index} style={{ "--line": index } as React.CSSProperties} />
            ))}
          </div>
          <figcaption>
            <span>{person.chineseName} · {person.displayName}</span>
            <small>项目来源人像 · 公开使用授权待归档 / Project-source portrait · public-use authorisation pending archive</small>
          </figcaption>
          <p className="vertical-name">{person.dharmaName}</p>
        </figure>
      </section>

      <section className="audio-band section-shell" id="listen" aria-label="精选声音 Featured audio">
        <div className="audio-intro">
          <p className="eyebrow">精选声音 · Featured voice · 音频接口已预留</p>
          <h2 lang="zh-CN">一段声音，<br />一刻安住。</h2>
          <p className="title-translation" lang="en">One voice. One moment of stillness.</p>
        </div>
        <AudioPlayer {...audio} />
      </section>

      <section className="manifesto section-shell" id="voice">
        <p className="section-index">I · 三民 / Three shared practices</p>
        <div className="manifesto-heading">
          <div>
            <p className="kicker" lang="zh-CN">安民心 · 惠民生 · 聚民众</p>
            <p className="kicker-en" lang="en">Peace of mind · Culture for all · A living community</p>
          </div>
          <div className="dual-heading">
            <h2 lang="zh-CN">共同使命，必须落到普通人的生活里。</h2>
            <p lang="en">A shared mission must enter everyday life.</p>
          </div>
        </div>
        <div className="principles">
          <article><span>01</span><h3 lang="zh-CN">安民心</h3><h4 lang="en">Peace of mind</h4><p lang="zh-CN">以温和、向善的声音进入日常，让记忆有安放之处。</p><p lang="en">Gentle sound enters daily life and gives memory a place to rest.</p></article>
          <article><span>02</span><h3 lang="zh-CN">惠民生</h3><h4 lang="en">Culture for all</h4><p lang="zh-CN">通过不同层级的文化信物，让文明留存不只面向少数人。</p><p lang="en">A considered range of cultural objects makes preservation more widely approachable.</p></article>
          <article><span>03</span><h3 lang="zh-CN">聚民众</h3><h4 lang="en">A living community</h4><p lang="zh-CN">采集普通人的口述、家族记忆与地方文脉，形成时代档案。</p><p lang="en">Oral histories, family memory and local culture become a record of their time.</p></article>
        </div>
      </section>

      <section className="music-section" id="music">
        <div className="section-shell">
          <div className="music-grid">
            <div className="music-title">
              <p className="section-index">II · 华乐团 / Hua Yue Tuan</p>
              <p className="chinese-lockup" aria-hidden="true">华乐团</p>
              <h2 lang="zh-CN">根植中国音乐，向世界敞开。</h2>
              <p className="title-translation dark" lang="en">Rooted in Chinese music. Open to the world.</p>
            </div>
            <div className="music-copy">
              <div className="large-copy dual-copy">
                <p lang="zh-CN">一份关于华乐团的阶段性机构叙事：让中国传统音乐、禅意声音与当代表达在同一舞台相遇。</p>
                <p lang="en">A working institutional narrative for an ensemble where traditional Chinese music, contemplative sound and contemporary presentation meet.</p>
              </div>
              <blockquote>
                <span lang="zh-CN">“让东方音乐，照亮世界。”</span>
                <span lang="en">“Let Eastern music illuminate the world.”</span>
                <cite>来源文案 · 最终使用权待确认 / Source-language line · final rights approval pending</cite>
              </blockquote>
            </div>
          </div>
          <div className="music-gallery" aria-label="华乐团舞台资料 Hua Yue Tuan stage archive">
            <figure className="music-gallery-feature">
              <img src={`${publicBasePath}/media/internal-review/huayuetuan-stage-01.jpg`} alt="莲花装置与蓝色灯光中的舞台演出" />
              <figcaption>舞台资料 · 机构与图片权利待确认 / Stage archive · institutional and image rights pending</figcaption>
            </figure>
            <figure>
              <img src={`${publicBasePath}/media/internal-review/huayuetuan-stage-02.jpg`} alt="塔影旁的传统音乐演出" />
              <figcaption>古建场域中的东方音乐 / Eastern music in a heritage setting</figcaption>
            </figure>
            <figure>
              <img src={`${publicBasePath}/media/internal-review/huayuetuan-stage-03.jpg`} alt="红金舞台灯光下的合奏演出" />
              <figcaption>音乐、身体与当代表达 / Music, movement and contemporary presentation</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="timeline-section section-shell" aria-labelledby="timeline-title">
        <div className="section-heading">
          <p className="section-index">III · 修行履历 / A life in practice</p>
          <h2 id="timeline-title" lang="zh-CN">让每一段履历，都经得起核验。</h2>
          <p className="title-translation" lang="en">A biography designed to remain precise.</p>
          <div className="dual-copy compact-copy">
            <p lang="zh-CN">以下日期为当前审稿版本。正式发布前，每一项都可由统一的官方资料源替换。</p>
            <p lang="en">Dates below form the current review draft. Each item remains replaceable from one verified source before publication.</p>
          </div>
        </div>
        <ol className="timeline">
          {timeline.map((item) => (
            <li key={item.year}>
              <time>{item.year}</time>
              <div>
                <h3 lang="zh-CN">{item.titleZh}</h3><h4 lang="en">{item.titleEn}</h4>
                <p lang="zh-CN">{item.detailZh}</p><p lang="en">{item.detailEn}</p>
              </div>
              <span>审稿版 · Review</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-shell">
          <div className="section-heading journey-heading">
            <p className="section-index">IV · 行旅 / The journey</p>
            <div className="dual-heading">
              <h2 lang="zh-CN">五处行旅，五种心境。</h2>
              <p lang="en">Five places. Five emotional registers.</p>
            </div>
            <div className="dual-copy compact-copy">
              <p lang="zh-CN">此处作为策展路线呈现，不代表相关项目均已正式发生。</p>
              <p lang="en">Presented as a curatorial route, not as a claim that every programme has already taken place.</p>
            </div>
          </div>
          <div className="journey-track">
            {journey.map((stop, index) => (
              <article key={stop.cityEn}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{stop.cityZh} · {stop.cityEn}</p><h3>{stop.themeZh}</h3><h4>{stop.themeEn}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-section section-shell" id="works">
        <div className="works-intro">
          <p className="section-index">V · 代表作品 / Selected works</p>
          <h2 lang="zh-CN">让音乐成为一份仍在生长的档案。</h2>
          <p className="title-translation" lang="en">Music held as a living archive.</p>
          <div className="dual-copy compact-copy">
            <p lang="zh-CN">当前曲目仅用于版面审阅。音频、歌词、录音与译文将在权利确认前保持隐藏。</p>
            <p lang="en">Titles are placed for layout review only. Audio, lyrics, recordings and translations remain hidden until their rights are cleared.</p>
          </div>
        </div>
        <div className="works-list">
          {works.map((work, index) => (
            <article key={work.originalTitle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{work.originalTitle}</p><h3>{work.workingTitle}</h3></div>
              <small>权利待确认 · Rights pending</small>
            </article>
          ))}
        </div>
      </section>

      <section className="routes-section" id="routes" aria-labelledby="routes-title">
        <div className="section-shell routes-heading">
          <div>
            <p className="section-index">VI · 双轨 / Two paths</p>
            <h2 id="routes-title" lang="zh-CN">标准化负责效率，定制化说明价值从何而来。</h2>
            <p className="title-translation" lang="en">Standardisation creates efficiency. Customisation explains the source of value.</p>
          </div>
          <div className="dual-copy routes-copy">
            <p lang="zh-CN">L1—L3 以有限选择和可复用流程为目标；L4 是模块化、半定制的明确升级接口；L5—L7 以真实采集、工艺、打样与档案交付构成项目路径。</p>
            <p lang="en">L1—L3 aim for limited choice and repeatable delivery. L4 is a defined modular upgrade. L5—L7 form a project path through source collection, craft, prototyping and archival delivery.</p>
          </div>
        </div>
        <div className="section-shell route-cards">
          {tracks.map((track) => (
            <article className={track.code === "L4" ? "route-card route-card-pivot" : "route-card"} key={track.code}>
              <span>{track.code}</span>
              <h3 lang="zh-CN">{track.titleZh}</h3>
              <h4 lang="en">{track.titleEn}</h4>
              <p lang="zh-CN">{track.detailZh}</p>
              <p lang="en">{track.detailEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timepieces-section" id="levels" aria-labelledby="levels-title">
        <div className="section-shell timepieces-heading">
          <div>
            <p className="section-index">VII · 一级一旗舰 / One flagship per level</p>
            <h2 id="levels-title" lang="zh-CN">七级，只让七个代表方向站在首页。</h2>
            <p className="title-translation" lang="en">Seven levels. Seven representative directions.</p>
          </div>
          <div className="dual-copy timepieces-copy">
            <p lang="zh-CN">现有 21 款真实外观素材按原始七组、每组三款归档；首页从每组选择中间样品作为版面代表。它们不是已命名产品，也不代表规格、价格或授权已经完成。</p>
            <p lang="en">The 21 real form-study images remain archived in seven original groups of three. The centre study of each group represents its level here; none is presented as a named, priced or fully authorised product.</p>
          </div>
        </div>

        <ol className="level-stack section-shell" aria-label="法华 L1 至 L7 代表方向 FA HUA representative directions">
          {flagships.map((flagship) => (
            <li className={flagship.level === "L4" ? "level-card level-card-pivot" : "level-card"} key={flagship.level}>
              <div className="level-index">
                <strong>{flagship.level}</strong>
                <span>{flagship.routeZh}</span>
                <small lang="en">{flagship.routeEn}</small>
              </div>
              <div className="level-copy">
                <h3 lang="zh-CN">{flagship.directionZh}</h3>
                <h4 lang="en">{flagship.directionEn}</h4>
                <p lang="zh-CN">{flagship.noteZh}</p>
                <p lang="en">{flagship.noteEn}</p>
                <em>真实外观素材 · 授权待归档 / Source image · rights archive pending</em>
              </div>
              <figure className="level-object">
                <span className="timepiece-halo" aria-hidden="true" />
                <img
                  src={`${publicBasePath}/media/internal-review/timepieces/watch-${flagship.imageNumber}-transparent.png`}
                  alt={`${flagship.level} 代表外观样品 ${flagship.imageNumber}，授权待归档`}
                  loading="lazy"
                />
                <figcaption>FORM {flagship.imageNumber}</figcaption>
              </figure>
            </li>
          ))}
        </ol>

        <div className="section-shell archive-note">
          <span>7 + 14</span>
          <p lang="zh-CN">首页展示 7 个代表外观；其余 {archivedTimepieceNumbers.length} 款编号 {archivedTimepieceNumbers.join("、")} 保留在原始素材档案中，不删除、不改名、不作为首页产品并列展示。</p>
          <p lang="en">Seven representative studies appear on the homepage. The remaining fourteen source files stay in the archive without deletion, renaming or parallel product promotion.</p>
        </div>
      </section>

      <section className="matrix-section" id="matrix" aria-labelledby="matrix-title">
        <div className="section-shell matrix-heading">
          <div>
            <p className="section-index">VIII · 7×7 文化信物地图 / Long-term map</p>
            <h2 id="matrix-title" lang="zh-CN">四十九格，是长期地图，不是四十九件现货。</h2>
            <p className="title-translation" lang="en">Forty-nine cells form a long-term map, not a catalogue of forty-nine finished products.</p>
          </div>
          <div className="matrix-legend" aria-label="状态说明 Status legend">
            <span className="status-verified">已验证 · Verified</span>
            <span className="status-sample">可打样 · Prototype-ready</span>
            <span className="status-concept">概念方向 · Concept</span>
            <span className="status-rights">待授权 · Rights pending</span>
          </div>
        </div>

        <div className="section-shell matrix-scroll">
          <table className="matrix-table">
            <thead>
              <tr>
                <th scope="col">载体 / Carrier</th>
                {flagships.map((flagship) => <th scope="col" key={flagship.level}>{flagship.level}</th>)}
              </tr>
            </thead>
            <tbody>
              {matrixCarriers.map((carrier) => (
                <tr key={carrier.nameEn}>
                  <th scope="row">
                    <b lang="zh-CN">{carrier.nameZh}</b>
                    <small lang="en">{carrier.nameEn}</small>
                    <em lang="zh-CN">{carrier.noteZh}</em>
                  </th>
                  {carrier.states.map((state, index) => (
                    <td key={`${carrier.nameEn}-${flagships[index].level}`}>
                      <span className={matrixStateClass(state)}>
                        {state}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="section-shell matrix-disclosure">
          <p lang="zh-CN">当前没有格子被标注为“已验证”或“可打样”：真实外观图片不等同于已确认规格、工程底座和可用权利。状态将在证据与授权归档后逐格更新。</p>
          <p lang="en">No cell is currently marked “verified” or “prototype-ready”: a real form-study image is not proof of confirmed specifications, engineering or usable rights. Cells will be activated only after evidence and authorisation are archived.</p>
        </div>
      </section>

      <section className="rights-section section-shell" id="rights" aria-labelledby="rights-title">
        <div className="rights-heading">
          <p className="section-index">IX · 证据与授权 / Evidence and rights</p>
          <h2 id="rights-title" lang="zh-CN">把已接收、待核验与待授权分开呈现。</h2>
          <p className="title-translation" lang="en">Received materials, verification and authorisation remain distinct.</p>
        </div>
        <div className="rights-list">
          {rightsLedger.map((entry) => (
            <article key={entry.itemEn}>
              <div><h3 lang="zh-CN">{entry.itemZh}</h3><h4 lang="en">{entry.itemEn}</h4></div>
              <p><b lang="zh-CN">{entry.evidenceZh}</b><small lang="en">{entry.evidenceEn}</small></p>
              <p><b lang="zh-CN">{entry.stateZh}</b><small lang="en">{entry.stateEn}</small></p>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-section" id="collaboration">
        <div className="section-shell collaboration-grid">
          <div>
            <p className="section-index">X · 合作 / Collaboration</p>
            <h2 lang="zh-CN">经确认授权后，让一件信物成为持续的文明对话。</h2>
            <p className="title-translation dark" lang="en">After authorisation, a cultural object can become an enduring dialogue.</p>
          </div>
          <div className="collaboration-copy">
            <p lang="zh-CN">合作从权利边界、真实来源与项目目标开始，再进入材料、工艺、打样、作品与档案。这里不提供在线支付，也不提前承诺价格、交期或授权结果。</p>
            <p className="copy-en" lang="en">Collaboration begins with rights, source evidence and project purpose before moving into materials, craft, prototyping, production and archive. No online payment, price, lead time or rights outcome is promised here.</p>
            <span className="button button-primary">联系 BD · Contact BD</span>
            <small>正式联系信息待项目方补充 / Official contact details to be supplied by the project team</small>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-mark">FA HUA</div>
        <p>法华 · 梵音、文化信物与文明对话 · 公开审稿页<br />FA HUA · sacred sound, cultural objects and civilizational dialogue · public review edition.</p>
        <a href="#top">回到开始 · Return to the beginning</a>
      </footer>
    </main>
  );
}
