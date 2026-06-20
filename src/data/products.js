import productData from './products.json'

// Edit products.json to add, update, or remove products.
export const products = productData

// Categories are generated automatically from the product records.
export const categories = ['All', ...new Set(products.map((product) => product.category))]

export const featuredProducts = products.filter((product) => product.featured)
