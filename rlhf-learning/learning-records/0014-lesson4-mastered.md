# Lesson 4 mastered — probability you actually need

## Concepts covered
- Probability distributions: two rules (non-negative, sum to 1), softmax guarantees both
- Notation: P(x), π(y|x) conditional probability, π(·|x) full distribution, π as policy
- Expectation: E_{y~π}[f(y)] = Σ π(y)·f(y) — weighted average, weights are probabilities
- Why "expected" ≠ "what you expect" — it's the average over many repetitions
- Sampling: y ~ π — drawing from a distribution; text generation IS sampling
- Monte Carlo estimation: approximate E[f] ≈ (1/N)Σf(y_i), converges by law of large numbers
- Log-probabilities: three properties — products→sums (prevents underflow), monotonic (preserves ranking), gradient 1/P (scales inversely)
- Log-ratio: log(π(y)/π_ref(y)) — positive means policy gives MORE probability than reference
- Cross-entropy loss -log P is the same as negative log-probability (known since Lesson 3)
- RLHF objective fully readable: max_π E[R(y)] - β·KL[π || π_ref]

## Key connections made
- Softmax (Lesson 2) → formal probability distribution
- Cross-entropy loss -log P (Lesson 3) → negative log-probability
- Text generation loop (Lesson 2) → sampling from a policy y ~ π(·|x)
- All four probability tools appear in the RLHF objective

## Status: MASTERED
User confirmed completion of lesson 4.
Unlocks: Lesson 5 — What is reinforcement learning?
