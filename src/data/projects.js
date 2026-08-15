export const projects = [
  {
    slug: 'bft-consensus',
    name: 'Scalable Byzantine Fault Tolerant Consensus',
    tag: 'Independent distributed systems research',
    status: 'SciFest National Finalist 2026',
    summary:
      'Investigated whether Byzantine Fault Tolerant consensus can scale to large networks while keeping its security guarantees. Explored BLS signature aggregation to cut communication complexity, and designed, built and evaluated experimental consensus systems.',
    highlights: [
      'BLS signature aggregation for reducing per-node communication',
      'Designed and implemented experimental consensus protocols',
      'Evaluated throughput, latency, communication complexity, fault tolerance and scalability',
      'Iterated through research, design, implementation, experimentation and presentation',
    ],
    recognition: [
      'SciFest@College TUS Athlone 2026 Best Project',
      'SciFest@College TUS Athlone 2026 1st Place, Intermediate Technology',
      'SciFest@School 2026 Best Project / 1st Place',
      'Progressed to SciFest National Final 2026',
    ],
    focusAreas: [
      'Byzantine Fault Tolerance',
      'Consensus',
      'Communication complexity',
      'BLS signatures',
      'Cryptography',
      'Distributed systems',
      'Blockchain',
      'Simulation',
    ],
  },
  {
    slug: 'cancer-staging',
    name: 'Smarter Cancer Staging',
    tag: 'Independent machine learning research',
    status: 'CREST Gold Award',
    summary:
      'Asked whether gene-expression data alone carries enough biological signal to distinguish early-stage from late-stage breast cancer. Trained and validated models on TCGA and an independent Swedish cohort. The finding was that the signal exists but is limited: a measurable, population-level signal, not a clinical tool.',
    highlights: [
      'TCGA BRCA: ~1,192 patients, ~20,530 genes; external validation on SCAN-B (~3,400 patients)',
      'Variance filtering plus stability selection down to compact 30-50 gene panels',
      'Compared Logistic Regression, Linear SVM, Random Forest and XGBoost',
      'Test accuracy ~0.68-0.69, ROC-AUC ~0.65-0.70 across models',
      'Deliberately excluded imaging, tumour size and lymph node data to avoid circular reasoning',
      'Built an ESP32-S3 edge device that runs inference and preprocessing locally with no cloud services',
    ],
    recognition: ['British Science Association CREST Gold Award'],
    focusAreas: [
      'Machine learning',
      'Gene expression',
      'Model validation',
      'Stability selection',
      'Edge computing',
      'Embedded systems',
      'ESP32-S3',
    ],
  },
  {
    slug: 'urban-transport',
    name: 'Pareto-Optimal Urban Transport',
    tag: 'Independent research project',
    status: 'ECO-UNESCO Best Junior Transport Project 2026',
    summary:
      'Modelled urban transport optimisation while accounting for environmental impacts and health externalities, not just travel outcomes.',
    highlights: [
      'Environmental impacts and health externalities treated as first-class objectives',
      'Pareto-optimal framing across transport outcomes',
    ],
    recognition: [
      'ECO-UNESCO Young Environmentalist Awards 2026, Best Junior Transport Project',
      'EirGrid Cleaner Climate Award, SciFest@School 2026',
    ],
    focusAreas: ['Urban transport', 'Optimisation', 'Environmental modelling', 'Health externalities'],
  },
]
