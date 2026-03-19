---
description: Systematic debugging and root cause analysis
---

# /debug - Systematic Debugging Workflow

## Overview

Use systematic debugging to identify and fix issues efficiently. Avoid guessing—use data-driven techniques.

## When to Use

- Error messages or crashes
- Unexpected behavior
- Performance issues
- Tests failing
- Can't reproduce bug to fix it

## Debugging Checklist

### Step 1: Reproduce the Issue

Ask for:
- [ ] Exact steps to reproduce
- [ ] Error message or unexpected behavior
- [ ] When did it start?
- [ ] Consistent or intermittent?
- [ ] Affects all users or specific cases?

**Key**: Can't fix what you can't reproduce consistently.

### Step 2: Collect Information

Gather:
- [ ] Full error stack trace
- [ ] Environment details (OS, browser, Node version)
- [ ] Recent code changes
- [ ] Latest logs
- [ ] Screenshots/screen recording if visual

### Step 3: Form Hypothesis

Based on information, hypothesize:
- Is it a regression? (worked before, broken now)
- New dependency issue?
- User input issue?
- Environment issue?
- Race condition or timing?

### Step 4: Narrow Down Scope

Use binary search:
- Remove features until issue goes away
- Add features one-by-one until issue appears
- Check if issue exists in isolated environment
- Test with minimal code reproduction

```
// Narrow down example:
Does issue occur without feature X? Yes → X is culprit
Does issue occur without Module Y? No → keep Y
...continue binary search
```

### Step 5: Debug with Tools

Use appropriate debuggers:
- **Node.js**: `node --inspect`, DevTools
- **Browser**: Chrome DevTools, Firefox Developer
- **React**: React DevTools extension
- **Database**: Query logs, EXPLAIN plans
- **Network**: Network tab, curl, Postman

### Step 6: Instrumentation

Add logging strategically:
```javascript
// Strategic logging
console.log('Before operation:', variable);
operation();
console.log('After operation:', variable);

// Performance logging
console.time('operation');
slowOperation();
console.timeEnd('operation');
```

### Step 7: Verify Root Cause

Confirm you found the real issue:
- Does removing/fixing it solve the problem?
- Did you fix the symptom or root cause?
- Will it prevent recurring issue?

### Step 8: Implement Fix

```javascript
// Before (buggy)
const result = calculateTotal(items); // Runs even if items is null

// After (fixed)
const result = items ? calculateTotal(items) : 0; // Check first
```

### Step 9: Add Test to Prevent Regression

```javascript
it('should return 0 when items is null', () => {
  const result = calculateTotal(null);
  expect(result).toBe(0);
});
```

## Debugging Workflow Diagram

```
Bug Report
    ↓
Reproduce Consistently
    ↓
Collect Information/Logs
    ↓
Form Hypothesis
    ↓
Binary Search (narrow down)
    ↓
Instrument Code (add logging)
    ↓
Found Root Cause?
    ├─ Yes → Implement Fix
    │         ↓
    │        Add Test
    │         ↓
    │        Verify Fixed
    └─ No → Back to Binary Search
```

## Common Bug Types & Strategies

| Bug Type | Strategy | Tools |
|----------|----------|-------|
| Crash/Exception | Stack trace + reproduction | Debugger |
| Logic Error | Step through code | Debugger + logs |
| Race Condition | Timing investigation | Async debugging |
| Memory Leak | Heap snapshot | Chrome DevTools |
| Performance | Profiling | Performance API |
| Browser-Specific | Test in multiple browsers | BrowserStack |
| Data Issue | Query logs + assertions | DB tools |

## Debugging Checklist

- [ ] Reproduced consistently?
- [ ] Collected all information?
- [ ] Formed testable hypothesis?
- [ ] Narrowed scope with binary search?
- [ ] Used appropriate debugging tools?
- [ ] Found root cause (not symptom)?
- [ ] Implemented minimal fix?
- [ ] Added regression test?
- [ ] Verified fix works?

## Tips

✅ Reproduce before fixing
✅ Gather facts before guessing
✅ Use binary search to narrow scope
✅ Trust the error message
✅ Add regression tests

❌ Guess randomly (don't try random fixes)
❌ Assume what the issue is without evidence
❌ Change multiple things at once
❌ Fix and move on (without tests)
