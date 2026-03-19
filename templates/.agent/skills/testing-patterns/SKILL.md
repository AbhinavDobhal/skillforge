---
name: testing-patterns
description: Comprehensive testing strategies, patterns, and best practices for unit, integration, and E2E tests. Use when writing tests, setting up test infrastructure, or planning QA. Triggers on keywords like "test", "testing", "jest", "vitest", "unit test", "integration test", "e2e", "coverage", "qa", "quality assurance".
---

# Testing Patterns & Best Practices

## Testing Pyramid

```
        /\
       /E2E\          Few, critical user workflows
      /----\
     /  Int  \        Some, integration points
    /-------\
   / Unit    \        Many, fast unit tests
  /_________\
```

**Target Distribution:**
- 70% Unit tests (fast, abundant)
- 20% Integration tests (moderate speed)
- 10% E2E tests (slow, critical only)

## Unit Testing

### Best Practices
- Test ONE thing per test
- Use clear, descriptive test names
- Follow Arrange-Act-Assert pattern
- Mock external dependencies
- Test happy path AND error cases
- Keep tests independent

### Structure
```javascript
describe('UserService', () => {
  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      // Arrange
      const email = 'user@example.com';
      
      // Act
      const result = validateEmail(email);
      
      // Assert
      expect(result).toBe(true);
    });

    it('should return false for invalid email', () => {
      const invalid = 'not-an-email';
      expect(validateEmail(invalid)).toBe(false);
    });
  });
});
```

### Test Coverage
- Aim for 80%+ coverage on critical code
- Focus on behavior coverage, not line coverage
- Don't chase 100% coverage
- Coverage tools: Jest, Vitest coverage

## Integration Testing

### What to Test
- Multiple components/modules working together
- Database interactions
- API endpoint behavior
- External service mocking

### Example
```javascript
describe('User API', () => {
  it('should create a user and return with id', async () => {
    const newUser = { email: 'test@example.com', name: 'Test' };
    const response = await createUser(newUser);
    
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.email).toBe(newUser.email);
  });
});
```

## E2E Testing

### What to Test
- Critical user workflows only
- Login → Create → Save → Logout
- Shopping cart checkout
- Form submission

### Principles
- Test real user actions
- Use real selectors (not test attributes)
- Independent tests (run in any order)
- Wait for elements, don't hardcode waits

```javascript
// Using Playwright
test('user can create and view post', async ({ page }) => {
  // Navigate
  await page.goto('http://localhost:3000');
  
  // Login
  await page.fill('[name=email]', 'user@example.com');
  await page.fill('[name=password]', 'password123');
  await page.click('button:has-text("Sign In")');
  
  // Create post
  await page.click(':text("New Post")');
  await page.fill('[name=title]', 'Test Post');
  await page.click('button:has-text("Publish")');
  
  // Verify
  await expect(page).toHaveTitle(/Test Post/);
});
```

## Mocking Strategies

### Unit Tests
```javascript
// Mock a module
jest.mock('axios');
axios.get.mockResolvedValue({ data: { id: 1 } });

// Mock a function
const mockFn = jest.fn().mockReturnValue('mocked');
```

### Integration Tests
```javascript
// Mock external API
nock('https://api.example.com')
  .get('/users/123')
  .reply(200, { id: 123, name: 'John' });
```

## Common Patterns

### Testing async code
```javascript
it('should fetch data', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```

### Testing errors
```javascript
it('should throw on invalid input', () => {
  expect(() => parseJSON('invalid')).toThrow();
});
```

### Testing React components
```javascript
import { render, screen } from '@testing-library/react';

it('should display greeting', () => {
  render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});
```

## Test Quality Checklist

- [ ] Tests are deterministic (always pass/fail same)?
- [ ] Tests run fast?
- [ ] Tests are independent (no ordering)?
- [ ] Test names describe intent?
- [ ] Mocks are appropriate?
- [ ] Error cases tested?
- [ ] Edge cases considered?
- [ ] Tests updated with code changes?

## Tools

| Tool | Purpose | Best For |
|------|---------|----------|
| Jest | Testing framework | Node.js, React |
| Vitest | Fast test runner | Vite projects |
| Playwright | E2E testing | Cross-browser |
| Testing Library | React testing | Component testing |
| Cypress | E2E testing | Interactive debugging |

## CI/CD Integration

```yaml
# GitHub Actions example
- name: Run tests
  run: npm test

- name: Upload coverage
  run: npm run coverage:upload
```
