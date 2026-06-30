# Lesson 3 mastery check — partial pass

## Rung 1 (Recall): Pass
- Parameters: "floating points in a model" — correct, slightly loose
- Loss: correctly identified it measures wrongness against the next training token;
  correctly explained negative log gives a positive number that decreases as P increases
- Gradient: correctly said it tells you whether increasing/decreasing a parameter changes loss,
  and that it's used to modify parameter values. Slightly imprecise on magnitude/direction.

## Rung 2 (Apply): Fail — targeted re-teach needed

### What was right
- Correctly identified all five steps of the training loop by name and order
- Correctly identified "bones" as the correct next token
- Understood the structure: forward → loss → zero grad → backward → update

### Exact gap
- Loss notation garbled: wrote "-log(bones | cats; theta)" — confused correct token
  with context. Should be: -log P("bones" | "dogs like"; θ) = -log(0.05) ≈ 3.0
- Did not compute or estimate the actual loss value
- Did not state the direction of the gradient for the "bones" weight (it is negative —
  increasing the weight increases P("bones"), which decreases loss)
- Update consequence too vague: "change to new value" — should say the weight for
  "bones" INCREASES (because we subtract a negative gradient)

### Re-teach focus
The specific confusion: knowing "bones" is the correct token but not being able to
trace what happens to the weight — from loss value → gradient direction → weight change.

## Rung 3 (Transfer): Pass
- Correctly identified that forward pass structure and backward/update steps are unchanged
- Correctly identified that the loss now comes from the reward model's score
- Core insight "same loop, different loss" — solid

## Rung 2 re-test: Pass

Fresh variant used: "rain makes the ground wet", model gives "ground" 3%.
- Loss: correctly computed as -log(0.03) ≈ 3.51 on first re-attempt
- Gradient direction: initially skipped — required one more targeted push
- Final reasoning chain (all correct):
    increase w → P("ground") up → loss down → gradient negative → w increases after update
- The key insight landed: the gradient's sign determines which way the weight moves.

## Status: MASTERED
All three rungs passed. Lesson 3 complete.
Unlocks: Lesson 3b — inside the transformer (embeddings, attention, MLP; lines 73–143 of microgpt.py).
