# Lesson 5b mastered — CAPSTONE: rebuild microGPT

## Format
Pseudocode rebuild instead of raw Python — adapted for user's coding level.
User wrote pseudocode for all 7 blocks, then worked through detailed math
examples with teacher guidance to fill gaps.

## Seven blocks identified
1. Data & Tokenizer
2. Value class (autograd)
3. Parameter initialization
4. Helper functions (linear, softmax, rmsnorm)
5. GPT forward pass
6. Training loop
7. Inference loop

## Key learning moments during the capstone
- Embedding dimensions: wte is [vocab_size × emb_dim], wpe is [max_positions × emb_dim]
- Row lookup vs matrix multiply: wte[token_id] picks one row, not a full matrix operation
- Multi-head attention: split Q,K,V into heads, run attention independently, concatenate
- MLP: expand → ReLU → compress, with matrix dimensions that follow [m×n] × [n×p] rule
- Residual connections: x = x + block_output (after both attention and MLP)
- Value class: a number that remembers how it was made; backward = chain rule on the graph
- Full backward pass traced with real math: loss → -log → softmax → multiply → add
- Sparse reward vs per-token loss: loss is computed at each position, not multiplied
- backward() only computes gradients; the update step (param -= lr × grad) changes params
- Log-ratio explained with plain formatting for terminal readability

## Mastery check results
- Rung 1: PASS — listed all 7 blocks correctly
- Rung 2: PASS — traced training step end-to-end, knew forward/loss/backward/update chain
- Rung 3: PASS — correctly identified that RLHF replaces the supervised loss with reward model score

## Deliverable
Pseudocode file: rlhf-learning/my_microgpt_answer.md

## Status: MASTERED
Phase 0 complete. All foundations owned.
Unlocks: Phase 1 — The RLHF big picture (Lessons 6–7).
