# You Should Probably Dig Into How LLMs Work

## Introduction

ChatGPT got released in late 2023 and since then it would be an understatement to say that this technology is taking the world by storm. It is the fastest growing consumer product ever to be created. Think about it: it’s bigger than the internet, bigger than the smartphone and computers. (just look at the exponential)

I have been part of the AI industry right from the start when I got access to GPT-2 in early 2020 (you had to sign up for OpenAI’s research program and they had a playground where you could use models like Davinci, play with model params and generate text). Back then I was doing all sorts of random things with Davinci: like asking it what does it think about humans? If it had to choose between humans and machines what would it choose for an apocalypse and more. I also tried using it to generate an essay for my friend’s college essay. The models back then were more like a stochastic parrot than the thinking machines now.

While I did not have a chance to study AI/ML and after being on the application layer for AI, starting from ChatGPT wrappers to working with a team building LLM gateways processing 1 Trillion tokens per day, I always procrastinated on learning how LLMs work from scratch. Yes I did watch 3B1B videos and had a decent understanding of how tokens and LLMs work, I did not have my basics clear.

Now after almost years of procrastination I figure it makes sense to understand the biggest technological wave of my lifetime when it’s still young.

### Why do you need to know this?

Well for most technology you can live without knowing how it works. Example airplanes: I can comfortably travel across the world my entire lifetime without knowing how airplanes work, but take the example of a car: it’s something I use everyday, it makes more sense to learn the basics of cars: how to change a tyre, what does the LED indication on the dashboard mean. If we take the example of technology: being able to understand the technology really well on the ground level after removing all abstractions allows you to see the blindspots, this is particularly useful

If you want to build something on top of this technology it makes sense to have a general heuristic on what this technology is capable of doing.

Knowing the how’s and why’s about a new technology keeps you on the frontier, just to understand and reason across things on what this is capable of doing and not. Thus for the current time it helps you traverse the best path for what jobs will remain and what will get automated.

Now that we are clear on why it makes sense to learn the first principles of LLMs. let’s dig deep.











Read What You Love Until You Love to Read
You should be able to pick up any book in the library and read it

Read what you love until you love to read

Nivi: Before we go and talk about accountability and leverage and judgment, you’ve got a few tweets further down the line that I would put in the category of continuous learning.

They’re essentially, “there is no skill called business. Avoid business magazines and business class, study microeconomics, game theory, psychology, persuasion, ethics, mathematics and computers.”

There’s one other comment that you made in a Periscope that was, “you should be able to pick up any book in the library and read it.” And the last tweet in this category was, “reading is faster than listening, doing is faster than watching.”

Naval: Yeah, the most important tweet on this, I don’t even have in here unfortunately, which is, the foundation of learning is reading. I don’t know a smart person who doesn’t read and read all the time.

And the problem is, what do I read? How do I read? Because for most people it’s a struggle, it’s a chore. So, the most important thing is just to learn how to educate yourself and the way to educate yourself is to develop a love for reading.

So, the tweet that is left out, the one that I was hinting at is, “read what you love until you love to read.” It’s that simple.

Everybody I know who reads a lot loves to read, and they love to read because they read books that they loved. It’s a little bit of a catch-22, but you basically want to start off just reading wherever you are and then keep building up from there until reading becomes a habit. And then eventually, you will just get bored of the simple stuff.

So you may start off reading fiction, then you might graduate to science fiction, then you may graduate to non-fiction, then you may graduate to science, or philosophy, or mathematics or whatever it is, but take your natural path and just read the things that interest you until you kind of understand them. And then you’ll naturally move to the next thing and the next thing and the next thing.

Read the original scientific books in a field

Now, there is an exception to this, which is where I was hinting with what things you actually do want to learn, which is, at some point there’s too much out there to read. Even reading is full of junk.

There are actually things you can read, especially early on, that will program your brain a certain way, and then later things that you read, you will decide whether those things are true or false based on the earlier things.

So, it is important that you read foundational things. And foundational things, I would say, are the original books in a given field that are very scientific in their nature.

For example, instead of reading a business book, pick up Adam Smith’s The Wealth of Nations. Instead of reading a book on biology or evolution that’s written today, I would pick up Darwin’s Origin of the Species. Instead of reading a book on biotech right now that may be very advanced, I would just pick up The Eighth Day of Creation by Watson and Crick. Instead of reading advanced books on what cosmology and what Neil Degrasse Tyson and Stephen Hawking have been saying, you can pick up Richard Feynman’s Six Easy Pieces and start with basic physics.

