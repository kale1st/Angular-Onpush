# Angular Change Detection Demo

A practical demonstration project exploring Angular's change detection strategies: Default, `runOutsideAngular()`, and `OnPush`.

## 🎯 Purpose

This project accompanies the article **"Angular Change Detection: What Happens Before You Ever Think About OnPush"** and demonstrates three key concepts:

1. **Default Change Detection** - How Angular checks all components on every event
2. **Zone Control** - Using `runOutsideAngular()` to prevent unnecessary checks
3. **OnPush Strategy** - Optimizing component updates with selective change detection

## 🚀 Quick Start

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`

## 📋 What to Test

### Part 1: Default Behavior (AppComponent)
- Click "Increment Counter" → Watch console for `[Messages] "debugOutput" binding re-evaluated`
- Wait 4 seconds → Timer inside Angular triggers change detection
- Wait 5 seconds → Timer outside Angular runs without triggering change detection

### Part 2: OnPush Demo (Parent/Child Components)

**Scenario 1:** Click "Increment Counter"
- ✅ Console shows: `Parent checked`, `Child checked`
- ✅ UI updates normally

**Scenario 2:** Click "Start Timer"
- ⚠️ Console shows: `Timer updated to: 1, 2, 3...`
- ❌ UI stays frozen at `Timer: 0`
- **Why?** OnPush skips checking because `setInterval` isn't a component event

**Scenario 3:** Click "Increment Counter" while timer runs
- 🎯 Timer suddenly jumps from 0 to current value
- **Reveals:** Data was updating in memory all along, UI just "catches up"

## 🔍 Key Insight

OnPush doesn't stop your code from running. It controls **when Angular checks if the UI needs updating**. Without valid triggers (events, input changes), the UI stays frozen even though data changes.

## 🛠️ Built With

- Angular 19
- TypeScript
- Standalone Components

## 📖 Related Article

[Link to Medium article when published]

## 📝 License

MIT
