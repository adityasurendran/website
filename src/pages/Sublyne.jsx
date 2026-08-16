import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'

const commData = [
  { n: 4, sublyne: 2400, baseline: 2400, ratio: '1.000' },
  { n: 8, sublyne: 4800, baseline: 11200, ratio: '0.429' },
  { n: 16, sublyne: 9600, baseline: 48000, ratio: '0.200' },
  { n: 32, sublyne: 19200, baseline: 198400, ratio: '0.097' },
  { n: 64, sublyne: 38400, baseline: 806400, ratio: '0.048' },
]

const vrf = [
  { n: 16, committee: 13, quorum: 9, msgs: 4.38, risk: 0, baseline: '29.5%' },
  { n: 32, committee: 25, quorum: 17, msgs: 4.79, risk: 0, baseline: '27.2%' },
  { n: 64, committee: 49, quorum: 33, msgs: 4.84, risk: 0, baseline: '40.3%' },
  { n: 128, committee: 97, quorum: 65, msgs: 4.86, risk: 0, baseline: '38.9%' },
]

const headToHead = [
  ['Sublyne', '764', '63.6', '9.0 ms'],
  ['CometBFT v0.38.10', '9', '0.75', '902.8 ms'],
  ['HotStuff (reference)', '9,078', '930.4', '3,233.0 ms'],
  ['Mysticeti (reference)', '111', '9.25', '-'],
]

const messageFaults = [
  ['delay 100 ms', '50 / 50', '0', 'ok'],
  ['drop 5%', '4 / 50', '19', 'ok'],
  ['drop 10%', '4 / 50', '19', 'ok'],
  ['drop 20%', '1 / 50', '13', 'ok'],
  ['replay 50%', '50 / 50', '0', 'ok'],
]

const intel = [
  ['AVX2 vs scalar kernel', '3.19x faster, identical output'],
  ['BLS12-381 signing', '~1,800 signatures / second'],
  ['BLAKE3 hashing', '~1.9 GB/s'],
  ['OpenVINO 2026 inference', '18 us / round (4.8x faster than PyTorch CPU)'],
  ['NNCF INT8 quantized', '16 us / round'],
  ['Rust cross-check', '100% agreement with the deployed classifier'],
]

const stats = [
  { end: 197, label: 'Tests passing (lib + doc + integration)' },
  { end: 15, suffix: '/15', label: 'Verified full-population runs' },
  { end: 242514, label: 'Committed rounds in a 2-hour endurance run' },
  { end: 0, label: 'View changes during that run' },
  { end: 4.86, decimals: 2, prefix: '', label: 'msgs/commit at 128 validators' },
  { end: 9, label: 'ms p95 commit latency (head-to-head)' },
]

const sections = [
  ['overview', 'Overview'],
  ['architecture', 'Architecture'],
  ['scaling', 'Communication'],
  ['h2h', 'Head-to-head'],
  ['security', 'Security'],
  ['verification', 'Verification'],
  ['intel', 'Intel'],
  ['recognition', 'Recognition'],
]

function CommChart() {
  const W = 720
  const H = 240
  const padL = 44
  const padT = 26
  const padB = 34
  const plotW = W - padL - 12
  const plotH = H - padB - padT
  const logMin = 3
  const logMax = 6.5

  const y = (v) => padT + (plotH - ((Math.log10(v) - logMin) / (logMax - logMin)) * plotH)
  const grid = [1000, 10000, 100000, 1000000]

  const groupW = plotW / commData.length
  const barW = groupW * 0.32

  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Communication scaling chart">
        {grid.map((g) => (
          <g key={g}>
            <line x1={padL} x2={W - 12} y1={y(g)} y2={y(g)} stroke="#e3e7ec" strokeWidth="1" />
            <text x={padL - 8} y={y(g) + 4} textAnchor="end" fontSize="11" fill="#8a94a3">
              {g >= 1000000 ? '1e6' : g >= 100000 ? '1e5' : g >= 10000 ? '1e4' : '1e3'}
            </text>
          </g>
        ))}
        {commData.map((d, i) => {
          const cx = padL + groupW * i + groupW / 2
          return (
            <g key={d.n}>
              <rect x={cx - barW - 3} y={y(d.sublyne)} width={barW} height={plotH - y(d.sublyne)} fill="#2563eb" rx="3" />
              <rect x={cx + 3} y={y(d.baseline)} width={barW} height={plotH - y(d.baseline)} fill="#c3cad2" rx="3" />
              <text x={cx} y={H - 12} textAnchor="middle" fontSize="12" fill="#333a42">
                n={d.n}
              </text>
              <text x={cx} y={y(d.sublyne) - 5} textAnchor="middle" fontSize="10" fill="#2563eb">
                {d.ratio}x
              </text>
            </g>
          )
        })}
        <text x={W / 2} y={16} textAnchor="middle" fontSize="12" fill="#67717c">
          messages per round (log scale)
        </text>
      </svg>
      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch blue" /> Sublyne
        </span>
        <span className="legend-item">
          <span className="legend-swatch gray" /> O(n²) all-to-all baseline
        </span>
      </div>
      <p className="chart-note">
        Log scale. Sublyne's ratio versus the quadratic baseline roughly halves with every doubling of n, from 1.000x at
        n=4 to 0.048x at n=64. Larger scales are modelled, not measured.
      </p>
    </div>
  )
}

