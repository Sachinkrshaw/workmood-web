# URL Routing Audit Report

## Base URL

- Assumed production origin for canonical and sitemap URLs: `https://workmood.in`

## URL Migrations

| Old URL | New URL | Files Modified |
| --- | --- | --- |
| `/contact page` | `/contact-us` | `public/shared-shell.js`, `public/index.html`, `public/workmood-app.html`, `public/contact-us.html`, `public/contact page.html`, `firebase.json`, `public/sitemap.xml`, `public/robots.txt` |
| `/Privacy Policy` | `/privacy-policy` | `public/shared-shell.js`, `public/account-deletion.html`, `public/privacy-policy.html`, `public/Privacy Policy.html`, `firebase.json`, `public/sitemap.xml`, `public/robots.txt` |
| `/Payments & Refund Policy` | `/payments-refund-policy` | `public/shared-shell.js`, `public/payments-refund-policy.html`, `public/Payments & Refund Policy.html`, `firebase.json`, `public/sitemap.xml`, `public/robots.txt` |
| `/Terms&Condi` | `/terms-and-conditions` | `public/shared-shell.js`, `public/account-deletion.html`, `public/terms-and-conditions.html`, `public/Terms&Condi.html`, `firebase.json`, `public/sitemap.xml`, `public/robots.txt` |
| `/index.html` | `/` | `public/shared-shell.js`, `public/index.html`, `firebase.json` |
| `/how-it-works.html` | `/how-it-works` | `public/shared-shell.js`, `public/how-it-works.html`, `firebase.json`, `public/sitemap.xml` |
| `/workmood-app.html` | `/workmood-app` | `public/shared-shell.js`, `public/index.html`, `public/how-it-works.html`, `public/workmood-app.html`, `firebase.json`, `public/sitemap.xml` |
| `/account-deletion.html` | `/account-deletion` | `public/shared-shell.js`, `public/privacy-policy.html`, `public/terms-and-conditions.html`, `public/account-deletion.html`, `firebase.json`, `public/sitemap.xml` |
| N/A | `/about-us` | `public/shared-shell.js`, `public/about-us.html`, `public/sitemap.xml` |

## Notes

- Legacy URLs now have both Firebase 301 redirects and static HTML redirect stubs for fallback compatibility.
- React Router routes were not present in this repo; the site is static HTML served from Firebase Hosting.
