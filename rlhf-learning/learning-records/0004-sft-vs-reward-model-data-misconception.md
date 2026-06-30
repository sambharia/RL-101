# Misconception: conflating SFT demonstration data with reward-model data

In the Lesson 1 Mastery Check, the learner correctly said a reward model is trained from
humans *picking* the better answer (Rung 3, passed), but in Rung 2 routed *written correct
answers* into "train a reward model." That data is demonstration data → it trains **SFT**,
not the reward model. Reward models need **comparison/preference** data.

The learner also did not name SFT as the required first step or articulate *why format must
precede quality* (the base model rambles and can't answer at all; RLHF can only rank/polish
existing answers, so SFT must come first).

Status: Rung 1 and Rung 3 passed; Rung 2 failed. Lesson 1 NOT yet complete — re-testing
Rung 2 with a fresh variant. Predicts future stumbling in Ch.4 (SFT) vs Ch.5 (reward
models): reinforce the data-type mapping (demonstrations → SFT; comparisons → reward model).
