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
- [~] 0003b Model architecture: embeddings, attention, MLP (what's inside the transformer)
        → covers microgpt.py lines 73–143: the gpt() forward pass
- [ ] 0004 Probability you actually need (distributions, expectation, sampling, log-probs)
- [ ] 0005 What is reinforcement learning? (agent, state, action, reward, policy, return)
- [ ] 0005b CAPSTONE — Read & write microGPT from scratch
        Goal: close microgpt.py, open a blank file, and write all 199 lines yourself.
        This is the milestone that proves you own Phase 0.

## Phase 1 — The RLHF big picture (Book Ch 1–3)
- [ ] 0006 The three-step pipeline in depth + the post-training landscape
- [ ] 0007 The RLHF training objective: reward minus a leash (KL) — intuition

## Phase 2 — Core pipeline (Book Ch 4–6)
- [ ] 0008 Instruction / supervised fine-tuning (SFT): teaching the Q&A format
- [ ] 0009 Reward models: turning preferences into a number (Bradley–Terry)
- [ ] 0010 Policy gradients I: the REINFORCE intuition (push up good, down bad)
- [ ] 0011 Policy gradients II: PPO and GRPO (why we clip, why we add a baseline)

## Phase 3 — Direct & practical algorithms (Book Ch 7–9)
- [ ] 0012 DPO & direct alignment: skipping the reward model
- [ ] 0013 Rejection sampling: the simplest "RLHF" that works
- [ ] 0014 Reasoning & inference-time scaling, RLVR (verifiable rewards)

## Phase 4 — Data & preferences (Book Ch 10–13)
- [ ] 0015 The nature of preferences: why human feedback at all
- [ ] 0016 Collecting preference data (and its noise)
- [ ] 0017 Synthetic data & AI feedback (RLAIF), distillation
- [ ] 0018 Tool use & function calling

## Phase 5 — Practical considerations (Book Ch 14–17)
- [ ] 0019 Over-optimization: why the reward proxy betrays you (Goodhart)
- [ ] 0020 Regularization: keeping the optimizer honest
- [ ] 0021 Evaluation: how we know if any of this worked
- [ ] 0022 Model character & products: RLHF in the real world

## Capstone
- [ ] 0023 Write & polish the "RLHF for Beginners" blog series from your teach-backs

---

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
