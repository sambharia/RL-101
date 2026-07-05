# Lesson 6 mastered — the three-step RLHF pipeline

## Date: 2026-07-05

## Concepts covered
- The full post-training pipeline: SFT -> Reward Model -> RL
- Pre-training vs post-training: predicting text vs becoming an assistant
- Step 1 (SFT): same cross-entropy loss as pre-training, but on conversation-format data
- Step 2 (Reward Model): trained on human preference comparisons (winner/loser pairs), outputs a single scalar score
- Reward model architecture: same transformer as LM, but final layer replaced (vocab_size logits -> 1 scalar)
- Reward model as proxy for human judgment: fast enough to run inside training loop
- Step 3 (RL): generate responses, score with RM, update policy to maximize E[R] - beta*KL
- KL penalty: prevents reward hacking / Goodhart's Law — keeps policy close to SFT model
- Variations: DPO, RLAIF, rejection sampling, RLVR
- Maps to RLHF Book Chapters 1-3

## Mastery check results
- Rung 1: PASS — named all three steps with inputs, outputs, and training signals
- Rung 2: PASS — applied pipeline to AI writing assistant scenario; correctly identified KL penalty would suppress degenerate repetitive output
- Rung 3: PASS — explained what RL can do that SFT cannot: RL learns preferences between responses (relative quality), while SFT only copies individual examples (absolute imitation)

## Key connections to prior lessons
- SFT loss is the same -log P from Lessons 2-3 and microGPT
- Reward model architecture: replace lm_head [vocab x emb] with reward_head [1 x emb]
- RL objective E[R] - beta*KL uses all four probability tools from Lesson 4
- RL framework (agent, policy, reward) from Lesson 5 maps directly to RLHF

## Status: MASTERED
All 3 rungs passed on first attempt.
Unlocks: Lesson 7 — The RLHF Objective (deeper dive into the math).
