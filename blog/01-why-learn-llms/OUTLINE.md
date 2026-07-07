# Post 1: Why You Should Dig Into How LLMs Work

**Goal**: Hook the reader. By the end they should feel "I need to understand this" and have one concrete aha — LLMs are probability machines predicting one token at a time.

**Target length**: ~1,500 words (short, punchy, opinionated)

**Source**: blog-1.md intro + sections 1-2

---

## Structure

### 1. Personal hook (~300 words)
- Your GPT-2 story (2020, Davinci playground, stochastic parrot era)
- "I've been in the AI industry since the start but never understood how it actually works"
- The procrastination admission — relatable, honest

### 2. Why you need to know this (~400 words)
- The car analogy (airplane vs car — you drive this every day)
- If you build on top of this tech, you need to know what it can and can't do
- Knowing the how's and why's keeps you on the frontier
- Jobs that remain vs get automated — you can only reason about this if you understand the tech

### 3. The aha moment: it's just predicting the next word (~500 words)
- "the capital of India is ___" → probability table
- IMAGE: the probability table diagram (already exists)
- Why is this hard? Language is not deterministic (gravity example — two valid answers)
- You can't write a logical function for every question
- "The whole of understanding LLMs is understanding how they predict the next word correctly"

### 4. What's coming next (~200 words)
- "In the next post, we'll open the hood and trace how a name like 'sam' travels through a transformer — from letters to probabilities"
- Brief roadmap of the series (2-5 sentence version)

---

## Key decisions
- Keep the personal angle — this is learning in public, not a textbook
- End on the probability table — it's the single image people will remember
- Don't explain tokenization, embeddings, or attention here. Just the WHAT, not the HOW
- Tone: swyx-level opinionated. "You should learn this. Here's why. Here's the one thing to understand."

## Images needed
- [ ] Probability table diagram (exists in blog-1.md as reference)
