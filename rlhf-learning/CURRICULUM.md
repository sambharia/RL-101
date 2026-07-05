# RLHF Curriculum & Schedule

A Pareto-first path: the ~20% of ideas that unlock ~80% of understanding, ordered so
each lesson sits just past the edge of what you already know. Foundations come first
because the book assumes them. Each lesson is short, has one tangible win, and ends
with a teach-back blog paragraph.

Legend: [ ] todo · [~] in progress · [x] done

## Phase 0 — Foundations (what the book assumes you already know)
- [x] 0001 The Big Picture: base model → assistant, and where RLHF fits
- [x] 0002 What a language model really is (tokens, next-token prediction, autoregression)
        → covers microgpt.py lines 185–199: the inference/generation loop
- [x] 0003 How models learn: parameters, loss, gradient descent (the "downhill" idea)
        → covers microgpt.py lines 29–71 (autograd Value class) + lines 150–183 (training loop)
- [x] 0003b Model architecture: embeddings, attention, MLP (what's inside the transformer)
        → covers microgpt.py lines 73–143: the gpt() forward pass
- [x] 0004 Probability you actually need (distributions, expectation, sampling, log-probs)
- [x] 0005 What is reinforcement learning? (agent, state, action, reward, policy, return)
- [x] 0005b CAPSTONE: Rebuild microGPT from scratch (pseudocode)
---

## Phase 1 — The RLHF big picture
- [x] 0006 The three-step RLHF pipeline (SFT → Reward Model → RL)  [mastered 2026-07-05]
- [ ] 0007 The RLHF Objective (deeper dive into the math)


## How testing works (so you can trust your own progress)
The gate for every lesson is one clear **Mastery Check** with three rungs:
1. **Recall** — state the core precisely (necessary, not sufficient).
2. **Apply** — use the concept on a new scenario. **(must pass)**
3. **Explain/Transfer** — give the causal "why" or predict an outcome. **(must pass)**

**Pass = Apply + Explain both correct.** Recall alone doesn't unlock the next lesson —
that's how we guarantee passing means real understanding. Miss a rung → I name the exact
gap, re-teach that one piece, and re-test with a fresh variant. Supporting tools:
- **Self-check MCQ** inside each lesson — low-stakes warm-up, instant feedback (not the gate).
- **Spaced recall** — each lesson opens with quick questions on earlier material.
- **Interleaving** — from ~Lesson 0008 on, checks mix concepts across chapters.
- **Milestone checks** — end of each phase: rebuild the whole pipeline from memory.
- **Blog deliverable** — after passing, write the concept up "for beginners" (the mission
  output), collected at the end of each phase.

## Two layers per lesson
Every lesson has (a) an **intuition layer** that lands the mental model, and (b) a
**"Going Deeper: the mathematics"** layer with real LaTeX derivations — objectives,
gradients, and proofs at the level needed to read papers. Math is rendered with MathJax.

## Pace
No clock. We move when you can teach the current idea — in words *and* math — not before.
Some lessons take one sitting; some take two. Mastery gates progression, not time.
