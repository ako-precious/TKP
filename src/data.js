export const categories = [
  {
    name: 'Flours & Grains',
    products: [
      {
        name: 'Unga Wa Ugali',
        price: '$14.99',
        description: 'Classic maize flour for smooth, hearty ugali.',
        featured: true,
      },
      {
        name: 'Pishori Rice',
        price: '$22.99',
        description: 'Aromatic rice for pilau, biryani and everyday meals.',
        featured: true,
      },
      {
        name: 'Green Grams',
        price: '$8.99',
        description: 'Nutritious ndengu for stews, curries and sides.',
      },
    ],
  },
  {
    name: 'Tea, Spices & Seasoning',
    products: [
      {
        name: 'Kenyan Black Tea',
        price: '$9.99',
        description: 'Bold, fragrant tea for chai and breakfast blends.',
        featured: true,
      },
      {
        name: 'Pilau Masala',
        price: '$6.99',
        description: 'Warm spice blend for rice, meats and vegetables.',
        featured: true,
      },
      {
        name: 'Royco Mchuzi Mix',
        price: '$5.99',
        description: 'A pantry staple for rich Kenyan-style stews.',
      },
    ],
  },
  {
    name: 'Snacks & Pantry Favourites',
    products: [
      {
        name: 'Tropical Heat Crisps',
        price: '$4.49',
        description: 'Crunchy Kenyan snack packs in popular flavours.',
        featured: true,
      },
      {
        name: 'Blue Band Margarine',
        price: '$7.49',
        description: 'Great for bread, chapati and home baking.',
      },
      {
        name: 'Weetabix',
        price: '$8.49',
        description: 'A simple breakfast favourite for busy mornings.',
      },
    ],
  },
]

export const featuredProducts = categories
  .flatMap((category) => category.products.map((product) => ({ ...product, category: category.name })))
  .filter((product) => product.featured)
  .slice(0, 5)

export const recipes = [
  {
    title: 'Classic Ugali & Sukuma Wiki',
    cookTime: '35 min',
    ingredients: ['Unga wa ugali', 'Water', 'Sukuma wiki', 'Onion', 'Tomato', 'Salt'],
    instructions:
      'Boil salted water, stir in maize flour until firm, then cover briefly. Saute onion and tomato, add sliced sukuma wiki, season and serve hot with ugali.',
  },
  {
    title: 'Weeknight Pilau Rice',
    cookTime: '50 min',
    ingredients: ['Pishori rice', 'Pilau masala', 'Garlic', 'Ginger', 'Onion', 'Beef or vegetables'],
    instructions:
      'Brown onions with garlic and ginger, toast pilau masala, add beef or vegetables, then simmer with washed rice until tender and fragrant.',
  },
  {
    title: 'Kenyan Chai',
    cookTime: '15 min',
    ingredients: ['Kenyan black tea', 'Milk', 'Water', 'Sugar', 'Cardamom or ginger'],
    instructions:
      'Bring water, milk and spices to a gentle boil. Add tea leaves, simmer until deep in colour, sweeten to taste and strain into mugs.',
  },
]

export const whatsappLink =
  'https://wa.me/17055550123?text=Hi%20The%20Kenyan%20Pantry%2C%20I%27d%20like%20to%20place%20an%20order.'
