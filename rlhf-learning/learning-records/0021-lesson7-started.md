# Lesson 7 started — The RLHF Objective (inside the math)

## Date: 2026-07-05

## Concepts to cover
- Probability of a full response via chain rule (product of per-token probs)
- KL divergence: general formula, properties (non-negative, asymmetric)
- KL for language models: decomposes into sum of per-token log-ratios
- The expanded RLHF objective with per-token KL
- Effective reward: r_eff = R(x,y) - β × Σ log-ratios
- The β knob: tradeoff between reward chasing and staying close to reference
- The optimal policy: π*(y|x) ∝ π_ref(y|x) · exp(R/β)
- The reverse formula: R = β log(π*/π_ref) + β log Z — bridge to DPO

## Prerequisites confirmed
- Lesson 4 (probability, log-probs, expectation) — mastered
- Lesson 6 (three-step pipeline, objective at high level) — mastered

## Status: IN PROGRESS
