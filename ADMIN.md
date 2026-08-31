# MISF Admin

The private admin is available at `/admin`.

Required server environment variables:

```bash
ADMIN_PASSWORD="use-a-long-password"
ADMIN_SESSION_SECRET="use-a-different-random-token-at-least-32-characters-long"
```

Optional Airtable environment variables:

```bash
AIRTABLE_TOKEN="pat..."
AIRTABLE_BASE_ID="app..."
AIRTABLE_TABLE_NAME="Content"
```

Optional public analytics variables:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="google-search-console-verification-token"
```

The analytics component is included but remains inactive until a valid Google Analytics Measurement ID is set. The Search Console verification tag is added only when the verification token is set.

Security notes:

- `/admin` and `/api/admin/*` require a signed, HttpOnly session cookie. The admin API also rejects cross-site writes.
- The session cookie is HttpOnly, SameSite strict, and secure in production.
- Airtable keys are only read on the server and are not exposed to public pages.
- Public news no longer fetches Airtable directly.
- This deployment does not contain a source-file editor. News records are stored in Airtable; uploaded CMS images are stored in Vercel Blob.
- Never commit `.env*`, Airtable tokens, Blob tokens, or the admin password. Add them only in the hosting provider's encrypted environment-variable settings.
