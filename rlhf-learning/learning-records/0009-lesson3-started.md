# Lesson 3 started — how models learn

## Lesson scope
Parameters, loss (cross-entropy), gradient descent, backpropagation (the Value class,
microgpt.py lines 29–71), and the training loop (lines 150–183). Adam briefly introduced.

## Key concepts introduced
- Parameters (θ): the floating-point numbers that define the model
- Cross-entropy loss: L = -log P(y_correct | context; θ)
- Gradient ∂L/∂θ_i: the rate of change of loss w.r.t. one parameter
- Gradient descent update: θ ← θ - η ∂L/∂θ
- Backpropagation: chain rule applied through a computation graph via the Value class
- The five-step training loop: forward → loss → zero grad → backward → update
- Adam: adds momentum (first moment) and adaptive per-parameter learning rate (second moment)

## Spaced recall questions opened
Q1: Output of a language model at each step (distribution over vocab).
Q2: Autoregressive generation loop.

## Mastery check design
- Rung 1 (Recall): define parameters, loss, gradient
- Rung 2 (Apply): trace a full training step on "dogs like bones" with concrete numbers
- Rung 3 (Transfer): explain how RLHF RL fine-tuning uses the same training loop with a
  different loss function (reward model score instead of cross-entropy)

## Bridge to next lesson
Lesson 3b: the gpt() forward pass — what happens inside the transformer (embeddings, attention,
MLP). Lines 73–143 of microgpt.py.
