# Security review

**Date:** 2026-10-21  
**Scope:** External content and URL inputs, upload handling, and rendering paths.

| Severity | Location | Finding | Status |
|---|---|---|---|
| MEDIUM | `app/api/upload/route.js` | The unauthenticated upload endpoint previously saved arbitrary file bytes under `public/uploads`, allowing HTML or script-capable files to be served from the site's origin. | Fixed: only PNG, JPG, and WebP signatures are accepted, and saved filenames use generated IDs with fixed extensions. |

No other actionable external-link or content-injection issue was found in the reviewed paths. User-entered text is rendered as React text, and the upload route does not accept arbitrary URLs.
