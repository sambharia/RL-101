# Lesson 2 mastered — what a language model really is

## All three rungs cleared

**Rung 1 (Recall):**
- Token: subword chunk of text from a fixed vocabulary; each maps to a unique integer ID.
  Initial answer conflated token with its integer ID ("numerical representation of words")
  — corrected through dialogue.
- Model output: a probability distribution over the full vocabulary (~100k numbers, sum = 1).
- Autoregression: after sampling a token, append it to the context and feed the whole thing
  back in as input for the next step.

**Rung 2 (Apply):**
- Initial attempt described one step without showing the context growing across 3 steps,
  and used "highest probability token" (greedy shorthand) rather than "sampled token".
- After re-teach: traced 2 steps cleanly for "Paris is the capital":
    Step 1: input = [Paris, is, the, capital] → distribution → sample "of" → append
    Step 2: input = [Paris, is, the, capital, of] → distribution → sample "France" → append
- Growing context correctly demonstrated.

**Rung 3 (Transfer):**
- Clean, precise, unprompted:
  LM → probability distribution (100k numbers, sum = 1)
  RM → scalar representation of preference

## Key corrections along the way
- Token ≠ "numerical representation of words": token is the subword chunk; the integer ID
  is the number. A word can map to multiple tokens.
- Model boundary clarified: tokenization is OUTSIDE the model; the transformer (gpt() in
  microgpt) takes token IDs and returns logits; softmax converts logits to probabilities.
- Reward model scores one (prompt + completion) pair → one scalar. Does not compare two
  answers simultaneously at inference time (comparison is in training data, not inference).
- Beam search explained as bonus context: chain rule is why greedy ≠ globally optimal.

## microgpt connection
Lesson 2 covers lines 185–199 of microgpt.py (the inference loop).
The gpt() function (lines 107–143) was treated as a black box — unlocks in Lesson 0003b.

## Unlocks
Lesson 3: How models learn — parameters, loss, gradient descent, the training loop.
This covers microgpt.py lines 29–71 (the Value / autograd class) and lines 150–183
(the training loop: forward → loss → backward → Adam update).
