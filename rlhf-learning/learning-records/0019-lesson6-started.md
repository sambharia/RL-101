# Lesson 6 started — the three-step RLHF pipeline

## Lesson scope
The full post-training pipeline: SFT → Reward Model → RL optimization.
How the three steps connect and why each exists.
Maps to RLHF Book Chapters 1–3.

## Prerequisites confirmed
Phase 0 complete:
- Language models, tokens, next-token prediction (Lessons 1–2)
- Training: loss, gradients, backpropagation (Lesson 3)
- Transformer architecture (Lesson 3b)
- Probability: distributions, expectation, sampling, log-probs (Lesson 4)
- RL framework: agent, state, action, reward, policy, return (Lesson 5)
- microGPT pseudocode rebuild (Lesson 5b capstone)

## Bridge from Phase 0
User correctly identified in capstone Rung 3 that RLHF replaces the supervised
loss with a reward model score — this lesson expands on exactly how that works
across the full three-step pipeline.
