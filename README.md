# CRIMS Frontend Fixed

Updated Next.js frontend package with the duplicate `/login` route removed.

## Fix applied
- Removed conflicting `app/login/page.tsx`
- Kept `app/(auth)/login/page.tsx`
- Updated Next.js dependency to a patched 14.2.x release

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
