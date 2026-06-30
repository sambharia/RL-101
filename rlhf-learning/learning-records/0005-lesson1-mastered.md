# Lesson 1 mastered — big picture of RLHF

All three Mastery Check rungs cleared.

Rung 1 (Recall): base model defined correctly; two RLHF steps named correctly.
Rung 2 (Apply): correctly matched demonstrations→SFT and comparisons→reward model;
correctly explained why skipping SFT breaks RLHF ("comparing two trash answers is noise").
Rung 3 (Explain/Transfer): correctly identified that comparison-based signal can capture
qualities humans recognize but cannot write down.

One important misconception corrected along the way (LR-0004): initially routed
demonstration data to the reward model instead of SFT. Now solid. Also clarified
SFT vs few-shot prompting — SFT changes weights via gradient descent; context window
examples do not update weights at all. That distinction was unprompted and shows
genuine curiosity about mechanism.

Unlocks: Lesson 2 — What a language model really is (tokens, next-token prediction,
the probability distribution equation taught symbol by symbol).