function SectionNav() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav className="sub-nav" aria-label="Sections">
      {sections.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={active === id ? 'sub-nav-link active' : 'sub-nav-link'}>
          {label}
        </a>
      ))}
    </nav>
  )
}

function Sublyne() {
  return (
    <div className="page">
      <Reveal>
        <section className="page-head sublyne-head">
          <p className="hero-kicker">Independent distributed systems research</p>
          <h1>Sublyne</h1>
          <p className="sublyne-sub">
            An AI-powered adaptive Byzantine Fault Tolerant consensus protocol in Rust. DAG-based data
            dissemination, hierarchical BLS12-381 signature aggregation and a machine-learning control plane
            that adapts the protocol to live network conditions.
          </p>
          <div className="badges">
            <span className="badge">SciFest Best Project 2026</span>
            <span className="badge">SciFest National Finalist 2026</span>
            <span className="badge">Intel AI Global Summit 2026</span>
            <span className="badge">Eskom Expo 2026</span>
          </div>
        </section>
      </Reveal>

      <SectionNav />

      <Reveal>
        <section className="section stats-section">
          <div className="stats stats-4">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">
                  <CountUp end={s.end} suffix={s.suffix || ''} decimals={s.decimals || 0} prefix={s.prefix || ''} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <section id="overview" className="section report-section">
        <h2>Overview</h2>
        <p className="report-lead">
          Nearly every BFT protocol pays a quadratic all-to-all communication cost: with n validators, every round
          moves on the order of n² messages. Sublyne tests whether restructuring how those messages travel can push
          that growth below quadratic without weakening safety.
        </p>
        <p className="report-text">
          Three mechanisms do the work: transaction data is propagated once through a gossip network and referenced
          by compact hashes, validator votes are combined into constant-size certificates through a tree of BLS
          signatures, and a control layer of machine-learning components reads live telemetry each round to adjust
          timeouts, batching and operating mode within fixed correctness bounds. Everything is implemented in Rust
          (~60 source modules, tokio async runtime, TCP and experimental QUIC transports) with 197 tests passing.
        </p>
      </section>

      <section id="architecture" className="section report-section">
        <h2>Architecture</h2>
        <div className="arch-grid">
          <div className="arch-card">
            <span className="arch-num">01</span>
            <h3>DAG-decoupled dissemination</h3>
            <p>
              Transaction data is gossiped once through a fixed-peer network. Consensus then references it by
              cryptographic hash, so the payload is never retransmitted.
            </p>
          </div>
          <div className="arch-card">
            <span className="arch-num">02</span>
            <h3>Hierarchical BLS12-381 aggregation</h3>
            <p>
              Votes combine through a tree of fanout 4 into certificates of constant size: one aggregate signature
              plus a participant bitmap.
            </p>
          </div>
          <div className="arch-card">
            <span className="arch-num">03</span>
            <h3>Adaptive AI control layer</h3>
            <p>
              14 machine-learning components: regime classification, failure prediction, anomaly detection, drift
              detection, leader scoring and a meta-policy bandit, adjusting the protocol in real time.
            </p>
          </div>
          <div className="arch-card">
            <span className="arch-num">04</span>
            <h3>VRF committee election</h3>
            <p>
              An active-committee mode whose election is unpredictable until revealed and verifiable by anyone, with
              committee size derived from a strict capture-risk target.
            </p>
          </div>
        </div>
        <div className="chips stack-chips">
          {['Rust', 'tokio', 'BLS12-381', 'VRF', 'QUIC', 'TCP', 'TLA+', 'Coq', 'OpenVINO'].map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="scaling" className="section report-section">
        <h2>Communication scaling</h2>
        <CommChart />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Validators (n)</th>
                <th>Sublyne (est. msgs)</th>
                <th>O(n²) baseline</th>
                <th>Ratio</th>
              </tr>
            </thead>
            <tbody>
              {commData.map((d) => (
                <tr key={d.n}>
                  <td>{d.n}</td>
                  <td>{d.sublyne.toLocaleString()}</td>
                  <td>{d.baseline.toLocaleString()}</td>
                  <td>{d.ratio}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="h2h" className="section report-section">
        <h2>Head-to-head vs real upstream binaries</h2>
        <p className="report-text">
          Sublyne (native) against the actual CometBFT v0.38.10, HotStuff and Mysticeti executables, same 12-second
          window, 4 validators. A trade-off: Sublyne has the lowest p95 commit latency by a wide margin (9 ms vs
          903 ms and 3,233 ms) and steady throughput, while HotStuff shows higher raw throughput at 350x the latency.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Protocol</th>
                <th>Commits</th>
                <th>Commits / s</th>
                <th>p95 commit</th>
              </tr>
            </thead>
            <tbody>
              {headToHead.map(([name, commits, rate, p95]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{commits}</td>
                  <td>{rate}</td>
                  <td>{p95}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="security" className="section report-section">
        <h2>Security & fault tolerance</h2>
        <p className="report-text">
          With VRF election and security-derived sizing, per-round capture risk is zero while per-commit
          communication stays nearly flat as n grows from 16 to 128 validators.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>n</th>
                <th>Committee</th>
                <th>Quorum</th>
                <th>msgs / commit</th>
                <th>Capture risk (VRF)</th>
                <th>Baseline at f=n/3</th>
              </tr>
            </thead>
            <tbody>
              {vrf.map((d) => (
                <tr key={d.n}>
                  <td>{d.n}</td>
                  <td>{d.committee}</td>
                  <td>{d.quorum}</td>
                  <td>{d.msgs}</td>
                  <td>{d.risk}</td>
                  <td>{d.baseline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="report-subhead">Message faults on the real TCP path</h3>
        <p className="report-text">
          Injected delay, drop and replay, 50 rounds per scenario. Safety held in every scenario; heavy dropping
          degrades liveness, reported openly as a limitation.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Committed (of 50)</th>
                <th>View changes</th>
                <th>Safety</th>
              </tr>
            </thead>
            <tbody>
              {messageFaults.map(([scenario, committed, views, safety]) => (
                <tr key={scenario}>
                  <td>{scenario}</td>
                  <td>{committed}</td>
                  <td>{views}</td>
                  <td>{safety}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="verification" className="section report-section">
        <h2>Formal verification</h2>
        <div className="verif-grid">
          <div className="verif-card">
            <span className="verif-label">TLA+</span>
            <p className="verif-stat">97,361 states</p>
            <p className="report-text">
              Safety invariants (TypeOK, Agreement, Accountability, PhaseConsistency) checked in an abstract
              4-validator model with no errors. Fairness-based eventual-decision check passes.
            </p>
          </div>
          <div className="verif-card">
            <span className="verif-label">Coq / Rocq 9.0</span>
            <p className="verif-stat">machine-checked</p>
            <p className="report-text">
              The core safety theorem is machine-checked: two quorums of size n-f in a universe of n intersect in at
              least f+1 validators, so two conflicting certificates cannot both be valid.
            </p>
          </div>
          <div className="verif-card">
            <span className="verif-label">Game-based</span>
            <p className="verif-stat">VRF election</p>
            <p className="report-text">
              An informal game-based argument covers unpredictability, unbiasability and capture probability for the
              committee election.
            </p>
          </div>
        </div>
        <p className="chart-note">
          Formal checks target abstract models, not a proof of the Rust implementation.
        </p>
      </section>

      <section id="intel" className="section report-section">
        <h2>Intel acceleration</h2>
        <p className="report-text">
          Measured on an Intel Core i9 (x86-64, AVX2). The control plane's classifier was exported to ONNX, run
          through Intel OpenVINO 2026, and INT8-quantized with NNCF; a oneDNN kernel was built with the Intel oneAPI
          compiler.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Measurement</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {intel.map(([m, v]) => (
                <tr key={m}>
                  <td>{m}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="recognition" className="section report-section">
        <h2>Recognition</h2>
        <ul className="list">
          <li>SciFest@College TUS Athlone 2026 Best Project and 1st Place, Intermediate Technology</li>
          <li>Progressed to the SciFest National Final 2026</li>
          <li>Selected to represent Ireland, Intel AI Global Summit 2026</li>
          <li>Selected for the Eskom Expo International Science Fair 2026 (South Africa)</li>
        </ul>
      </section>
    </div>
  )
}

export default Sublyne
