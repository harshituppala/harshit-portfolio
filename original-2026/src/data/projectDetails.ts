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
  "synopsis": "An RFP asks for recovery within four hours. The capability register guarantees eight. ATLAS keeps the requirement, evidence and review decision together so a reviewer can inspect that mismatch before responding.",
  "audience": "Teams reviewing RFPs and contract requirements.",
  "outcome": "Trace each assessment to its source and keep the final decision with the reviewer.",
  "status": "Fictional review lab live · full service in development",
  "docsUrl": "https://github.com/harshituppala/atlas-chaoslab/tree/main/src/atlas",
  "architecture": [
    "React review workbench → FastAPI → database-backed jobs.",
    "Isolated worker → extracted obligations → retrieved evidence → validated citations.",
    "Versioned review and audit writes commit together.",
    "Optional Bedrock inference selects evidence choices; the default baseline runs offline."
  ],
  "decisions": [
    "Use database leases so a crashed worker can be replaced without allowing an old attempt to publish.",
    "Keep exact source identity separate from the question of whether evidence supports a requirement.",
    "Keep private uploads and model credentials out of the public synthetic lab."
  ],
  "validation": [
    "The corrected GitHub run passed 460 backend tests, ten private-workbench browser tests, three static-viewer tests and three synthetic-lab browser tests. Eighteen optional PostgreSQL groups were skipped.",
    "Hosted HTTPS checks validated eight requirements and fourteen exact source spans, human review, stale conflicts, session isolation and secure cookies.",
    "A real hosted Chromium workflow checked desktop/mobile source inspection, review, reload and logout. A provider restart rejected the previous session before expiry and permitted a fresh analysis.",
    "Separate local PostgreSQL, container and logical-restore reports cover their own versions and workflows. These checks do not establish representative contract accuracy."
  ],
  "limitations": [
    "The public lab accepts only fictional seeded records, uses the offline baseline and loses history after expiry or restart. Free hosting sleeps when idle.",
    "Real managed sign-in and durable hosted storage remain unfinished.",
    "The optional model path retains a threshold error and hostile-evidence contamination on small development datasets. Scanned-document OCR is not implemented."
  ],
  "liveUrl": "https://atlas-review-lab.onrender.com"
},
 chaoslab: {
  "synopsis": "A valid JSON response and a real citation can still produce a wrong assessment. CHAOSLAB checks those properties separately, then preserves the failures so the next experiment has something concrete to improve.",
  "audience": "Developers evaluating bounded AI workflows.",
  "outcome": "Make quality regressions, operational errors and evidence contamination visible.",
  "status": "Working evaluator · public reports · local standalone package verified",
  "docsUrl": "https://github.com/harshituppala/atlas-chaoslab/tree/main/src/chaoslab",
  "architecture": [
    "Label-free JSON inputs → trusted adapter process → independently scored outputs.",
    "Golden expectations → extraction, relation, citation and review-state checks.",
    "Paired raw runs → obligation transitions, missing cases and reproducible reports."
  ],
  "decisions": [
    "Keep expected labels out of adapter inputs.",
    "Compare saved outputs under the same dataset and scorer rather than comparing unrelated percentages.",
    "Record operational failures and unrun cases instead of counting them as safe abstention."
  ],
  "validation": [
    "The published live paired run passed eight of twelve synthetic cases and retained one forbidden-source citation.",
    "Seven authored recovery scenarios passed through the newer isolated local runner; lease clocks were simulated.",
    "A local wheel-installation check ran saved-output comparisons outside the source repository without ATLAS installed. It retained a corrupt-citation regression and a missing attempt (reports/chaoslab-package.json); remote CI for this package check is pending.",
    "GitHub CI passed the published baseline, adversarial, reasoning, recovery and ingestion checks, alongside the application suites. Failed model-quality cases remain in the reports."
  ],
  "limitations": [
    "These are same-author development fixtures, not blinded external evaluation.",
    "The subprocess boundary runs trusted adapters; it is not a sandbox for arbitrary hostile code.",
    "A passing fixture suite does not establish general agent reliability.",
    "The local standalone package covers core comparisons and trusted adapters; ATLAS retrieval and database probes still need their own dependencies. No registry release or independently authored evaluation is established."
  ]
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
