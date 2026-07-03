# Lesson 5 mastered — what is reinforcement learning?

## Concepts covered
- Agent (the LLM), environment (reward model + prompt dataset)
- State: prompt + tokens generated so far
- Action: choosing the next token from the vocabulary (~50,257 options)
- Reward: reward model score, sparse (only at end of episode)
- Policy π(a|s): probability distribution over actions given a state (softmax output)
- Return G₀ = Σ γᵗrₜ — total discounted reward; with γ=1 and sparse reward, equals final reward
- Episode: one prompt → complete response
- RL objective: max_π E[G₀] — find the policy that maximizes expected return
- Discounted return: γ < 1 for long-horizon problems; γ=1 for RLHF (short episodes)
- MDP: (S, A, P, R, γ) — formal RL framework; Markov property
- RLHF simplifications: deterministic transitions, sparse reward, γ=1
- Stochastic policy essential for exploration — greedy gives no variation, no learning signal
- Log-ratio: log(π(y)/π_ref(y)) — positive = training increased probability, negative = decreased

## Mastery check results
- Rung 1: Partial — policy definition initially wrong (confused with reward distribution), corrected
- Rung 2: Initially failed — sparse reward misunderstood (computed 8.5×3 instead of 0+0+8.5), log-ratio not attempted. Re-taught both concepts, understood after explanation.
- Rung 3: Passed — correctly explained why stochastic policy enables exploration

## Key re-teaching moments
- Sparse reward: rewards are [0, 0, ..., 0, R], not R at every step
- Log-ratio: new_prob / old_prob, take log, read the sign (positive = more likely after training)
- Policy corrected: distribution over actions given state, not distribution of rewards

## Status: MASTERED
User confirmed understanding after re-teaching.
Unlocks: Lesson 5b — CAPSTONE: Read & write microGPT from scratch.
