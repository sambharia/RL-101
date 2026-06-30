# Teaching Notes (preferences & working memory)

## Learner profile
- Engineer (BITS Pilani), 99%ile JEE Mains — strong reasoning, fast learner.
- Math is strong-but-rusty: solid on probability basics; has forgotten calculus/
  integration. Refresh specific math *just in time*, don't pre-teach a math course.
- Can read/write basic Python; no numpy/pytorch yet. Keep code light and illustrative.

## How they want to be taught
- **Intuition first, then FULL mathematical rigor.** Land the mental model, then derive
  the real equations — don't just name them. They explicitly want technical command of the
  math (objectives, gradients, derivations), not word-pictures alone. Every lesson gets a
  "Going Deeper: the mathematics" layer with LaTeX (MathJax in lessons).
- **Push the difficulty.** They asked for harder questions. Quizzes/teach-backs should
  challenge, include at least one genuinely hard question, and probe gaps, not just recall.
- Time is not a constraint; optimize for real understanding and retention, in the fastes way possible
- **Goal = teach it back.** End state is a "RL for Beginners" blog series. Make
  "write the blog paragraph" the core feedback loop and primary test.
- Wants to read papers and slides confidently by the end.

## The test: "Mastery Check" (per lesson, this is the gate)
Three rungs, graded in chat against a clear bar:
1. **Recall** — state the core precisely (necessary, not sufficient).
2. **Apply** — use the concept on a NEW concrete scenario. *(must pass)*
3. **Explain/Transfer** — give the causal "why", or predict an outcome. *(must pass)*
Pass = Rung 2 AND Rung 3 correct. Fail → name the exact gap, do a short targeted
re-teach, then re-test with a FRESH variant of the missed rung. No advancing until solid.
Rationale: application + transfer detect true understanding; recall alone can be rote.
An in-lesson MCQ self-check stays as low-stakes warm-up (instant feedback), NOT the gate.

The **blog paragraph is the mission deliverable**, written after a concept is passed and
collected per phase — it is the output/goal, not the gating test.

## Other scientific methods in use
- **Retrieval practice**: recall from memory, not recognition.
- **Spacing**: each lesson opens with quick recall of prior material.
- **Interleaving**: mix related concepts in later checks once enough is covered.
- **Desirable difficulty**: challenge sits just past current ability (ZPD); push hard.

## Math timing
Teach math when the concept needs it, not before. When introduced, explain EVERY symbol
slowly until the equation is obvious. No front-loading walls of equations.

## Workspace
- Lives at `Documents/RL/rlhf-learning/` (sibling to the `rlhf-book` repo) to keep
  the book's git history clean. Book chapters referenced as the primary text.

## Lesson structure preference (updated after Lesson 3 feedback)

### When "algorithm first" works (Lesson 2 pattern)
Show the full mechanism upfront ONLY when the terms in it are already intuitive enough
to serve as a skeleton. The Lesson 2 pseudocode (`tokenize → softmax → sample → append`)
worked because each word was roughly guessable. The reader had a skeleton to hang explanation on.

### When to use "problem first" (Feynman pattern)
If the algorithm uses terms that ARE the things being taught (e.g., `loss.backward()`,
`p.grad`, `gradient descent` in Lesson 3), showing it first creates noise, not a skeleton.
Instead: start with the problem, let the concept arrive as the answer.

**The Feynman structure:**
1. Start with the **problem** — not the answer, not the concept.
2. The concept arrives as the **inevitable answer** to the problem.
3. The equation arrives when it's the only precise way to answer something we're already stuck on.
4. Make the **surprising thing explicit** — what's remarkable, counterintuitive, or easy to miss.
5. Show the **full mechanism at the end**, as synthesis — not as the opening.

### The "tree unfolding" preference (explicit feedback, Lesson 3)
The learner wants information to unfold like a tree: root → branches, not full tree shown
then explained. Each branch should grow naturally from the previous one.
The full picture arrives at the end, not the start.

### Always
- Math woven inline at the moment it answers a question, explained symbol by symbol.
- Each lesson self-contained.
- No bolted-on "Going Deeper" sections — math is part of the main narrative.

## Open lesson files
- macOS: `open lessons/0001-the-big-picture.html`
