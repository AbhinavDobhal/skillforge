---
name: database-design
description: Database schema design, normalization, and optimization strategies. Use when designing databases, planning migrations, or optimizing queries. Triggers on keywords like "schema", "database", "table", "relationship", "index", "query", "migration", "optimization", "normalization".
---

# Database Design & Optimization Guide

## Database Design Principles

### Normalization Levels

**1NF (First Normal Form)**
- Eliminate repeating groups
- Each field contains atomic values
- No duplicate columns

**2NF (Second Normal Form)**
- Must be in 1NF
- All non-key fields fully depend on primary key
- Remove partial dependencies

**3NF (Third Normal Form)**
- Must be in 2NF
- Non-key fields don't depend on other non-key fields
- Eliminates transitive dependencies

**Most projects aim for 3NF** as a balance between normalization and query performance.

## Schema Design

### Naming Conventions
- Table names: plural, lowercase, snake_case
- Column names: lowercase, snake_case
- Primary keys: `id`
- Foreign keys: `{table_singular}_id`
- Boolean fields: prefix with `is_`, `has_`, `can_`

```sql
-- Good
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  is_active BOOLEAN,
  created_at TIMESTAMP
);

CREATE TABLE user_posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR,
  created_at TIMESTAMP
);
```

### Relationships

**One-to-Many**
```sql
-- User has many Posts
CREATE TABLE users (id PRIMARY KEY);
CREATE TABLE posts (user_id REFERENCES users(id));
```

**Many-to-Many**
```sql
-- Users have many Groups, Groups have many Users
CREATE TABLE user_groups (
  user_id REFERENCES users(id),
  group_id REFERENCES groups(id),
  PRIMARY KEY (user_id, group_id)
);
```

**Foreign Key Constraints**
```sql
-- Referential integrity
FOREIGN KEY (user_id) REFERENCES users(id)
  ON DELETE CASCADE  -- Delete posts when user deleted
  ON UPDATE CASCADE  -- Update posts when user id changes
```

## Indexing Strategy

### When to Index
- Primary keys (automatic)
- Foreign keys (for joins)
- Frequently searched columns
- Columns used in WHERE clauses
- Columns used in ORDER BY

### Index Types
- **B-tree**: Default, good for range queries
- **Hash**: Fast equality checks only
- **Full-text**: For text search
- **Composite**: For multiple columns

### Index Guidelines
- Index improves SELECT, slows INSERT/UPDATE/DELETE
- Too many indexes harm performance
- Monitor index usage
- Regular maintenance (REINDEX, ANALYZE)

```sql
-- Good indexing
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);
```

## Query Optimization

### EXPLAIN Plans
```sql
EXPLAIN ANALYZE
SELECT * FROM posts
WHERE user_id = 1
ORDER BY created_at DESC;
```

### Common Issues
- N+1 problem: Multiple queries instead of one join
- Full table scans: Missing index
- Correlated subqueries: Inefficient

### Solutions
- Use JOINs instead of multiple queries
- Add appropriate indexes
- Denormalize if necessary (with caution)

## Data Types

| Type | Use | Example |
|------|-----|---------|
| INT, BIGINT | Numbers | age, count |
| DECIMAL(10,2) | Money | price, balance |
| VARCHAR(n) | Text | email, name |
| TEXT | Long text | description, content |
| BOOLEAN | Yes/No | is_active, is_verified |
| DATE, TIMESTAMP | Time | created_at, birthday |
| JSON | Flexible data | metadata, settings |

## Constraints

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  age INT CHECK (age >= 0),
  CONSTRAINT email_format CHECK (email LIKE '%@%.%')
);
```

## Design Checklist
- [ ] Entities identified correctly?
- [ ] Relationships modeled?
- [ ] Normalized appropriately (3NF)?
- [ ] Primary/Foreign keys defined?
- [ ] Constraints added?
- [ ] Indexes planned?
- [ ] Migration strategy planned?
- [ ] Tested with realistic data?

## Migrations (Using Prisma)

```javascript
// Update schema
model User {
  id Int @id @default(autoincrement())
  email String @unique
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  userId Int
  user User @relation(fields: [userId], references: [id])
}

// Run migration
// npx prisma migrate dev --name add_posts
```
