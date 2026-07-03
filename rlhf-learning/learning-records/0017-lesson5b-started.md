# Lesson 5b started — CAPSTONE: rebuild microGPT

## Lesson scope
Hands-on rebuild exercise. Close microgpt.py, open a blank file, write all 199 lines
from understanding. Proves ownership of Phase 0 foundations.

## Format
Not a content lesson — a structured rebuild exercise with:
- Warm-up recall across all Phase 0 lessons (Lessons 2, 3, 3b, 5)
- Roadmap breaking microgpt.py into 7 conceptual blocks
- Concept-to-code mapping table (12 entries)
- Expandable hints for each block (use only when stuck)
- Interactive progress tracker (localStorage-persisted checkboxes)

## Seven blocks of the rebuild
1. Dataset & Tokenizer (lines 1–26) — Lesson 2
2. Autograd / Value class (lines 29–71) — Lesson 3
3. Parameter initialization (lines 73–89) — Lesson 3b
4. Helper functions: linear, softmax, rmsnorm (lines 93–105) — Lessons 2, 3b
5. GPT forward pass (lines 107–143) — Lesson 3b
6. Training loop (lines 145–183) — Lessons 3, 4
7. Inference / generation (lines 185–199) — Lessons 2, 4, 5

## Mastery check design
- Rung 1 (Structure): List seven blocks and describe each in one sentence.
- Rung 2 (Rebuild): Write all seven blocks — must implement the correct algorithm.
- Rung 3 (Explain pipeline): Trace a training step end-to-end; predict what RLHF changes.

## Bridge to next phase
Passing this capstone unlocks Phase 1 — the RLHF book itself (Lessons 6–7).
