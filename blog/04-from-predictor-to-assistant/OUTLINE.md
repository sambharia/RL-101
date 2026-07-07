# Post 4: From Text Predictor to Assistant

**Goal**: The reader understands how a raw text-predicting model becomes ChatGPT — the three-step RLHF pipeline.

**Status**: Planned — write after post 3.

**Source material**: rlhf-learning/lessons/0006 (SFT, reward model, RL pipeline) and 0007 (RLHF objective, KL divergence).

---

## Rough structure
1. The gap: a base model just continues text. It doesn't follow instructions or refuse harmful requests.
2. Step 1: Supervised Fine-Tuning (SFT) — teach it the format
3. Step 2: Train a Reward Model — teach a judge what "good" looks like
4. Step 3: RL optimization — let the model improve against the judge
5. The KL penalty: why the model can't just hack the reward
6. The full picture: pretraining → SFT → reward model → RLHF
