export type ProjectDetails = {
 synopsis: string; audience: string; outcome: string; status: string;
 videoUrl?: string; liveUrl?: string; docsUrl?: string;
 architecture: string[]; decisions: string[]; validation: string[]; limitations: string[];
};
export const projectDetails: Record<string, ProjectDetails> = {
 atlas: {
  synopsis: 'A long business document lands on your desk. Hidden inside are requirements, deadlines, and obligations. ATLAS is being built to turn that document into a reviewable workspace: find each requirement, connect it to supporting evidence, and let a person make the final decision.',
  audience: 'Teams reviewing RFPs, contracts, and technical requirements.',
  outcome: 'Make document review easier to trace: what was requested, what evidence supports an answer, and what still needs attention.',
  status: 'Local development · public demo and live access coming after validation',
  architecture: ['React / TypeScript review interface → FastAPI API', 'Bounded document ingestion → source text and page / paragraph locations', 'Tenant-scoped persistence → retrieval → evidence-linked analysis', 'Human review → auditable decisions'],
  decisions: ['Keep source evidence attached to analysis so reviewers can inspect the underlying text.', 'Treat documents as untrusted input and enforce tenant boundaries.', 'Separate deterministic baselines from live model behavior so evaluation remains meaningful.'],
  validation: ['Backend, API, and browser workflows are tested in the project repository.', 'Quality claims require an identified dataset, configuration, and reproducible evaluation run.', 'A recorded live-model backend check passed one selected synthetic case: API submission, isolated execution, atomic SQLite publication, and authenticated result readback (reports/model-job-backend.json).', 'That result covers the backend through FastAPI TestClient. It does not establish browser UI behavior, PostgreSQL deployment, cloud deployment, or production reliability.', 'A separate local PostgreSQL 18.6 run passed all 18 integration groups, including model-job isolation, pinned publication, review, and rollback under restricted database logins (reports/model-job-postgres.json).', 'The PostgreSQL model-job check used controlled model output, not live inference. Its source hashes were captured after execution; it does not establish a live browser model review, cloud deployment, or model accuracy.', 'A separate real browser check passed one synthetic case through explicit mode selection, FastAPI, an isolated Bedrock worker, SQLite publication and authenticated browser readback, without request mocks or provider stubs (reports/browser-model-validation.json).', 'This is a one-case functional check, not production accuracy, live-model PostgreSQL integration or cloud deployment. Frontend build identity was not separately captured.', 'A local Linux ARM64 Compose check exercised PostgreSQL/pgvector, restricted database roles, a separate API and worker, tenant refusal, competing reviews and persisted approval/audit data after stack recreation (reports/compose.json). One synthetic baseline workflow; no live model, load, backup/restore or cloud deployment validation.'],
  limitations: ['Still under active development; capabilities change by milestone.', 'No public production deployment or published model-quality benchmark yet.', 'Scanned-document OCR is outside the initial ingestion scope.']
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