Don’t fear any book

If you understand the basics, especially in mathematics and physics and sciences, then you will not be afraid of any book. All of us have that memory of when we were sitting in class and we’re learning mathematics, and it was all logical and all made sense until at one point the class moved too fast and we fell behind.

Then after that we were left memorizing equations, memorizing concepts without being able to derive them from first principles. And at that moment, we’re lost, because unless you’re a professional mathematician, you’re not going to remember those things. All you’re going to remember are the techniques, the foundations.

So, you have to make sure that you’re building on a steel frame of understanding because you’re putting together a foundation for skyscraper, and you’re not just memorizing things because you’re just memorizing things you’re lost. So the foundations are ultra important.

And the ultimate, the ultimate is when you walk into a library and you look at it up and down and you don’t fear any book. You know that you can take any book off the shelf, you can read it, you can understand it, you can absorb what is true, you can reject what is false, and you have a basis for even working that out that is logical and scientific and not purely just based on opinions.

The means of learning are abundant; the desire to learn is scarce

The beauty of the internet is the entire library of Alexandria times 10 is at your fingertips at all times. It’s not the means of education or the means of learning are scarce, the means of learning are abundant. It’s the desire to learn that’s scarce. So, you really have to cultivate the desire.

And it’s not even cultivating you’ve to not lose it. Children have a natural curiosity. If you go to a young child who’s first learning language, they’re pretty much always asking: What’s this? What’s that? Why is this? Who’s that? They’re always asking questions.

But one of the problems is that schools and our educational system, and even our way of raising children replaces curiosity with compliance. And once you replace the curiosity with the compliance, you get an obedient factory worker, but you no longer get a creative thinker. And you need creativity, you need the ability to feed your own brain to learn whatever you want.






---

## How LLMs work?

On a broader level LLMs are just adding one word at a time.

Large Language Models aka LLMs are probability machines at the end of the day.

### It’s Just Adding One Word at a Time

That ChatGPT can automatically generate something that reads even superficially like human-written text is remarkable, and unexpected. But how does it do it? And why does it work? My purpose here is to give a rough outline of what’s going on inside ChatGPT, and then to explore why it is that it can do so well in producing what we might consider to be meaningful text. I should say at the outset that I’m going to focus on the big picture of what’s going on, and while I’ll mention some engineering details, I won’t get deeply into them. (And the essence of what I’ll say applies just as well to other current “large language models” [LLMs] as to ChatGPT.)

The first thing to explain is that what ChatGPT is always fundamentally trying to do is to produce a “reasonable continuation” of whatever text it’s got so far, where by “reasonable” we mean “what one might expect someone to write after seeing what people have written on billions of webpages, etc.”

So let’s say we’ve got the text “The best thing about AI is its ability to”. Imagine scanning billions of pages of human-written text (say on the web and in digitized books) and finding all instances of this text, then seeing what word comes next what fraction of the time. ChatGPT effectively does something like this and generates a final continuation of text on repeat.

### Why is predicting one word at a time hard?

Well okay if it’s essentially producing one word at a time how is that difficult? Well first, language is not deterministic. When you ask a question like:

> what is gravity:

> *Gravity is the invisible force of attraction between any two objects with mass.*

> *In physics, gravity is one of the four fundamental forces of nature (along with electromagnetism, and the strong and weak nuclear forces).*

Both of the answers are factually correct, now imagine doing this for the entire set of information in this world. You can’t simply write a logical function where for each question you have a defined answer.

If that’s the case how do we actually teach a computer all the information about the world?

This is exactly what LLMs solve, and so how do they do this?

### LLMs do this with the help of probabilities

The way LLMs predict the next word is like this:

Imagine if I prompt an LLM:

    “the capital of India is”

LLMs on taking this input will generate a table for the entire vocabulary of words (tokens, we will get to this later).

Now based on the probability it can see New Delhi is the most probabilistic answer and it would choose that and the loop repeats.

Pasted image 20260705143426.png

**the whole of understanding LLMs is understanding on how they can predict the next word(token) correctly.**

---

## Breaking down how LLMs work

To learn any complex system let’s break it down to smaller subparts. To understand how LLMs work here’s the set we need to understand with plumbing in each section.

**What are we learning from?**

