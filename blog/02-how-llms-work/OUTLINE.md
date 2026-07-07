# Post 2: How LLMs Work

**Goal**: The reader follows one name ("sam") through the entire transformer pipeline — from raw letters to a probability distribution over the next token. By the end they understand every piece.

**Target length**: ~5,000-6,000 words (the big one — but one continuous story)

**Source**: blog-1.md sections 2-9 + unwritten sections 8-10

**Running example**: The names dataset + "sam" traced through every step.

---

## Structure

### 1. Setup (~200 words)
- "In post 1 we saw that LLMs predict the next token. Now let's see HOW."
- The roadmap image: tokens → embeddings → position → transformer blocks → logits → sample
- "We'll trace the name 'sam' through every step"

### 2. Tokenization (~400 words)
- Models understand numbers, not letters
- 26 letters + BOS = 27 tokens
- "sid" → [19, 8, 3]
- Real LLMs use subword tokenization (50k+ vocab). Mention why — but stay on the names example
- Source: blog-1.md section 2

### 3. Embeddings — giving tokens meaning (~500 words)
- Token IDs are arbitrary (the barcode/library analogy)
- Embedding matrix: each token gets a vector
- Table: token → embedding vector
- "After training, similar letters end up close together"
- The king - man + woman = queen example (at scale)
- Source: blog-1.md section 3

### 4. Position embeddings — order matters (~400 words)
- The puzzle: "sam" vs "mas" — same letters, different names
- WPE matrix adds position information
- After adding: same letter at different positions → different vectors
- "The dog bit the man" vs "The man bit the dog"
- Xi = wte[token_id] + wpe[position]
- Source: blog-1.md section 3b

### 5. Self-attention — tokens talk to each other (~1,200 words)
This is the longest section. THE core idea.

#### 5a. The intuition (~300 words)
- SAM vs SALT — "a" is identical in both, but next letter differs
- "a" needs to look around at context
- The three parts: Query (what am I looking for?), Key (what do I offer?), Value (what info do I contribute?)
- Source: blog-1.md section 4, "the intuition"

#### 5b. The math (~400 words)
- Q = X · Wq, K = X · Wk, V = X · Wv
- Step 1: dot product of Q and K → score matrix
- Step 2: scale by √dk
- Step 3: softmax → probabilities
- Step 4: weighted sum of Values
- The equation: Attention(Q,K,V) = softmax(Q·K^T / √dk) × V
- Source: blog-1.md section 4, "the math"

#### 5c. Causal masking (~200 words)
- Can't peek ahead — future positions set to -∞
- The masked matrix example
- Source: blog-1.md section 4, "causal masking"

#### 5d. Multi-head attention (~300 words)
- One head = one type of pattern. Language has many patterns
- 12 heads × 64 dims = 768 dims
- Wo mixes them back together
- Source: blog-1.md section 4, "multi-head"

### 6. MLP — reasoning on top of context (~400 words)
- Attention gathered info, MLP processes it
- "river" + "bank" → the MLP figures out it's geography, not finance
- Expand (768 → 3072), non-linearity, compress (3072 → 768)
- ReLU → GELU → SwiGLU evolution (one sentence)
- Source: blog-1.md section 5

### 7. LayerNorm — keeping numbers sane (~400 words)
- Numbers drift after many multiplications
- Softmax breaks with huge numbers, gradients explode
- Normalize to mean 0, std 1
- Formula: LayerNorm(x) = γ ⊙ (x - μ) / (σ + ε) + β
- When: before every attention and MLP block
- Source: blog-1.md section 6

### 8. Residual connections — the information highway (~400 words)
- Without residuals: gradient dies after many layers (0.8^12 = 6.9%, 0.8^96 ≈ 0)
- The fix: add, don't replace. new = old + transformation
- Original information preserved, new context layered on top
- Source: blog-1.md section 7

### 9. The full forward pass + inference (~500 words)
- Put it all together: tokens → embed + position → 12× [LayerNorm → Attention + residual → LayerNorm → MLP + residual] → final LayerNorm → linear head → logits
- Logits: multiply final 768-d vector by (768 × 27) matrix → one score per vocab token
- Softmax → probabilities (THIS is the probability table from post 1)
- The inference loop: feed BOS → get probs → sample → append → repeat until BOS again
- Temperature: controls creativity vs safety
- "This loop is all there is. Every conversation you've had with ChatGPT is this loop running thousands of times."
- Source: blog-1.md sections 8-10 (currently placeholder comments — need to write)

### 10. Closing (~200 words)
- Tie back to post 1: "We started with 'LLMs just predict the next word.' Now you know exactly how."
- Tease post 3: "But how do Wq, Wk, Wv, the embedding vectors — how do all these numbers get their values? That's the training story."

---

## Key decisions
- ONE running example: "sam" goes through every step. Don't switch examples mid-post.
- Show the math but always AFTER the intuition. Never lead with formulas.
- Sections 8-10 in blog-1.md are placeholders — need to write these from scratch using lesson 0003b content
- Compare to 0xkato: we go deeper (actual formulas, actual matrix dims) but skip modern variants (RoPE, GQA, MoE) — those aren't in microGPT and would bloat the post

## Images needed
- [ ] Pipeline overview (tokens → ... → logits)
- [ ] Embedding table
- [ ] Position embedding addition
- [ ] Attention score matrix (with causal mask)
- [ ] Multi-head attention diagram
- [ ] MLP expand/compress
- [ ] Full forward pass diagram
- [ ] The final probability table (callback to post 1)
