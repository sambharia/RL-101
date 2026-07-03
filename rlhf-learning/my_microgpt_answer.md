Designing a LLM from scratch — microGPT pseudocode

Sections:
A. Data & Tokenizer
B. GPT forward pass
C. Training loop
D. Inference loop


==========================
A. DATA & TOKENIZER

1. We have a dataset of names from GitHub (one name per line)
2. We create an array of names
3. We find all unique characters in the data (not always 26 — could include uppercase, hyphens, etc.)
4. Each unique character becomes a token with an integer ID
5. Add one special token: BOS (beginning of sequence) — used to mark start and end
6. vocab_size = number of unique characters + 1 (for BOS)
7. Now we can convert any name to a list of numbers and back

Example:
  unique chars: a, b, c, ..., z → IDs 0–25
  BOS → ID 26
  "cat" → [2, 0, 19]


==========================
B. GPT FORWARD PASS

--- Parameter setup ---

All weights start as random numbers.

Embedding matrices:
  wte = [vocab_size × embedding_dim]     e.g. [27 × 16]
        one row per token — "what does this token mean?"
  wpe = [max_positions × embedding_dim]  e.g. [16 × 16]
        one row per position — "where in the sequence am I?"
        max_positions = longest name we want to support

Attention weights (for each layer):
  W_q = [16 × 16]    query weights
  W_k = [16 × 16]    key weights
  W_v = [16 × 16]    value weights
  W_o = [16 × 16]    output projection

MLP weights (for each layer):
  fc1 = [64 × 16]    expand (16 → 64)
  fc2 = [16 × 64]    compress (64 → 16)

Final projection:
  lm_head = [vocab_size × embedding_dim]  e.g. [27 × 16]
            turns transformer output into one score per token


--- The forward pass (one token at a time) ---

1.  x = wte[token_id] + wpe[position]
    Pick one row from each, add them. Result: vector of 16 numbers.

2.  RMSNorm(x)
    Normalize the vector (divide by root-mean-square)

--- Attention block ---

3.  Save x as x_residual (for the residual connection later)

4.  RMSNorm(x)

5.  Q = x × W_q → 16 numbers (query: "what am I looking for?")
    K = x × W_k → 16 numbers (key: "what do I contain?")
    V = x × W_v → 16 numbers (value: "what information do I carry?")

    Save K and V in a cache (so future tokens can attend to this one)

6.  Attention (with multi-head):
    Split Q, K, V into heads (e.g. 4 heads of 4 numbers each)
    For each head:
      scores = Q_head dot each saved K_head / sqrt(head_dim)
      weights = softmax(scores) → probabilities that sum to 1
      head_output = weighted sum of V_heads using those weights

    Concatenate all head outputs → back to 16 numbers

7.  Multiply concatenated output by W_o → 16 numbers

8.  x = x_residual + attention_output   ← residual connection (gradient highway)

--- MLP block ---

9.  Save x as x_residual

10. RMSNorm(x)

11. MLP:
    expand:   x × fc1 [64 × 16] → 64 numbers
    ReLU:     turn all negatives to 0, keep positives
    compress: result × fc2 [16 × 64] → back to 16 numbers

12. x = x_residual + mlp_output   ← residual connection

--- Steps 3–12 are ONE transformer block. Repeat for each layer. ---

13. logits = x × lm_head [27 × 16] → 27 numbers (one score per token in vocab)

    These logits are the raw output. Softmax turns them into probabilities.


==========================
C. TRAINING LOOP

--- Value class (autograd) ---

Every number in the model is a Value — a number that remembers how it was made.
When you do math (add, multiply, log, etc.), the Value records:
  - its data (the actual number)
  - its children (which Values were used to make it)
  - the local derivative (how it changes when each child changes)

backward() walks the computation graph in reverse (topological sort) and
computes a gradient for every single Value using the chain rule:
  my_gradient = parent's_gradient × my_local_derivative

Key derivatives:
  add(a, b):  both children get gradient 1
  mul(a, b):  a's gradient = b's value, b's gradient = a's value
  -log(x):    gradient = -1/x
  relu(x):    gradient = 1 if x > 0, else 0
  exp(x):     gradient = exp(x)


--- The loop ---

For each training step (repeat 1000 times):

  1. Pick a name from the dataset
     Tokenize it, surround with BOS: [BOS, c, a, t, BOS]

  2. For each position in the sequence, run one forward pass:
       token=BOS, position=0 → gpt() → softmax → compare with correct answer "c"
       token="c", position=1 → gpt() → softmax → compare with correct answer "a"
       token="a", position=2 → gpt() → softmax → compare with correct answer "t"
       token="t", position=3 → gpt() → softmax → compare with correct answer BOS

     At each position:
       - run gpt(token, position) → get logits (27 numbers)
       - softmax(logits) → probabilities
       - loss = -log(probability of the CORRECT next token)
         This is where we compare: we grab the correct token's probability

  3. Average all position losses into one final loss

  4. loss.backward()
     Gradients flow automatically to EVERY parameter:
     wte, wpe, W_q, W_k, W_v, W_o, fc1, fc2, lm_head — ALL of them
     You don't pick which ones. The computation graph connects them all.

  5. Update every parameter (all 4,192 numbers):
       param = param - learning_rate × gradient

     Why minus? Gradient points uphill (toward higher loss).
     We want to go downhill (toward lower loss). So go opposite direction.

     (microGPT uses Adam optimizer — fancier version of this, same idea)

  6. Set all gradients back to 0 (clean slate for next step)

After 1000 steps: model has seen many names, adjusted all weights,
and now assigns high probability to correct next characters.


==========================
D. INFERENCE LOOP (generating new names)

1. Start with BOS token at position 0

2. Loop:
     run token through gpt(token, position) → get logits (27 numbers)
     divide logits by temperature
       temperature < 1 → more confident picks (e.g. 0.5)
       temperature > 1 → more random picks
     apply softmax → get probabilities
     SAMPLE next token using probabilities as weights (stochastic, not greedy)
     if sampled token = BOS → stop (end of name)
     otherwise → use sampled token as input, increment position, continue loop

3. Convert token IDs back to characters → you have a new name!

Example output: "Emmaly", "Jarith", "Kona" — names that don't exist
but look real because the model learned the patterns.