In this essay we will break down the entire microgpt.py from @karpathy. By the end of this blog you will be able to understand how a GPT-2 like LLM is built from scratch.

### 1. Dataset

Large language models are text predicting systems. But in order for the systems to predict the right word (token) they need to learn from the data. For most commercial LLMs this data is scraped from the internet. For this example we are taking the data as a list of names.

We will train an LLM on this data to be able to predict real-sounding names after learning from the dataset.

    sid
    sam
    alex
    john
    ... + 3000

---

### 2. Tokenization

Models are mathematical functions that don’t understand letters/words. Instead they understand numbers. Now to teach an LLM words we need a numerical representation of letters/words.

To do this we divide the complete set of vocabulary from the dataset into letters/sub-words and assign a number to each of them. For the dataset and for simplicity we can divide the complete vocabulary into 26 letters. We can construct any name in the vocabulary with 26 letters.

> Q: Frontier language models like GPT, Sonnet, Opus don’t use letters but instead sub-words

**example:**

    0  → a
    1  → b
    2  → c
    ...
    25 → z
    26 → BOS

We also add an extra token BOS to represent when a name starts/ends. This is called Beginning of Sequence. This helps the language model understand when a given sequence starts and finishes. Interestingly the BOS token is also used during inference to stop the LLM from producing more output once it has finished its answer, otherwise we might end in an infinite loop (more on this later).

Now we can represent every name as an array of tokens:

    sid → [19, 8, 3]

and similarly

---

### 3. Embedding

Token IDs are arbitrary integers. “a” = 0. “b” = 1. “z” = 25.

Think of a library as the dataset and we have a barcode (token ID) attached to each book. The barcode does not contain any information about the book. To encode meaning into each book we need a description attached to each book like topic: food, difficulty: easy, language: English.

This description happens with the help of a long vector for each token ID.

Now that we have integer representation of every word, we need to take a step back. The way the LLM works is to probabilistically generate the “right” next token:

| Token ID | Token | Embedding vector (3 numbers) |
|----------|-------|------------------------------|
| 0        | “a”   | [ 0.9, 0.1, 0.8 ]           |
| 1        | “b”   | [ 0.8, 0.2, 0.7 ]           |
| 2        | “c”   | [ 0.1, 0.9, 0.2 ]           |
| 3        | “d”   | [ 0.85, 0.15, 0.75 ]        |
| 4        | “e”   | [ 0.15, 0.85, 0.25 ]        |

In reality, for GPT-2 the embedding vector is of 768 length.

In our names model, similar letters that appear in similar contexts will end up with similar vectors. For example, after training, “s” and “t” might end up close together (both are common name-starters), while “z” and “q” land far apart. **The numbers encode patterns the model learned, not alphabetical order.**

#### What happens at real-world scale?

Our names model has 27 tokens with tiny 3-number vectors. But real LLMs like GPT-2 have 50,000+ tokens with 768-dimensional vectors. When trained on billions of sentences, something remarkable emerges:

Take three words: “cat”, “kitten” and “car”, with wildly different token IDs. After training, “cat” might be [0.9, 0.1, 0.8] and “kitten” [0.85, 0.15, 0.75], almost the same! Meanwhile “car” is [0.1, 0.9, 0.2], totally different from “cat,” even though their IDs are close. Maybe the first number captures “animal-ness,” the second captures “vehicle-ness.” We didn’t program this, the model learned it through training.

Even wilder: because similar words end up with similar vectors, you can do meaningful arithmetic on them. The famous example: **vec(“king”) − vec(“man”) + vec(“woman”) ≈ vec(“queen”)**. Nobody programmed this, it emerged from predicting the next word on billions of sentences.

#### Back to our names model

When you feed a name like “sam” to the transformer, it looks up each letter’s embedding and stacks them into a matrix:

    input tokens: “s”, “a”, “m” → [[0.9, 0.1, 0.8], [0.8, 0.2, 0.7], [0.85, 0.15, 0.75]]

Now every token has meaning inside it, but let’s think from first principles

---

### 3b. Position matters: the second embedding (WPE)

Here’s a puzzle. Consider these two names from our dataset:

> “sam” vs “mas”

**Same exact letters. Completely different names.**

The letter “a” has the same embedding in both, [0.8, 0.2, 0.7]. But “a” in position 1 (s-**a**-m) should behave differently from “a” in position 1 (m-**a**-s). Without position information, the model can’t tell them apart.

To solve this we have a very simple solution.

