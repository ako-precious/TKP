# The Kenyan Pantry

Authentic Kenyan groceries and flavours delivered across Barrie, Hamilton and the GTA.

## Local development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173 to view the site.

Run `npm run build` to create the production site in `dist`. Product and recipe
content lives in `src/data`; checkout and form delivery are clearly marked
integration points for a future backend.

## Editing products

Edit `src/data/products.json` to add, update, or delete catalog products.
Categories are generated automatically from each product's `category` value.
Keep every `id` unique, write prices as numbers without a dollar sign, and set
`featured` to `true` to display a product on the home page.
