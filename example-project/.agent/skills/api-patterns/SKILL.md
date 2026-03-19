---
name: api-patterns
description: RESTful API design patterns, conventions, and best practices for building scalable APIs. Use when designing APIs, implementing endpoints, or reviewing API design. Triggers on keywords like "API", "endpoint", "REST", "GraphQL", "tRPC", "request", "response", "route", "controller", "service".
---

# API Design Patterns & Best Practices

## REST API Principles

### Resource-Oriented Design
- Use nouns for resources (not verbs)
- Use HTTP methods correctly (GET, POST, PUT, DELETE, PATCH)
- Organize endpoints hierarchically
- Use plural names for collections

```
Good: POST /users, GET /users/123
Bad: POST /createUser, GET /getUser?id=123
```

### HTTP Status Codes
- 200 OK - Successful GET, PUT, PATCH
- 201 Created - Successful POST
- 204 No Content - Successful DELETE
- 400 Bad Request - Invalid input
- 401 Unauthorized - Auth required
- 403 Forbidden - Authorized but denied
- 404 Not Found - Resource not found
- 500 Internal Server Error - Server error

### Request/Response Format
- Use consistent JSON formatting
- Include metadata in responses (total count, page, etc.)
- Version your API (`/v1/users`)
- Use consistent naming (camelCase or snake_case)

```json
{
  "data": { /* ... */ },
  "meta": { "total": 100, "page": 1 },
  "errors": []
}
```

## Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
```

### Common Error Codes
- VALIDATION_ERROR - Input validation failed
- AUTHENTICATION_ERROR - Auth failed
- AUTHORIZATION_ERROR - Permission denied
- NOT_FOUND - Resource not found
- CONFLICT - Resource conflict (duplicate key)
- RATE_LIMITED - Rate limit exceeded
- SERVER_ERROR - Internal server error

## Security

- Authenticate all protected endpoints
- Validate and sanitize all inputs
- Use HTTPS for all API endpoints
- Implement rate limiting
- Use API keys or OAuth2 tokens
- Log security events
- Add CORS headers properly

## Pagination

```javascript
// Query params
GET /users?page=1&limit=20&sort=name

// Response
{
  "data": [ /* ... */ ],
  "pagination": {
    "total": 500,
    "page": 1,
    "limit": 20,
    "pages": 25
  }
}
```

## Filtering & Sorting

```javascript
// Filtering
GET /users?status=active&role=admin

// Sorting
GET /users?sort=name,-created_at

// Combined
GET /users?status=active&sort=name&page=1&limit=20
```

## Versioning

- Use URL versioning: `/v1/users`, `/v2/users`
- Maintain backward compatibility for 2 major versions
- Communicate deprecation clearly
- Plan migration path for clients

## API Documentation

- Use OpenAPI/Swagger specification
- Include examples for each endpoint
- Document error responses
- Document auth requirements
- Keep docs in sync with code

## Checklist
- [ ] Resources named correctly?
- [ ] HTTP methods used correctly?
- [ ] Status codes appropriate?
- [ ] Error handling consistent?
- [ ] Inputs validated?
- [ ] Security headers present?
- [ ] Rate limiting implemented?
- [ ] Documented with OpenAPI?
