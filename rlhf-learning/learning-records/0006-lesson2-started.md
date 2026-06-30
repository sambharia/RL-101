# Lesson 2 started — tokens, next-token prediction, autoregression

## Scope
Lesson 2 covers the three foundational mechanics of a language model:
1. **Tokens** — vocabulary of ~50k–100k subword chunks; text is a list of integer IDs.
2. **Next-token prediction** — the model outputs P(y_t | y_{<t}), a full probability distribution over the vocabulary.
3. **Autoregression** — generation as a loop: sample from the distribution, append to context, repeat.

## Math introduced (just-in-time)
- Conditional probability notation: P(y_t | y_1, ..., y_{t-1})
- Chain rule of probability applied to sequences: P(y_{1:T}) = ∏ P(y_t | y_{<t})
- Log-probabilities: log P(y_{1:T}) = Σ log P(y_t | y_{<t}); product → sum
- Softmax: z_i → exp(z_i)/Σ exp(z_j); how logits become a valid distribution
- Temperature scaling: z_i/τ before softmax; τ→0 greedy, τ>1 random

## Hard quiz question included
Q3 probes the chain-rule insight that greedy is locally optimal but not globally:
maximising each P(y_t | y_{<t}) independently does not maximise the product.
This is a common gap; watch for whether learner grasps it on first pass.

## Mastery Check set
- Rung 2 (Apply): walk through 3 decoding steps precisely for a given prompt.
- Rung 3 (Transfer): contrast what a language model vs a reward model computes —
  shape and meaning of output. Probes whether LM → distribution is genuinely understood
  vs just remembered as a fact.

## Status
Lesson started; Mastery Check not yet attempted.
