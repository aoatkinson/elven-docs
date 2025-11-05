---
title: Writing Your First Flow
sidebar_position: 2
description: Learn how to write your first MacroFlow from scratch with detailed explanation.
---

# Writing Your First Flow

This tutorial walks you through writing your first full MacroFlow, step by step.

---

## Step 1: Understand the Flow Structure

Every MacroFlow is a sequence of actions built like this:

```js
await ctx.macroFlow()
  .step1()
  .step2()
  .step3()
  .run();
```

Each step does something — like showing targeting UI, spawning a visual, or applying a condition.

---

## Step 2: Select a Target

The most common first step is asking the user to pick a point:

```js
.selectPoint({ label: 'Choose where to cast' })
```

You can also select an actor:

```js
.selectActor({ label: 'Choose an enemy' })
```

Both of these set `ctx.lastTarget`.

---

## Step 3: Trigger an Effect

Now add something to happen at the selected target:

```js
.blast({ radius: 100, type: 'fire' })
```

Or spawn a particle effect:

```js
.spawnEffect({ effectType: 'ice', size: 160 }, 300)
```

You can chain more effects using `.do()`, `.wait()`, `.applyCondition()`, or any other flow steps.

---

## Step 4: Run It

End every flow with `.run();` — this starts the behavior.

```js
await ctx.macroFlow()
  .selectPoint()
  .blast({ radius: 100, type: 'dark' })
  .run();
```

You can also use `await macroFlow()` if you're outside of a `ctx` environment and calling directly.

---

## Step 5: Log and Debug

Use `.log()` to send messages to the in-game log:

```js
.log('Spell cast complete.')
```

Or check flow state with:

```js
.do(ctx => console.log(ctx))
```

---

## Next Steps

You now know how to:

- Chain actions together
- Use targeting input
- Trigger visual or mechanical effects
- Run the macro and debug it