We create a new matrix for each position **WPE** that captures where a token sits in the sequence.

Continuing our tiny 3-dimensional world. Say the position table looks like:

| Position           | Position vector   |
|--------------------|-------------------|
| 0 (first letter)   | [0.1, 0.0, 0.1]  |
| 1 (second letter)  | [0.0, 0.1, 0.0]  |
| 2 (third letter)   | [0.05, 0.05, 0.1] |
| ...                | ...               |

Now we add the two together. For the name “sam”:

    “s” at position 0: [0.9, 0.1, 0.8] + [0.1, 0.0, 0.1] = [1.0, 0.1, 0.9]
    “a” at position 1: [0.8, 0.2, 0.7] + [0.0, 0.1, 0.0] = [0.8, 0.3, 0.7]
    “m” at position 2: [0.85, 0.15, 0.75] + [0.05, 0.05, 0.1] = [0.9, 0.2, 0.85]

And for “mas”:

    “m” at position 0: [0.85, 0.15, 0.75] + [0.1, 0.0, 0.1] = [0.95, 0.15, 0.85]
    “a” at position 1: [0.8, 0.2, 0.7] + [0.0, 0.1, 0.0] = [0.8, 0.3, 0.7]
    “s” at position 2: [0.9, 0.1, 0.8] + [0.05, 0.05, 0.1] = [0.95, 0.15, 0.9]

Now “s-at-position-0” (in “sam”) and “s-at-position-2” (in “mas”) have different vectors. The model can tell them apart. **Problem solved.**

> **In a real LLM** this same idea means “The dog bit the man” and “The man bit the dog” produce different vectors even though they have the same words, because each word gets a different position vector.

So finally the input to the transformer stack is

    Xi = wte[token_idi] (what the letter is) + wpe[i] (where it sits)

For T tokens, we get a matrix X of shape (T, 768). In our toy example, “sam” gives us a (3, 3) matrix. This is what enters the transformer blocks.

---
## Transformer

### 4. Self-attention: the core idea

We have our X matrix, word + position embeddings for each token. But there's a problem. Consider:

**SAM, SALT**

In both words, the vector for "a" is identical, same token, same position. So how does the model predict "m" next for SAM but "l" for SALT?

A fixed vector for "a" can't capture both meanings. "a" needs to look around at the other tokens and update itself based on context. When it sees "s" before it, it should shift toward "sam"-like continuations. This looking-around is called **Attention**.

---

#### The intuition: asking for help

The model has seen "s", "a" and must guess the next letter. But "a" alone is clueless, it appears in thousands of names. So "a" asks the other letters for help. That asking has three parts:

**1. Query**, "a" asks: "who here can help me predict what comes next?" Each token creates a Query vector that represents what it's looking for.

**2. Key**, every token holds up a sign describing itself. "s" holds up: "I'm an 's' at the start of a name." These Key vectors are what other tokens match against. "a" compares its Query against each Key to decide who matters: "s" is very helpful (the starting letter shapes the whole name), itself not so much. Result: 90% attention on "s", 10% on itself.

> How does it decide? **Dot product.** Think of two vectors in space, if they point the same direction (parallel), dot product is high = strong match. If perpendicular, dot product is zero = no relevance.

**3. Value**, deciding who to listen to isn't the same as actually listening. Each token also has a Value vector, the actual information it contributes. "a" blends the Values by the percentages it chose: 90% of what "s" gave + 10% of what "a" gave = a new, context-aware version of "a".

**What just happened:**
Before attention: "a" just meant "the letter a." After attention: "a" means "the letter a, sitting right after an 's' at the start of a name." Now it can guess the next letter is "m" (→ sam) or "l" (→ sal).

**Why three vectors and not two?** The sign you hold up to get noticed (Key) and the actual help you give (Value) are different things. You match on the Key, but you take home the Value. Three roles because asking for help naturally has three parts: the question (Query), the label that gets you noticed (Key), and the actual help (Value).

---

#### The math: how Q, K, V actually work

Each token's embedding X (size 768) gets multiplied by three learned weight matrices, Wq, Wk, Wv, each of size (768 × 64):

    Query = X · Wq = (1,64)
    Key   = X · Wk = (1,64)
    Value = X · Wv = (1,64)

For "S-A-L", each token gets its own Q, K, V vectors, each of size 64.

