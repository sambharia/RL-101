# RLHF Glossary

The shared vocabulary for this course. Once a term is defined here, every lesson uses
it consistently. Grows as we go.

- **RLHF (Reinforcement Learning from Human Feedback)** — a method for steering an AI
  model using human judgments of which outputs are better, rather than a hand-written
  rule for what "correct" means.
- **Base model / pretrained model** — a language model fresh out of large-scale
  next-token-prediction training. It *completes text* but does not reliably answer
  questions in a helpful assistant format.
- **Post-training** — everything done to a base model after pretraining to make it
  useful: instruction tuning, RLHF, and RL with verifiable rewards.
- **SFT / Instruction fine-tuning (IFT)** — training on curated question→answer
  examples so the model learns to respond in the assistant format. (Per-token learning.)
- **Preference fine-tuning (PreFT)** — aligning the model to human preferences; RLHF
  is the dominant method here. (Response-level, *contrastive* learning.)
- **Reward model (RM)** — a model trained on human preferences that outputs a single
  number (a scalar) scoring how "good" a piece of text is. Used as the optimization
  target during RL.
- **Policy** — the model we are training, viewed as the thing that chooses actions
  (here, the next tokens) given a state (the text so far).
- **RLVR (RL with Verifiable Rewards)** — RL where the reward comes from a checkable
  signal (e.g. "is this math answer correct?") instead of a learned reward model.
- **Elicitation theory** — the idea that post-training mostly *draws out* abilities
  already latent in the base model, rather than teaching brand-new knowledge.
- **Contrastive loss** — a training signal computed by *comparing* examples (e.g. this
  response is better than that one), not by scoring each example on its own.
