/* eslint-disable @next/next/no-img-element */
import { siteContent } from "../data/site";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  ["文化信物", "Objects", "#objects"],
  ["适合谁", "For whom", "#audiences"],
  ["合作方式", "Collaboration", "#collaboration"],
  ["东方声音", "Story", "#story"],
  ["联系合作", "Contact", "#contact"],
] as const;

const audienceEntries = [
  {
    labelZh: "个人 / 礼赠",
    labelEn: "Personal & gifting",
    detailZh: "为珍藏、纪念与重要关系选择一件有东方文化内容的信物。",
    detailEn: "Choose a cultural object for collecting, remembrance or a meaningful gift.",
    href: "#personal",
  },
  {
    labelZh: "渠道 / 代理",
    labelEn: "Channel partners",
    detailZh: "获取专场作品资料、选品支持与适合渠道的合作组合。",
    detailEn: "Access collection materials, selection support and channel-ready collaboration.",
    href: "#channel",
  },
  {
    labelZh: "文化机构",
    labelEn: "Cultural institutions",
    detailZh: "围绕音乐、非遗、展陈与文化礼赠开展主题共创。",
    detailEn: "Co-create through music, heritage craft, exhibitions and cultural gifting.",
    href: "#institution",
  },
] as const;

const objectCategories = [
  {
    kickerZh: "佩戴与珍藏",
    kickerEn: "Wear & collect",
    titleZh: "腕间文化信物",
    titleEn: "Cultural time objects",
    detailZh: "以成熟时间载体承接东方纹样、声音线索与纪念主题，用于个人珍藏、文化礼赠与机构专场。",
    detailEn: "Time objects shaped around Eastern motifs, sound references and commemorative themes.",
    image: "02",
  },
  {
    kickerZh: "声音与礼赠",
    kickerEn: "Sound & gifting",
    titleZh: "声音礼赠组合",
    titleEn: "Sound-led gift sets",
    detailZh: "在取得相应授权后，将声音内容与卡片、礼盒、证书及实体信物组合，形成可赠予的专场内容。",
    detailEn: "Subject to the relevant rights, sound can be paired with cards, presentation boxes, certificates and physical objects.",
    image: "11",
  },
  {
    kickerZh: "机构与场域",
    kickerEn: "Institutions & places",
    titleZh: "非遗器物与专场共创",
    titleEn: "Heritage craft collaborations",
    detailZh: "为文化机构、展陈项目与渠道伙伴提供主题策展、器物方向、礼赠组合与作品档案。",
    detailEn: "Curatorial themes, crafted objects, gifting combinations and project archives for institutions and partners.",
    image: "20",
  },
] as const;

const representativeThemes = [
  ["个人珍藏", "Personal collection"],
  ["文化礼赠", "Cultural gifting"],
  ["机构礼赠", "Institutional gifting"],
  ["人物与家族共创", "Personal & family stories"],
  ["声音主题策展", "Sound-led curation"],
  ["非遗工艺共创", "Heritage craft"],
  ["文明交流专场", "Cultural dialogue"],
] as const;

const collaborationModes = [
  {
    id: "personal",
    tagZh: "个人 / 礼赠",
    tagEn: "Personal & gifting",
    titleZh: "从代表信物中选择，再加入专属心意",
    titleEn: "Begin with a representative object, then make it personal.",
    detailZh: "适合纪念、答谢、节庆与重要关系。可讨论纹样、文字、声音卡与礼盒组合，最终以可行规格和授权范围为准。",
    detailEn: "For remembrance, appreciation and meaningful occasions. Motifs, inscriptions, sound cards and presentation boxes can be discussed within confirmed specifications and rights.",
  },
  {
    id: "channel",
    tagZh: "渠道 / 代理",
    tagEn: "Channel partners",
    titleZh: "以专场作品、样品资料与选品支持进入渠道",
    titleEn: "Bring a focused cultural collection into your channel.",
    detailZh: "适合文化礼赠、生活方式与高端服务渠道。合作从目标客群、选品范围、样品与交付条件开始确认。",
    detailEn: "For cultural gifting, lifestyle and premium-service channels. Collaboration begins with audience, assortment, samples and delivery terms.",
  },
  {
    id: "institution",
    tagZh: "文化机构",
    tagEn: "Cultural institutions",
    titleZh: "把音乐、非遗与场域内容转化为一组可交付作品",
    titleEn: "Turn music, heritage craft and place into a deliverable collection.",
    detailZh: "适合展陈、文化交流、纪念活动与机构礼赠。可围绕真实内容来源共同策展，并在授权与打样确认后推进制作。",
    detailEn: "For exhibitions, cultural exchange, commemorative programmes and institutional gifting, developed from verified sources and confirmed rights.",
  },
] as const;

