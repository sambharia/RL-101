# Lesson 4 started — probability you actually need

## Lesson scope
Four probability tools essential for reading RLHF equations: probability distributions,
expectation, sampling, and log-probabilities.

## Key concepts introduced
- **Probability distribution:** two rules — all values ≥ 0, sum = 1. Softmax guarantees both.
- **Notation:** $P(x)$, $\pi(y \mid x)$ ("probability of $y$ given $x$"), $\pi(\cdot \mid x)$ (whole distribution).
- **Policy as distribution:** $\pi$ is a distribution over actions/tokens — a language model's next-token prediction IS a policy.
- **Expectation:** $\mathbb{E}_{y \sim \pi}[f(y)] = \sum_y \pi(y) \cdot f(y)$ — weighted average where weights are probabilities.
- **Sampling:** $y \sim \pi$ — drawing from a distribution. Text generation = sampling from a policy.
- **Monte Carlo estimation:** approximate $\mathbb{E}[f(y)] \approx \frac{1}{N}\sum_{i=1}^N f(y_i)$ — converges as $N$ grows.
- **Log-probability:** three key properties — products→sums (prevents underflow), monotonic (preserves ranking), gradient $1/P$ (scales inversely with probability).
- **Log-ratio:** $\log \frac{\pi(y)}{\pi_\text{ref}(y)}$ — positive if policy gives more probability than reference. Building block of KL divergence.
- **RLHF objective preview:** $\max_\pi \mathbb{E}_{y \sim \pi}[R(y)] - \beta \text{KL}[\pi \| \pi_\text{ref}]$ — every symbol is probability.

## Interactive elements
- Expected value calculator: adjust probabilities of 3 responses, see E[R] change in real time.
- Sampling simulator: draw samples, watch sample average converge to true expectation (8.6).

## Mastery check design
- Rung 1 (Recall): State the two distribution rules, expectation formula, and why log P is used.
- Rung 2 (Apply): Compute E[R] for a 4-option distribution, compute Monte Carlo estimate from 4 samples, compute a log-ratio and interpret its sign.
- Rung 3 (Transfer): Explain why a degenerate policy (all mass on best response) would blow up the KL term in the RLHF objective.

## Spaced recall questions seeded
SR1: Expectation formula with plain-English translation.
SR2: Why RLHF must sample instead of computing exact expectations.
SR3: Three properties of log that make log-probs useful.

## Bridge to next lesson
Lesson 5: What is reinforcement learning? (agent, state, action, reward, policy, return).
Now that probability tools are in place, we can formalize the RL framework.
