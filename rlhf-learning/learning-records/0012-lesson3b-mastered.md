# Lesson 3b mastered — inside the transformer

## Concepts covered
- Token embeddings (wte): vocabulary-size lookup table, token ID → 768-d vector
- Positional embeddings (wpe): position → 768-d vector, added element-wise
- Self-attention: Q/K/V projections, dot-product scores, softmax → weighted sum of Values
- Multi-head attention: 12 heads × 64 dims each, concatenate → W_O projection
- Causal masking: future positions set to −∞ → zero attention weight
- MLP sub-layer: expand 768→3072, GELU nonlinearity, compress 3072→768
- LayerNorm: normalize to mean 0, std 1 before each sub-layer
- Residual connections: x ← x + f(LN(x)), gradient highway via ∂/∂x = 1 + …
- Full forward pass: embed → 12 blocks → final LN → lm_head → logits (T, 50257)

## Status: MASTERED
User confirmed completion of lesson 3b.
Unlocks: Lesson 4 — Probability you actually need.