const collaborationProcess = [
  ["说明场景", "Tell us the occasion", "对象、数量、时间与使用场景。", "Audience, quantity, timing and occasion."],
  ["选择方向", "Choose a direction", "从代表信物、声音内容或专场共创中确定范围。", "Select an object, sound-led format or institutional collaboration."],
  ["确认方案", "Confirm the proposal", "核对内容、授权、工艺、样品与交付条件。", "Confirm content, rights, craft, samples and delivery terms."],
  ["制作交付", "Produce & deliver", "完成作品、礼赠组合及项目所需档案。", "Deliver the objects, gifting set and agreed project archive."],
] as const;

export default function Home() {
  const { person, flagships } = siteContent;

  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="法华文化信物首页 FA HUA cultural objects homepage">
          <span lang="zh-CN">法华文化信物</span>
          <small lang="en">FA HUA · CULTURAL OBJECTS</small>
        </a>
        <nav className="desktop-nav" aria-label="主导航 Primary navigation">
          {navItems.map(([zh, en, href]) => (
            <a href={href} key={href}>
              <span lang="zh-CN">{zh}</span>
              <small lang="en">{en}</small>
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">联系合作 · Contact</a>
        <details className="mobile-menu">
          <summary aria-label="打开导航 Open navigation">菜单 · Menu</summary>
          <nav aria-label="移动端导航 Mobile navigation">
            {navItems.map(([zh, en, href]) => <a href={href} key={href}>{zh} · {en}</a>)}
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-soundline" aria-hidden="true">
          {Array.from({ length: 23 }, (_, index) => <i key={index} />)}
        </div>
        <div className="hero-copy">
          <p className="eyebrow">东方声音 × 华乐 × 非遗工艺</p>
          <h1 id="hero-title" lang="zh-CN">把一段东方声音，留成可以珍藏与传承的文化信物</h1>
          <p className="hero-title-en" lang="en">Turn an Eastern voice into a cultural object to collect, gift and carry forward.</p>
          <p className="hero-lede" lang="zh-CN">
            围绕梵音、华乐与东方美学，策展腕表、声音卡、非遗器物与礼赠组合，为个人珍藏、文化礼赠和机构合作提供专场作品。
          </p>
          <p className="hero-lede-en" lang="en">
            Cultural time objects, sound-led gifts and heritage craft collaborations for personal collecting, meaningful gifting and institutional partnerships.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#objects">查看文化信物</a>
            <a className="button button-secondary" href="#collaboration">机构 / 渠道合作</a>
          </div>
        </div>

        <div className="hero-objects" aria-label="代表文化信物视觉 Representative cultural objects">
          <figure className="hero-object hero-object-main">
            <span className="object-orbit" aria-hidden="true" />
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-11-transparent.png`} alt="法华文化信物代表外观 11" />
            <figcaption><span>文化信物专场</span><small>Representative form 11</small></figcaption>
          </figure>
          <figure className="hero-object hero-object-small hero-object-left">
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-02-transparent.png`} alt="法华文化信物代表外观 02" />
          </figure>
          <figure className="hero-object hero-object-small hero-object-right">
            <img src={`${publicBasePath}/media/internal-review/timepieces/watch-20-transparent.png`} alt="法华文化信物代表外观 20" />
          </figure>
        </div>

        <div className="audience-dock" id="audiences" aria-label="按访客身份进入 Choose your path">
          {audienceEntries.map((entry) => (
            <a href={entry.href} key={entry.labelEn}>
              <span>
                <b lang="zh-CN">{entry.labelZh}</b>
                <small lang="en">{entry.labelEn}</small>
              </span>
              <p lang="zh-CN">{entry.detailZh}</p>
              <em aria-hidden="true">↗</em>
            </a>
          ))}
        </div>
      </section>

      <section className="offer-section section-shell" id="objects" aria-labelledby="objects-title">
        <div className="section-heading">
          <p className="eyebrow">我们现在能提供什么 · What we offer</p>
          <h2 id="objects-title" lang="zh-CN">从一件信物，到一组专场作品</h2>
          <p lang="en">From one meaningful object to a complete cultural collection.</p>
        </div>
        <div className="offer-grid">
          {objectCategories.map((category, index) => (
            <article className={index === 1 ? "offer-card offer-card-featured" : "offer-card"} key={category.titleEn}>
              <figure>
                <span className="card-ring" aria-hidden="true" />
                <img src={`${publicBasePath}/media/internal-review/timepieces/watch-${category.image}-transparent.png`} alt={`${category.titleZh}代表外观 ${category.image}`} loading="lazy" />
              </figure>
              <div>
                <p className="card-kicker">{category.kickerZh} · {category.kickerEn}</p>
                <h3 lang="zh-CN">{category.titleZh}</h3>
                <h4 lang="en">{category.titleEn}</h4>
                <p lang="zh-CN">{category.detailZh}</p>
                <p lang="en">{category.detailEn}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="representatives-section" aria-labelledby="representatives-title">
        <div className="section-shell representatives-heading">
          <div className="section-heading">
            <p className="eyebrow">代表文化信物 · Selected objects</p>
            <h2 id="representatives-title" lang="zh-CN">七个方向，回应不同的珍藏与合作场景</h2>
          </div>
          <p className="section-lede" lang="zh-CN">从个人赠礼到文化机构专场，先选择接近你需求的方向，再确认内容、工艺与交付范围。</p>
        </div>
        <div className="object-rail section-shell">
          {flagships.map((item, index) => (
            <article className="object-card" key={item.imageNumber}>
              <figure>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img
                  src={`${publicBasePath}/media/internal-review/timepieces/watch-${item.imageNumber}-transparent.png`}
                  alt={`${representativeThemes[index][0]}代表外观 ${item.imageNumber}`}
                  loading="lazy"
                />
              </figure>
              <div>
                <h3 lang="zh-CN">{representativeThemes[index][0]}</h3>
                <p lang="en">{representativeThemes[index][1]}</p>
                <small>代表外观 {item.imageNumber} · Form {item.imageNumber}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-section section-shell" id="collaboration" aria-labelledby="collaboration-title">
        <div className="section-heading collaboration-heading">
          <p className="eyebrow">三种合作方式 · Three ways to work together</p>
          <h2 id="collaboration-title" lang="zh-CN">按你的场景，选择合适的合作深度</h2>
          <p lang="en">Choose the level of collaboration that fits your audience and occasion.</p>
        </div>
        <div className="collaboration-list">
          {collaborationModes.map((mode) => (
            <article id={mode.id} key={mode.id}>
              <p className="mode-tag">{mode.tagZh}<small>{mode.tagEn}</small></p>
              <div>
                <h3 lang="zh-CN">{mode.titleZh}</h3>
                <h4 lang="en">{mode.titleEn}</h4>
              </div>
              <div>
                <p lang="zh-CN">{mode.detailZh}</p>
                <p lang="en">{mode.detailEn}</p>
              </div>
              <a href="#contact">联系合作 <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-shell process-layout">
          <div className="section-heading">
            <p className="eyebrow">合作流程 · Process</p>
            <h2 id="process-title" lang="zh-CN">四步把想法落到作品</h2>
            <p lang="en">Four steps from intent to a deliverable object.</p>
          </div>
          <ol className="process-list">
            {collaborationProcess.map(([titleZh, titleEn, detailZh, detailEn], index) => (
              <li key={titleEn}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{titleZh}<small>{titleEn}</small></h3>
                  <p lang="zh-CN">{detailZh}</p>
                  <p lang="en">{detailEn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="story-visual">
          <figure className="story-portrait">
            <img src={`${publicBasePath}/media/internal-review/fahua-portrait-source.jpg`} alt="法华文化专场人物来源图" loading="lazy" />
          </figure>
          <figure className="story-stage">
            <img src={`${publicBasePath}/media/internal-review/huayuetuan-stage-01.jpg`} alt="东方音乐舞台项目来源图" loading="lazy" />
          </figure>
        </div>
        <div className="story-copy">
          <p className="eyebrow">人物、声音与文化故事 · The source</p>
          <h2 id="story-title" lang="zh-CN">文化信物的内容，来自真实的人、声音与东方美学</h2>
          <p className="story-title-en" lang="en">Cultural objects begin with real people, sound and Eastern aesthetics.</p>
          <p lang="zh-CN">
            法华文化信物以东方声音、华乐与非遗工艺为内容线索，探索声音如何进入日常器物、礼赠关系与文化交流。人物与机构介绍将在正式资料统一后完整呈现。
          </p>
          <p lang="en">
            FA HUA cultural objects explore how Eastern sound, Chinese music and heritage craft can enter everyday objects, meaningful gifts and cultural exchange. Full profiles will follow verified source material.
          </p>
          <div className="sound-preview" aria-label="声音内容预留 Sound content preview">
            <button type="button" disabled aria-label="声音内容将在授权后开放 Sound content will open after authorisation">▶</button>
            <span><b>东方声音专场</b><small>Sound programme · coming after content clearance</small></span>
          </div>
        </div>
      </section>

      <section className="three-practices section-shell" aria-labelledby="practices-title">
        <div className="section-heading">
          <p className="eyebrow">共同内核 · Shared purpose</p>
          <h2 id="practices-title" lang="zh-CN">安民心 · 惠民生 · 聚民众</h2>
          <p lang="en">Peace of mind · Culture for all · A living community</p>
        </div>
        <div className="practice-grid">
          <article><h3>安民心</h3><small>Peace of mind</small><p>让温和、向善的声音进入日常，让记忆有安放之处。</p></article>
          <article><h3>惠民生</h3><small>Culture for all</small><p>让文化通过可亲近的信物与礼赠，走进更多人的生活。</p></article>
          <article><h3>聚民众</h3><small>A living community</small><p>连接个人、家庭与机构，让真实故事成为共同的文化记忆。</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-shell">
          <p className="eyebrow">联系合作 · Start a conversation</p>
          <h2 id="contact-title" lang="zh-CN">告诉我们，你想为谁留下一件怎样的文化信物</h2>
          <p lang="en">Tell us who the object is for, the occasion and the kind of story it should carry.</p>
          <div className="contact-actions">
            <span className="button button-primary">联系 BD · Contact BD</span>
            <p>建议准备：使用对象、数量范围、时间节点与合作场景。</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <b>{person.chineseName} · {person.displayName}</b>
          <span>法华文化信物 · FA HUA Cultural Objects</span>
        </div>
        <p>
          本站用于文化信物与合作方向沟通。涉及肖像、声音、法号、机构、图片及衍生品的公开与商业使用，以最终书面授权、规格及项目确认文件为准。
        </p>
        <a href="#top">回到顶部 · Back to top ↑</a>
      </footer>
    </main>
  );
}
