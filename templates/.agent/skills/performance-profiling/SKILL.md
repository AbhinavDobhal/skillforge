---
name: performance-profiling
description: "Performance investigation guidance for measuring bottlenecks, reading traces, and applying targeted fixes in frontend or backend code. Use when diagnosing slow pages, expensive renders, or latency problems. Triggers on keywords like performance, profile, bottleneck, slow, latency, web vitals, optimization."
---

# Performance Profiling

## Core Guidance

- Measure first and optimize the hottest path, not the noisiest suspicion.
- Distinguish compute, I/O, render, and network bottlenecks.
- Confirm gains with before-and-after evidence.
- Avoid trading readability for micro-optimizations without data.
