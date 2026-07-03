# Lesson 5 started — what is reinforcement learning?

## Lesson scope
The six core RL terms (agent, state, action, reward, policy, return), the RL objective,
and the mapping from general RL to the RLHF setting for language models.

## Key concepts introduced
- **Agent:** the decision-maker — in RLHF, the language model.
- **Environment:** everything else — in RLHF, the reward model + prompt dataset.
- **State $s_t$:** what the agent observes — prompt + tokens generated so far.
- **Action $a_t$:** what the agent does — choosing the next token from the vocabulary.
- **Reward $r_t$:** feedback from the environment — reward model score (sparse, only at end).
- **Policy $\pi(a|s)$:** probability distribution over actions given state — the softmax output.
- **Episode $\tau$:** one complete prompt → response sequence.
- **Return $G_0$:** total reward — $\sum \gamma^t r_t$; with $\gamma=1$ and sparse reward, equals final reward.
- **Discounted return:** $G_t = \sum \gamma^k r_{t+k}$ — RLHF uses $\gamma=1$ (no discounting).
- **RL objective:** $\max_\pi \mathbb{E}_{\tau \sim \pi}[G_0]$ — maximize expected return.
- **MDP (going deeper):** $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ — the formal RL framework.
- **Markov property:** future depends only on current state, not history.
- **Trajectory probability:** $P(\tau|\pi) = \rho(s_0) \prod \pi(a_t|s_t) P(s_{t+1}|s_t,a_t)$.
- **RLHF simplifications:** deterministic transitions, sparse reward, $\gamma=1$.
- **Stochastic vs deterministic policy:** stochastic enables exploration, essential for RL training.

## Interactive elements
- RL loop simulator: step through a language model episode token by token, see state grow, observe sparse reward at end, compute return.

## Mastery check design
- Rung 1 (Recall): Define six RL terms + state RL objective.
- Rung 2 (Apply): Map a chatbot scenario onto the RL framework — states, actions, reward sequence, return, log-ratio.
- Rung 3 (Transfer): Explain why stochastic policy is essential — exploration argument.

## Spaced recall questions seeded
SR1: Six RL terms + RL objective in symbols.
SR2: Three RLHF simplifications of the general MDP.
SR3: Why stochastic policy is required for RL training.

## Bridge to next lesson
Lesson 5b: CAPSTONE — Read & write microGPT from scratch. Proves ownership of Phase 0.
