---
title: Quick Start Guide
sidebar_position: 1
description: Set up and execute your first MacroFlow script in under 5 minutes.
---

# Quick Start Guide

This guide helps you set up and run your first MacroFlow script in just a few minutes.

## Step 1: Open the Macro Console

From the QuestEngine interface:

- Open the **Macro Console** panel
- Click **New Macro**
- Name it (e.g. "Test Blast")

You’ll now see a code editor where you can type a flow.

---

## Step 2: Write a Simple Spell

Paste the following example into your macro editor:

```js
await ctx.macroFlow()
  .selectPoint({ label: 'Target blast area' })
  .blast({ radius: 120, type: 'fire' })
  .log('🔥 Boom!')
  .run();
```

This will:

- Ask you to select a point
- Trigger a fire blast visual
- Log a message to the in-game chat

---

## Step 3: Run the Macro

Click **Run Macro** or press the associated hotkey.  
Select a point on the map — and watch the effect trigger!

---

## Step 4: Modify the Flow

Try adjusting values:

- Change the blast type to `ice` or `dark`
- Add `.applyCondition()` or `.wait(1000)`
- Chain multiple steps in a row

Example:

```js
await ctx.macroFlow()
  .selectActor({ label: 'Target enemy' })
  .blast({ type: 'lightning', radius: 100 })
  .applyCondition({ condition: 'Stunned', duration: 2 })
  .log('⚡ Target stunned!')
  .run();
```

---

## What’s Next?

Now that your first macro is running, try:

- Using `.repeat()` or `.if()` logic
- Adding `.spawnEffect()` visuals
- Building your own condition-based combos
