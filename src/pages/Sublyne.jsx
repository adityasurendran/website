const results = [
  {
    metric: 'Communication growth (4 -> 64 validators)',
    value: '0.05x',
    note: 'Estimated messages relative to a quadratic baseline; halves per doubling',
  },
  {
    metric: 'Full-population execution',
    value: '15 / 15',
    note: 'Verified runs at 4, 8, 16, 32 and 64 validators',
  },
  {
    metric: 'Recovery after faults',
    value: '~1.5s vs ~87s',
    note: 'Measured vs reference implementation',
  },
  {
    metric: '24h endurance run',
    value: '157,292 rounds',
    note: '99.98% success, 0 view changes',
  },
  {
    metric: 'Byzantine safety',
    value: 'OK',
    note: 'Safety held at the one-third threshold and under message faults on the real TCP path',
  },
  {
    metric: 'TLA+ verification',
    value: '97,361 states',
    note: 'Zero safety violations in the abstract model',
  },
]

const intel = [
  ['AVX2 vs scalar kernel', '3.19x faster, identical output'],
  ['BLS12-381 signing', '~1,800 signatures / second'],
  ['BLAKE3 hashing', '~1.9 GB/s'],
  ['OpenVINO 2026 inference', '18 us / round (4.8x faster than PyTorch CPU)'],
  ['NNCF INT8 quantized', '16 us / round'],
  ['Rust cross-check', '100% agreement with the deployed classifier'],
]

function Sublyne() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>Sublyne</h1>
        <p>
          Sublyne is an AI-powered adaptive Byzantine Fault Tolerant (BFT) consensus protocol: DAG-based data
          dissemination, hierarchical BLS12-381 signature aggregation and a machine-learning control plane that
          adapts the protocol to live network conditions, all in Rust.
        </p>
      </section>

      <section className="section">
        <h2>Results</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.metric}>
                  <td>
                    {r.metric}
                    <span className="table-note"> {r.note}</span>
                  </td>
                  <td>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Intel acceleration</h2>
        <p>
          Measured on an Intel Core i9 (x86-64, AVX2). The control plane's classifier was exported to ONNX, run
          through Intel OpenVINO 2026, and INT8-quantized with NNCF; a oneDNN kernel was built with the Intel oneAPI
          compiler. Every number below is logged in <code>results/intel_accel/</code>.
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

      <section className="section">
        <h2>Recognition</h2>
        <ul className="list">
          <li>SciFest@College TUS Athlone 2026 Best Project and 1st Place, Intermediate Technology</li>
          <li>Progressed to the SciFest National Final 2026</li>
          <li>Selected to represent Ireland, Intel AI Global Summit 2026</li>
          <li>Selected for the Eskom Expo International Science Fair 2026 (South Africa)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Report</h2>
        <p>
          The full SciFest project book for this project is available as a PDF.
        </p>
        <p className="report-links">
          <a className="btn" href="/reports/sublyne-bft-scifest-report.pdf" target="_blank" rel="noreferrer">
            Open the report
          </a>
        </p>
      </section>
    </div>
  )
}

export default Sublyne
