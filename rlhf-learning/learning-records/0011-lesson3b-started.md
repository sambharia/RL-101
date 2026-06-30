# Lesson 3b started — inside the transformer

## Lesson scope
The gpt() forward pass: token embeddings, positional embeddings, self-attention (Q/K/V),
multi-head attention, causal masking, MLP sub-layer, residual connections, LayerNorm.
Covers microgpt.py lines 73–143.

## Key concepts introduced
- **Token embedding (wte):** $(V, d)$ lookup table; token ID → 768-d vector; learned by backprop.
- **Positional embedding (wpe):** $(T_\text{max}, d)$ lookup; position $i$ → 768-d vector; added element-wise.
- **Input to blocks:** $X = \text{wte}[\text{ids}] + \text{wpe}[\text{positions}]$, shape $(T, 768)$.
- **Self-attention:** Q, K, V projections; score = $QK^\top / \sqrt{d_k}$; causal mask; softmax → weights; output = weighted sum of V.
- **Multi-head attention:** 12 heads with $d_k = 64$ each; outputs concatenated → $(T, 768)$ via $W_O$.
- **Causal mask:** future positions set to $-\infty$ before softmax → zero weight.
- **MLP:** per-token, $768 \to 3072 \to 768$; GELU nonlinearity.
- **Residual connections:** $x \leftarrow x + f(\text{LN}(x))$; gradient highway $\partial/\partial x = 1 + \ldots$.
- **LayerNorm:** normalizes before attention and MLP.
- **Full forward pass:** embed → 12 blocks → final LN → lm_head → logits $(T, 50257)$.

## Interactive elements
- Attention heatmap: 6 tokens ("Paris is the capital of France"), click any query token to see causal attention weights.
- Transformer block diagram: visual flow showing LN → Attention → ⊕ → LN → MLP → ⊕.

## Mastery check design
- Rung 1 (Recall): Name the four stages of gpt() forward pass with shapes (6 tokens, GPT-2).
- Rung 2 (Apply): "removed" in two different sentence contexts — how does attention produce different representations? Why can't position 0 see position 5?
- Rung 3 (Transfer): Explain precisely why removing all residual connections would break training, not just slow it.

## Spaced recall questions seeded
SR1: Attention in one sentence — what goes in, what comes out, what is computed.
SR2: What specific problem does the residual connection solve and what is the mechanism.

## Bridge to next lesson
Lesson 4: Probability you actually need — distributions, expectation, sampling, log-probs.
These are the math tools used constantly in the RLHF objective and reward model training.
