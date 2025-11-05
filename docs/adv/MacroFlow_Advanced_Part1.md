---
title: MacroFlow: Advanced User's Guide (Part 1)
sidebar_position: 2
description: Advanced chaining, targeting, AI behaviors, and dynamic effects in QuestEngine MacroFlow.
---

# 🛡️ MacroFlow: Advanced User's Guide (Part 1)

## 1. Introduction to MacroFlow at the Advanced Level

At its core, MacroFlow is a lightweight, fully async, chainable execution engine for building dynamic, player-triggered game effects.

But unlike basic scripting:

- MacroFlow is **event-driven**, **world-aware**, and **player-context-sensitive**.
- It is built to scale from a 1-line spell ("blast an enemy") to a multi-stage encounter ("summon orbiters → patrol zone → aggro enemies → dynamically attack intruders").
- You are not coding UI — you are **authoring spell behavior**, defining **actor AI**, or **designing player-triggered macros**.

At an advanced level, you treat flows almost like mini movie directors:  
You create scenes, behaviors, and interactions — all inside the game world with zero boilerplate and fluent control.

---

## 2. Advanced Architecture Overview

MacroFlow has three major systems that work together invisibly:

| System                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Chained async steps         | Every flow is a sequence of awaited actions. No steps run until the last completes. |
| Context propagation (`ctx`) | A live context object passes between steps, sharing token info, last selected targets, event hooks, animation timers, and macro utilities. |
| Global API access           | Flows access real-world game actions (move tokens, spawn effects, change states) through `ctx.globalAPI`, guaranteeing safe synchronization. |

Advanced flow execution always looks like:

```
[ Flow Step 1 ] -> await -> [ Flow Step 2 ] -> await -> [ Flow Step 3 ] -> ...
```

With shared `ctx` carrying all needed data at each step.  
No race conditions, no manual event listeners, no dangling animations to clean up manually — **MacroFlow handles it**.

---

## 3. Deep Context (`ctx`) Mechanics

| `ctx` Field                      | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `ctx.token()`                    | Gets the current "caster" token that launched the macro.               |
| `ctx.lastTarget`                 | Holds whatever the last selection was (point, actor, area, cone).      |
| `ctx.globalAPI`                  | Interface to world actions: move tokens, spawn effects, conditions, etc. |
| `ctx.macroUtils`                 | Library of helper functions like `distance`, `actorsInRadius`, `wait`. |
| `ctx.cameraZoom`, `ctx.cameraX`, `ctx.cameraY` | Current camera view state (if needed). |
| `ctx.patrolPoints`              | Stores patrol route points for patrol macros.                          |
| `ctx.targets`, `ctx.selectedPoints` | If multiple selection steps were done.                           |
| `ctx.castingContext`             | Optional — manages spellcasting overlays, visual feedback, cancellation. |

**Advanced point:**  
Because `ctx` is always passed, even custom `.do()` steps or internal helpers can fully mutate or read the flow state.  
You can build entire **decision trees**, **AI branches**, **spawn chains**, or **coordinate systems** inside one flow.

---

## 4. Advanced Fluent Chaining Rules

MacroFlow is built for fluent chaining:

- Every major step returns the flow object, so you can stack steps indefinitely.
- Nested blocks (like `.repeat()` or `.if()`) have their own mini-flows inside them, but always return to the main chain.

### Example: Repeating a summon

```js
await ctx.macroFlow()
  .log('Summoning spirits...')
  .repeat(6).do(async ctx => {
    await ctx.macroFlow()
      .spawnEffect({ effectType: 'spirit' }, 400)
      .wait(200)
      .run()(ctx);
  })
  .log('Complete!')
  .run();
```

### Example: Nested `.if()` logic

```js
await ctx.macroFlow()
  .if(ctx => ctx.token().hp < 10)
    .do(async ctx => {
      await ctx.macroFlow().blast({ radius: 120, type: 'panic' }).run()(ctx);
    })
  .log('Survived.')
  .run();
```

