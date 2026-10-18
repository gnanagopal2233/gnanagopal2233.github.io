import { AgentPipeline, QmsArchitecture } from "../components/Diagrams";
import { applyPilot, certifications, education, experience, fdeTraits, profile, qmsCase, skills, stats } from "../content/profile";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            GA
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header id="top" className="hero container">
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="pitch">{profile.pitch}</p>
        <p className="muted">{profile.location}</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn" href={`${base}/resume.pdf`}>
            Resume (PDF)
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="container section">
        <h2 className="h2">How I work</h2>
        <div className="traits">
          {fdeTraits.map((t) => (
            <div key={t.title} className="card">
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="container section">
        <h2 className="h2">Selected work</h2>

        <article className="case">
          <p className="eyebrow">{qmsCase.eyebrow}</p>
          <h3 className="case-title">{qmsCase.title}</h3>
          <p className="lead">{qmsCase.context}</p>
          <div className="diagram-wrap">
            <QmsArchitecture />
          </div>
          <div className="modules">
            {qmsCase.modules.map((m) => (
              <div key={m.name} className="card">
                <h4>{m.name}</h4>
                <ul>
                  {m.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h4 className="sub">Platform &amp; compliance</h4>
          <ul className="checks">
            {qmsCase.platform.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="tags">
            {qmsCase.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
          <p className="fine">{qmsCase.confidentiality}</p>
        </article>

        <article className="case">
          <p className="eyebrow">{applyPilot.eyebrow}</p>
          <h3 className="case-title">{applyPilot.title}</h3>
          <p className="lead">{applyPilot.summary}</p>
          <div className="diagram-wrap">
            <AgentPipeline steps={applyPilot.pipeline} />
          </div>
          <ul className="checks">
            {applyPilot.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="tags">
            {applyPilot.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
          <a className="btn" href={applyPilot.repo} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </article>
      </section>

      <section id="experience" className="container section">
        <h2 className="h2">Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.company + e.dates}>
              <div className="tl-head">
                <div>
                  <b>{e.title}</b> · {e.company}
                  {e.detail ? <div className="muted small">{e.detail}</div> : null}
                </div>
                <div className="muted small right">
                  {e.dates}
                  <br />
                  {e.location}
                </div>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="container section">
        <h2 className="h2">Skills</h2>
        <div className="skills">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="card">
              <h4>{k}</h4>
              <div className="tags">
                {v.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="two">
          <div className="card">
            <h4>Certifications</h4>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h4>Education</h4>
            <ul>
              {education.map((e) => (
                <li key={e.school}>
                  <b>{e.school}</b>
                  <br />
                  <span className="muted">
                    {e.degree} · {e.dates}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container section contact">
        <h2 className="h2">Let&apos;s talk</h2>
        <p className="lead">I&apos;m looking for Forward Deployed, Solutions and full-stack engineering roles where I can ship AI systems with customers.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="container footer muted small">© {new Date().getFullYear()} {profile.fullName}</footer>
    </>
  );
}