**Step 1: Compute attention scores**, take the dot product of each Query with every Key to get a score matrix:

              "S" Key  "A" Key  "L" Key
    "S" Query    0       1        1
    "A" Query    1       0        1
    "L" Query    1       1        2

For "A", the raw scores are [1, 0, 1], it aligns strongly with "S" and "L", weakly with itself.

**Step 2: Scale**, these scores can get large, so we divide by √(dk) = √64 = 8. This keeps gradients stable.

**Step 3: Softmax**, convert scaled scores into probabilities that sum to 1.

> **What is softmax?** It takes any list of numbers (positive, negative, big, small) and squashes them into probabilities between 0 and 1 that add up to exactly 1. Bigger numbers get bigger probabilities. So [1, 0, 1] becomes roughly [0.4, 0.2, 0.4]: the two 1's share most of the weight, and the 0 gets a small slice.

    [1, 0, 1] → scale → softmax → [0.4, 0.2, 0.4]

**Step 4: Weighted sum of Values**, multiply each token's Value vector by its attention weight and sum:

    0.4 × V("S") + 0.2 × V("A") + 0.4 × V("L") = new context-aware vector for "A"

**The full equation:**

    Attention(Q, K, V) = softmax(Q · Kᵀ / √dk) × V

---

#### Causal masking: no peeking ahead

One critical rule: a token can only attend to tokens that came before it (and itself). Otherwise it's cheating, seeing the answer before predicting it. We enforce this by setting future positions to −∞ before softmax, which makes their probability exactly 0:

              "S"    "A"    "L"
    "S"        0     −∞     −∞
    "A"        1      0     −∞
    "L"        1      1      2

"S" can only see itself. "A" can see "S" and itself. "L" can see everything before it.

---

#### Multi-head attention

What described above was 1 Attention Head. Each attention head can understand only a certain type/s of relationships, but again language is not deterministic and filled with many patterns. To accommodate all patterns we add multiple different heads, each having its own Q, K, V pair, each looking for a different pattern.

Now one head is outputting a vector of 64 length. Our input is of 768 dimension, so each head gives an output of 64. We glue 12 of them together to get back 768 length output.

Once we have received our final output of 768 matrix:

One final matrix multiplication: Wo is (768, 768). It mixes the heads' outputs together:

    [1, 768] × Wo → [1, 768]

This is the final attention output, a single 768-d vector that combines what all heads learned. Head 1 contributed its grammatical reading, head 2 contributed its semantic reading, and Wo blended them.

---

### 5. MLP (Feed Forward Network)

Now we started with an input "a" with a 768 dimension vector and we have added the information of surrounding and other language patterns using multi-headed attention. Think like this:

> We have "river" and "bank" nearby in a sentence using attention, but to understand this is about geography not finance we need to reason on top of this after the attention step. A weighted average of "river" and "bank" is still just a point between them. You need a function that can say "river + bank, aha, this is a riverbank, activate a whole new cluster of meaning."

That's the MLP's job.

How does it do that? Let's take a letter's vector of dimension 768:

**Step 1:** We expand the vector to a larger dimension with W1

    Xa × W1 = 3072

So we convert 768 → 3072 (four times bigger).

**Step 2:** We apply a non-linearity function.

A non-linearity is a function that prevents the network from collapsing into one big linear transformation.

The original transformer used ReLU. GPT and BERT moved to GELU. Modern models like LLaMA, Mistral, and PaLM use SwiGLU. The expand-then-compress structure stayed the same. The non-linearity itself is what's been iterated on.

**Step 3:** Compress back to original size.

The token went in as [0.8, 1.4] and came out as [1.1, 0.9], transformed by a nonlinear function that captured something about the combination of context gathered by attention.

#### The division of labor

**Attention** = gather information from context ("look around the room").
**MLP** = process what you gathered ("think about what you heard").
One gathers, the other reasons. Together they form one transformer block.

---

### 6. LayerNorm: keeping the numbers sane

Each transformer block does a bunch of matrix multiplications and additions. After a few blocks, some numbers in a token's vector might grow to 500 while others shrink to 0.001. This is a problem because:

**1. Softmax breaks.** If the inputs to softmax are [500, 501, 499], then e^500 is astronomically large. The softmax becomes nearly [0, 1, 0], it puts all weight on one token and ignores everything else. The model can't learn nuanced attention patterns.

**2. Gradients break.** When numbers are huge, gradients become either huge (exploding) or tiny (vanishing). Training becomes unstable, the model oscillates wildly or stops learning.