---

## 5. Extending MacroFlow Dynamically

Flow steps are small, independent async blocks, which means you can:

- Dynamically insert new behaviors (`.do()`, `.repeat()`, `.if()` inside flows)
- Compose flows together (sub-flows inside a `.do()`)
- Generate flows at runtime based on player selection, combat events, or world state.

### Example: Different flows based on HP

```js
await ctx.macroFlow()
  .do(async (ctx) => {
    if (ctx.token().hp > 50) {
      await ctx.macroFlow().blast({ radius: 100, type: 'holy' }).run()(ctx);
    } else {
      await ctx.macroFlow().darkPulse({ radius: 400 }).run()(ctx);
    }
  })
  .run();
```

In advanced macros, you might fork entire spell behaviors based on stats, conditions, or world triggers.

---

## 6. Advanced Targeting Models

In beginner flows, you just `selectPoint()` or `selectActor()` once.  
But in real games you often need dynamic targeting chains:

- Chaining selections (e.g., select multiple points or multiple enemies)
- Auto-finding targets (e.g., nearest enemy, group in area, random point near a target)
- Locking onto moving enemies (with tracking flows)

MacroFlow offers built-in selection and tracking:

| Selection or Auto-Targeting       | Purpose                                             |
|----------------------------------|-----------------------------------------------------|
| `selectPoint()`                  | Player picks a world point.                         |
| `selectActor()`                  | Player picks a visible actor.                       |
| `selectArea()`                   | Player selects an area (circle radius).             |
| `selectCone()`                   | Player selects direction + cone shape.              |
| `findNearestEnemy({ range })`    | Automatically pick closest hostile in range.        |
| `watchTarget({ radius, onEnter })` | Start monitoring a point or actor for intrusions. |
| `trackNearestActor({ radius })`  | Automatically rotate toward closest threat.         |
| `aggroChaseSelf()`               | Chase nearest enemy if they approach.               |

Advanced targeting allows fully dynamic spell behavior without forcing the player to manually pick everything.

---

## 7. Mastering Conditions, States, and Combat Interaction

MacroFlow ties directly into conditions, combat states, and token stats through:

| Flow Step                                | Purpose                                                       |
|------------------------------------------|---------------------------------------------------------------|
| `applyCondition({ name, duration, emoji })` | Apply a status effect to a selected target.                  |
| `applyConditionInRadius({ center, radius, conditionName })` | Mass-apply a condition around a point.       |
| `removeCondition({ name })`              | Remove a specific condition from a target.                    |
| `waitForIncomingAttack({ timeout, onBlocked })` | Wait for being attacked to trigger reactions.         |
| `waitForTargeted(timeout)`               | Wait for a targeting event against you.                       |

In advanced macros, you can:

- Set up traps: watch for enemies and stun them.
- React to being attacked: trigger shields, counters, dodges.
- Mass-control a battlefield with radius-based conditions.
- Build true status effect flows: freezing, stunning, burning, blinding, etc.

---

## 8. Layer Control and Resource Management (Advanced)

Advanced flows can create and destroy many tokens, effects, and projectiles at once.  
To avoid clutter, flows should:

- Track their own created IDs.
- Schedule clean-up (e.g. `setTimeout(() => removeToken(id))`).
- Use `keepAtEnd: false` to auto-delete projectiles when they expire or hit.

You can spawn a full swarm, orbiter system, or explosion chain, but always be ready to clean them up without leaks.

### Example:

```js
.spawnAndFlyActor({ ... })
.spawnEffect({ ... }, 300)
.spawnEffect({ ... }, 500)
.wait(600)
.do(ctx => ctx.globalAPI.removeToken(mySwarmId))
```

---

## 📜 End of Part 1

Next in Part 2: Advanced Patterns, Recipes, Optimization, Composing Sub-Flows, Live Debugging, and Mega-Macro Best Practices.
