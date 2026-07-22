/* eslint-disable @next/next/no-img-element */
import { AudioPlayer } from "./components/AudioPlayer";
import { siteContent } from "../data/site";

const navItems = [
  ["声音", "The Voice", "#voice"],
  ["华乐团", "Hua Yue Tuan", "#music"],
  ["行旅", "The Journey", "#journey"],
  ["作品", "Works", "#works"],
  ["信物", "Time Objects", "#timepieces"],
  ["合作", "Collaboration", "#collaboration"],
] as const;

const timepieces = Array.from({ length: 21 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    number,
    src: `/media/internal-review/timepieces/watch-${number}-transparent.png`,
  };
});

export default function Home() {
  const { person, audio, timeline, journey, works } = siteContent;

  return (
    <main id="top">
      <div className="review-bar">
        <span>内部审稿版本 · Private review edition</span>
        <span>暂不公开发布 · Not for publication</span>
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
            <a className="button button-primary" href="#voice">进入故事 · Enter the story</a>
            <a className="button button-quiet" href="#listen">聆听声音 · Listen</a>
          </div>
          <p className="verification-note">人物称谓与履历仍待官方确认 · Working titles and biographical details remain subject to official confirmation.</p>
        </div>

        <figure className="portrait-stage" aria-label="法华法师项目来源人像 Fahua project-source portrait">
          <div className="portrait-glow" aria-hidden="true" />
          <img
            className="portrait-photo"
            src="/media/internal-review/fahua-portrait-source.jpg"
            alt="法华法师项目来源人像，仅供内部审稿"
          />
          <div className="sound-lines" aria-hidden="true">
            {Array.from({ length: 17 }, (_, index) => (
              <i key={index} style={{ "--line": index } as React.CSSProperties} />
            ))}
          </div>
          <figcaption>
            <span>{person.chineseName} · {person.displayName}</span>
            <small>项目来源人像 · 仅供内部审稿 / Project-source portrait · internal review only</small>
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
        <p className="section-index">I · 声音 / The voice</p>
        <div className="manifesto-heading">
          <div>
            <p className="kicker" lang="zh-CN">音乐，不止于装饰。</p>
            <p className="kicker-en" lang="en">Music is not ornament.</p>
          </div>
          <div className="dual-heading">
            <h2 lang="zh-CN">它让心念被听见，也让文化走向更远的地方。</h2>
            <p lang="en">It is a way of carrying intention into the world.</p>
          </div>
        </div>
        <div className="principles">
          <article><span>01</span><h3 lang="zh-CN">以音乐修习</h3><h4 lang="en">Music as practice</h4><p lang="zh-CN">让声音成为专注、观照与内在安定的空间。</p><p lang="en">Sound becomes a space for attention, reflection and inward calm.</p></article>
          <article><span>02</span><h3 lang="zh-CN">以文化为桥</h3><h4 lang="en">Culture as bridge</h4><p lang="zh-CN">让东方音乐语言连接不同世代与地域。</p><p lang="en">Eastern musical language opens a meeting point across generations and borders.</p></article>
          <article><span>03</span><h3 lang="zh-CN">以慈悲行动</h3><h4 lang="en">Compassion as action</h4><p lang="zh-CN">文化实践不仅关乎表达，也关乎它能为世界带来什么。</p><p lang="en">A cultural life is measured not only by expression, but by what it gives.</p></article>
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
              <img src="/media/internal-review/huayuetuan-stage-01.jpg" alt="莲花装置与蓝色灯光中的舞台演出" />
              <figcaption>舞台资料 · 项目来源图片 / Stage archive · project-source image</figcaption>
            </figure>
            <figure>
              <img src="/media/internal-review/huayuetuan-stage-02.jpg" alt="塔影旁的传统音乐演出" />
              <figcaption>古建场域中的东方音乐 / Eastern music in a heritage setting</figcaption>
            </figure>
            <figure>
              <img src="/media/internal-review/huayuetuan-stage-03.jpg" alt="红金舞台灯光下的合奏演出" />
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

      <section className="timepieces-section" id="timepieces" aria-labelledby="timepieces-title">
        <div className="section-shell timepieces-heading">
          <div>
            <p className="section-index">VI · 时间信物 / Time Objects</p>
            <h2 id="timepieces-title" lang="zh-CN">让时间，成为可以被珍藏的文化载体。</h2>
            <p className="title-translation" lang="en">Time, held as a vessel for cultural memory.</p>
          </div>
          <div className="dual-copy timepieces-copy">
            <p lang="zh-CN">以成熟时间载体承接东方纹样、人物声音与共同记忆。当前仅呈现 21 款外观样品，用于策展版面审阅；系列命名、文化内容与合作范围将在确认后补充。</p>
            <p lang="en">Twenty-one form studies explore how a time object may carry Eastern patterns, human voices and shared memory. Names, cultural narratives and collaboration scope will be added only after confirmation.</p>
          </div>
        </div>

        <ol className="timepiece-grid section-shell" aria-label="时间信物外观样品 Time object form studies">
          {timepieces.map((timepiece) => (
            <li className="timepiece-card" key={timepiece.number}>
              <div className="timepiece-stage">
                <span className="timepiece-halo" aria-hidden="true" />
                <img
                  src={timepiece.src}
                  alt={`透明背景手表外观样品 ${timepiece.number}，仅供内部审稿`}
                  loading="lazy"
                />
              </div>
              <div className="timepiece-meta">
                <span>{timepiece.number}</span>
                <p><b lang="zh-CN">外观样品</b><small lang="en">Form study</small></p>
                <em>Internal review</em>
              </div>
            </li>
          ))}
        </ol>

        <div className="section-shell timepieces-note">
          <span>21 / 21</span>
          <p lang="zh-CN">本板块为内部策展样稿，不构成已获人物、作品、纹样或衍生品授权的声明。</p>
          <p lang="en">This internal curatorial study does not imply completed authorisation for any person, work, pattern or derivative product.</p>
        </div>
      </section>

      <section className="collaboration-section" id="collaboration">
        <div className="section-shell collaboration-grid">
          <div>
            <p className="section-index">VII · 合作 / Collaboration</p>
            <h2 lang="zh-CN">面向文化机构、策展人与国际合作伙伴。</h2>
            <p className="title-translation dark" lang="en">For cultural institutions, curators and international partners.</p>
          </div>
          <div className="collaboration-copy">
            <p lang="zh-CN">此内部版本探索以东方音乐为核心的文化呈现、委约项目与经授权的策展合作。</p>
            <p className="copy-en" lang="en">This private edition explores cultural presentation, commissioned programmes and authorised curatorial collaborations around Eastern music.</p>
            <a className="button button-primary" href="mailto:contact@example.com">联系项目团队 · Contact the project team</a>
            <small>临时联系信息 · 对外分发前替换 / Working contact · replace before external distribution</small>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-mark">FA HUA</div>
        <p>法华 · 梵音、文化信物与文明对话 · 仅供本人及项目方审阅<br />FA HUA · sacred sound, cultural objects and civilizational dialogue · for subject review only.</p>
        <a href="#top">回到开始 · Return to the beginning</a>
      </footer>
    </main>
  );
}