**The fix:** before each attention and MLP step, normalize the numbers to a nice range. That's LayerNorm.

Suppose after a few transformer blocks, "a"'s vector has drifted to:

    [10, 2, 6, 14]

LayerNorm normalizes them to [0.45, -1.34, -0.45, 1.34] (mean 0, standard deviation 1).

> The relative pattern is preserved, the 4th number is still the biggest, the 2nd is still the smallest, but the scale is now tidy and predictable.

**Formula:**

    Step 1: Compute average → (10 + 2 + 6 + 14) / 4 = 8
    Step 2: Subtract the average → [2, -6, -2, 6]
    Step 3: Divide by the standard deviation
            → variance = (2² + (-6)² + (-2)² + 6²) / 4 = 20
            → std deviation = √20
            → final = [2, -6, -2, 6] / √20 = [0.45, -1.34, -0.45, 1.34]

**This is the LayerNorm formula:**

    LayerNorm(x) = γ ⊙ (x - μ) / (σ + ε) + β

- **μ, σ** — Mean and standard deviation of the vector's elements. Computed fresh for each token, every time.
- **ε** — A tiny number (like 0.00001) added to σ so we never divide by zero.
- **γ, β** — Learned scale and shift parameters. After normalizing, the model can learn to re-scale if it wants to. These are trained just like any other weight.

#### When does LayerNorm happen?

Before every sub-layer:

    1. LayerNorm the input (X)
    2. Run attention
    3. Add residual = attention result + X
    4. LayerNorm again
    5. Run MLP
    6. Add residual = MLP result + X

---

### 7. What is residual?

#### The problem: signals die in deep networks

Imagine each block's transformation slightly shrinks the gradient by a factor of 0.8 (which is realistic for a layer that multiplies by a weight matrix).

**Gradient flowing backward through 12 blocks:**

    Start with gradient = 1.0 at the output
    After block 12: 1.0 × 0.8 = 0.80
    After block 11: 0.80 × 0.8 = 0.64
    After block 10: 0.64 × 0.8 = 0.51
    ...
    After block 1: 0.8^12 = 0.069

The gradient that reaches block 1 is only **6.9%** of the original signal. Block 1 barely learns at all. Block 12 gets the full gradient and learns quickly, but block 1 is nearly frozen.

Now imagine a deeper model (96 blocks, like GPT-3):

    0.8^96 = 0.000000021

The gradient is effectively **zero**. The first layers are completely dead.

This is the **vanishing gradient problem**. Before residual connections were invented (2015, by the ResNet team), it was nearly impossible to train networks deeper than ~20 layers. The fix is so simple it's almost surprising it works.

#### The fix: add, don't replace

Instead of passing x through a transformation and replacing it with the result, you add the result to the original:

**Before the attention block:**
"a"'s vector = [0.8, 0.3]

**Attention produces:**
[0.0, 1.1] (the update from reading other tokens)

**Without residual connection:**
New vector = [0.0, 1.1], the first component (0.8) is **gone forever**. That information can never be recovered by later blocks.

**With residual connection:**
New vector = [0.8, 0.3] + [0.0, 1.1] = [0.8, 1.4], original information **preserved**, new context **layered on top**.

---

### 8. The full forward pass: putting it all together

<!-- tokens → embedding + position → 12x [LayerNorm → Attention + residual → LayerNorm → MLP + residual] → final LayerNorm → linear head → logits. trace a name through the whole pipeline. -->

---

### 9. From vectors to predictions: logits and softmax

<!-- the linear head: multiply final 768-d vector by (768 × 27) matrix to get one score per token in our vocabulary. these raw scores = logits. softmax converts logits to probabilities that sum to 1. this is the "probability table" from the intro, now you know how it's made. -->

---

### 10. Inference: how the model generates a name

<!-- feed BOS token in, get probabilities for first letter, sample one, append it, feed the whole sequence back in, repeat until BOS appears again (end of name). this is the autoregressive loop. temperature: controls how "creative" vs "safe" the sampling is. -->

---

### 11. Training: how the model learns all of this

<!-- the training loop: feed a name, model predicts next letter at each position, compute cross-entropy loss, backpropagate, update weights. this is how Wq, Wk, Wv, W1, W2, wte, wpe all get their values. -->

---

## Closing

<!-- tie it back to the intro: we started with "LLMs just predict the next word", now you know exactly how. every piece from tokens to attention to logits. -->
