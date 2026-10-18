/** Inline SVG diagrams. Colors come from CSS variables so they work in light and dark. */

export function QmsArchitecture() {
  const box = (x: number, y: number, w: number, h: number, title: string, sub: string, accent = false) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} className={accent ? "d-box d-accent" : "d-box"} />
      <text x={x + w / 2} y={y + h / 2 - 4} textAnchor="middle" className="d-title">
        {title}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" className="d-sub">
        {sub}
      </text>
    </g>
  );
  const arrow = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} className="d-line" markerEnd="url(#arrow)" />;
  return (
    <svg viewBox="0 0 760 330" role="img" aria-label="Architecture of the receiving and QMS platform" className="diagram">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="d-head" />
        </marker>
      </defs>
      {box(20, 20, 200, 56, "Warehouse & QA users", "5 roles · RBAC")}
      {box(280, 20, 200, 56, "React.js web app", "wizards · auto-save", true)}
      {box(540, 20, 200, 56, "Auth", "Spring Security · OAuth2 · JWT")}
      {arrow(220, 48, 278, 48)}
      {arrow(480, 48, 538, 48)}

      {box(20, 132, 170, 64, "Receiving", "inspection · excursions")}
      {box(205, 132, 170, 64, "Deviations / CAPA", "quality events")}
      {box(390, 132, 170, 64, "Change control", "review · approval")}
      {box(575, 132, 165, 64, "Doc control", "versions · e-signatures")}
      {arrow(380, 76, 105, 130)}
      {arrow(380, 76, 290, 130)}
      {arrow(380, 76, 475, 130)}
      {arrow(380, 76, 657, 130)}

      {box(20, 252, 170, 56, "MySQL", "compliance records")}
      {box(205, 252, 170, 56, "AWS S3", "photos · logger graphs")}
      {box(390, 252, 170, 56, "Audit trail", "100,000+ actions · Splunk")}
      {box(575, 252, 165, 56, "Reporting", "Tableau · QuickSight")}
      {arrow(105, 196, 105, 250)}
      {arrow(290, 196, 290, 250)}
      {arrow(475, 196, 475, 250)}
      {arrow(657, 196, 657, 250)}
    </svg>
  );
}

export function AgentPipeline({ steps }: { steps: string[] }) {
  const w = 96,
    gap = 14,
    total = steps.length * w + (steps.length - 1) * gap;
  return (
    <svg viewBox={`0 0 ${total + 20} 120`} role="img" aria-label="ApplyPilot agent pipeline" className="diagram">
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="d-head" />
        </marker>
      </defs>
      {steps.map((s, i) => {
        const x = 10 + i * (w + gap);
        const accent = s.startsWith("Verify") || s.startsWith("Gate");
        return (
          <g key={s}>
            <rect x={x} y={22} width={w} height={44} rx={10} className={accent ? "d-box d-accent" : "d-box"} />
            <text x={x + w / 2} y={49} textAnchor="middle" className="d-title">
              {s}
            </text>
            {i < steps.length - 1 ? <line x1={x + w} y1={44} x2={x + w + gap - 1} y2={44} className="d-line" markerEnd="url(#arrow2)" /> : null}
          </g>
        );
      })}
      <line x1={10 + 5 * (w + gap) + w / 2} y1={66} x2={10 + 5 * (w + gap) + w / 2} y2={92} className="d-line d-dash" markerEnd="url(#arrow2)" />
      <text x={10 + 5 * (w + gap) + w / 2} y={110} className="d-sub" textAnchor="middle">
        low confidence → human review
      </text>
    </svg>
  );
}
