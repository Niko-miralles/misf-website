# MISF Admin

The private admin is available at `/admin`.

Required server environment variables:

```bash
ADMIN_PASSWORD="use-a-long-password"
ADMIN_SESSION_TOKEN="use-a-different-random-token"
```

Optional Airtable environment variables:

```bash
AIRTABLE_TOKEN="pat..."
AIRTABLE_BASE_ID="app..."
AIRTABLE_TABLE_NAME="Content"
```

Security notes:

- `/admin` and `/api/admin/*` are protected by middleware.
- The session cookie is HttpOnly, SameSite strict, and secure in production.
- Airtable keys are only read on the server and are not exposed to public pages.
- Public news no longer fetches Airtable directly.
- The page editor writes source files. On read-only hosts, save locally and redeploy.
