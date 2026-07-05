# Ziko_Notion

Professional Notion creator website built with Next.js App Router, TypeScript,
Tailwind CSS, and Motion.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Edit template data

All marketplace products live in:

```txt
src/data/templates.ts
```

Update each product's `title`, `category`, `description`, `price`, `image`,
`link`, and `featured` fields there. The `link` field is already separated so
each product can later point to its own marketplace page.

## Replace template images

Template thumbnails are loaded from:

```txt
public/templates
```

Each card displays a 200x200 thumbnail with `object-fit: cover`. Replace the
placeholder PNG files with real images using the same filenames from
`src/data/templates.ts`, or update the `image` value in the data file.

If an image is missing, the card shows a styled fallback so the marketplace
still looks polished.

## Add customer review screenshots

Put Notion Marketplace review screenshots in:

```txt
public/reviews
```

Use these filenames:

```txt
notion-marketplace-review-1.png
notion-marketplace-review-2.png
notion-marketplace-review-3.png
```

The reviews section shows a polished fallback until those screenshots exist.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

This version has no backend, database, authentication, or payments.
