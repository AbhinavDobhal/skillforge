---
name: prisma-expert
description: "Prisma schema, migration, and query guidance for relational data modeling in application backends. Use when designing Prisma models, reviewing migrations, or optimizing ORM queries. Triggers on keywords like prisma, schema.prisma, migration, relation, model, orm, seed, prisma client."
---

# Prisma Expert

## Core Guidance

- Model domain concepts clearly before generating migrations.
- Keep migrations small and intention-revealing.
- Review relation names and cascading behavior explicitly.
- Avoid hidden N+1 query patterns in nested reads and resolvers.
