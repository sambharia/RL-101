# Post 3: How LLMs Learn

**Goal**: The reader understands how all the weights (embeddings, attention matrices, MLP) get their values through training.

**Status**: Planned — write after posts 1 and 2 are published.

**Source material**: rlhf-learning/lessons/0003-how-models-learn.html, learning record 0010.

---

## Rough structure
1. The problem: we have a model with random weights. It predicts garbage. How do we fix it?
2. Measuring wrongness: the loss function (cross-entropy)
3. Which direction to fix? The gradient (the "downhill" idea)
4. The efficiency trick: backpropagation
5. The training loop: forward pass → loss → backward pass → update weights → repeat
6. Batch size, learning rate, Adam — the practical knobs
7. "This is how Wq, Wk, Wv, wte, wpe — everything from post 2 — gets its values"
