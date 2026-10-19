export type ProjectDetails = {
 synopsis: string; audience: string; outcome: string; status: string;
 videoUrl?: string; liveUrl?: string; docsUrl?: string;
 architecture: string[]; decisions: string[]; validation: string[]; limitations: string[];
};
export const projectDetails: Record<string, ProjectDetails> = {
 incidentdesk: {
  "synopsis": "A checkout starts failing after a payment release. IncidentDesk brings the request traces, recent changes and service checks into one investigation. It proposes a bounded recovery, asks a person to approve it, then checks fresh traffic before calling the incident recovered.",
  "audience": "Engineers investigating incidents in an isolated operational service.",
  "outcome": "Make the evidence, permitted change, approval and recovery result inspectable.",
  "status": "Hosted deterministic prototype · real-user feedback pending",
  "liveUrl": "https://incidentdesk-g6pp.onrender.com",
  "architecture": [
    "Checkout/payment HTTP lab \u2192 correlated evidence",
    "Rules or local model \u2192 evidence-bound proposal",
    "Independent policy \u2192 human approval \u2192 guarded change",
    "Repeated probes \u2192 verification \u2192 conditional rollback"
  ],
  "decisions": [
    "Keep the action policy independent from model explanations.",
    "Use real HTTP traffic and explicit incident variants.",
    "Preserve failed model results; do not claim AI advantage from aggregate agreement."
  ],
  "validation": [
    "The release passed 41 tests on macOS and Linux. The rules handled all 10 development incidents and 8 reserved incidents; the local Qwen2.5 model passed 7/10 and 6/8. On this lab, the model has not earned an advantage over the rules.",
    "These are authored synthetic lab incidents; they do not establish production incident accuracy or an advantage over rules.",
    "The hosted payment-release check reached recovery after human approval, then served 240 successful requests over 10.18 seconds. The run is recorded in reports/hosted-validation.json. It checks one synthetic incident, not production availability."
  ],
  "limitations": [
    "Real external feedback and interview participation remain pending.",
    "The free hosted lab uses deterministic rules, sleeps on inactivity and loses demo state on restart; it does not run the measured local AI model.",
    "Production connectors, identity, cross-host isolation and service-level reliability are outside this prototype."
  ]
},
 atlas: {
  synopsis: 'A long business document lands on your desk. Hidden inside are requirements, deadlines, and obligations. ATLAS is being built to turn that document into a reviewable workspace: find each requirement, connect it to supporting evidence, and let a person make the final decision.',
  audience: 'Teams reviewing RFPs, contracts, and technical requirements.',
  outcome: 'Make document review easier to trace: what was requested, what evidence supports an answer, and what still needs attention.',
  status: 'Local development · public demo and live access coming after validation',
  architecture: ['React / TypeScript review interface → FastAPI API', 'Bounded document ingestion → source text and page / paragraph locations', 'Tenant-scoped persistence → retrieval → evidence-linked analysis', 'Human review → auditable decisions'],
  decisions: ['Keep source evidence attached to analysis so reviewers can inspect the underlying text.', 'Treat documents as untrusted input and enforce tenant boundaries.', 'Separate deterministic baselines from live model behavior so evaluation remains meaningful.'],
  validation: ["A live browser check followed one synthetic requirement through the interface, FastAPI, an isolated Bedrock worker and SQLite, then reopened the saved review and highlighted its source. No request mocks or provider stubs were used (reports/browser-model-validation.json).", "The earlier API-only live-model check is recorded separately in reports/model-job-backend.json. Neither check measures general model accuracy. The browser run did not separately capture frontend build identity.", "All 18 groups passed in a local PostgreSQL 18.6 integration run, including restricted logins, tenant isolation, pinned job publication, review and rollback. It used controlled model output; source hashes were captured after the run (reports/model-job-postgres.json).", "A Linux ARM64 Compose run exercised the separate API and worker with PostgreSQL/pgvector, competing reviews and retained approval/audit data after stack recreation. It covered one synthetic baseline workflow, not live-model PostgreSQL, load or backup recovery (reports/compose.json).", "These checks establish specific local paths. They do not establish cloud deployment, production reliability or representative model accuracy."],
  limitations: ['Still under active development; capabilities change by milestone.', 'A small authored live v4 hostile-evidence diagnostic recorded forbidden-appendix citation contamination, a threshold interpretation error and false-positive suppression of legitimate training evidence (reports/injection-pairs-live-v4.json). This does not measure production attack prevalence or exfiltration resistance.', 'No public production deployment or published model-quality benchmark yet.', 'Scanned-document OCR is outside the initial ingestion scope.']
 },
 chaoslab: {
  synopsis: 'The demo works. Then a tool times out, a source contains hostile instructions, or a model returns an unexpected answer. CHAOSLAB is being built to examine those moments, using repeatable scenarios to reveal where an AI workflow holds up and where it breaks.',
  audience: 'Developers who need evidence that an AI workflow behaves reliably.',
  outcome: 'Replace a single impressive demonstration with repeatable observations about quality and failure behavior.',
  status: 'Evaluation foundations in development · public demo pending',
  architecture: ['Scenario definitions → isolated evaluation runs', 'ATLAS adapter → observed outputs and failure behavior', 'Assertions and scoring → reproducible reports'],
  decisions: ['Keep the evaluator independently useful rather than embedding its conclusions inside the system under test.', 'Record experiment configuration alongside results.', 'Distinguish deterministic regression checks from probabilistic model-quality evaluation.'],
  validation: ['Baseline evaluation components are being developed alongside ATLAS.', 'No aggregate success rate is claimed on this portfolio.', 'Public reports will identify dataset size, scoring rules, and known gaps.'],
  limitations: ['Broader fault injection, tracing, and model comparison remain evolving scope.', 'A passing scenario suite does not establish universal agent safety.']
 },
 patchwork: {
  synopsis: 'A build fails. Instead of handing an agent the entire codebase and hoping for the best, PATCHWORK will start with a narrow failure, propose a small fix, and test it in isolation. A person will review the proposed change before it is merged.',
  audience: 'Software teams investigating recurring CI failures.',
  outcome: 'Explore whether narrowly scoped agents can reduce debugging effort while keeping changes reviewable.',
  status: 'Planned project · implementation has not started',
  architecture: ['Planned: CI failure context → diagnostic workflow', 'Planned: sandboxed patch proposal → isolated tests', 'Planned: pull request → human review'],
  decisions: ['Start with a small, explicit failure taxonomy.', 'Keep execution sandboxed and constrain tool access.', 'Require human review before merging changes.'],
  validation: ['Planned: reproducible bug fixtures and regression checks.', 'Planned: measure valid fixes, regressions, runtime, and cost.'],
  limitations: ['Concept only; there is no working demo or application to access yet.', 'Architecture and technology choices may change during implementation.']
 }
};
