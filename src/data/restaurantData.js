// ============================================================================
// 101 GRILLZ — restaurant data
// This is the single source of truth for the site. Menu items, prices and
// contact info were transcribed from the restaurant's real printed menu
// board photo. Arabic digits/labels can be tricky to OCR by eye — please
// proofread every price against your actual menu board before publishing,
// especially anything marked "verify".
// ============================================================================

export const restaurant = {
  name: '101 Grillz',
  tagline: 'Shawarma, smash burgers & fire-grilled favorites — done loud.',
  descriptionShort:
    "101 Grillz is a King Mariout shawarma-and-grill counter: hand-carved shawarma, smash-pressed burgers and charcoal grill, seasoned right on the flat-top and wrapped to go.",
  currency: 'EGP',

  phone: '01111503339',
  whatsapp: '01111503339',
  address: 'Kafouri Road, Mohamed Rashed Street Entrance, King Mariout',

  hours: {
    note: 'Verify exact daily hours — not shown on the printed menu.',
  },

  social: {
    instagram: 'https://www.instagram.com/101_grillz?igsh=a2RhaDcxNWQ3OGJ5',
    facebook: 'https://www.facebook.com/share/1GUvMPwWiK/?mibextid=wwXIfr',
    googleMaps: 'https://maps.app.goo.gl/aPtgGU8Bn5D7dbtEA?g_st=ic',
  },

  colors: {
    primary: '#DD2A1B', // ember red — from the storefront sign lettering
    secondary: '#171210', // char — near-black warm background
    accent: '#F2A71B', // flame gold — from the flame over the "0"
    background: '#171210',
    surface: '#231C18',
    textPrimary: '#F4ECE0',
    textSecondary: '#C9BFB0',
    cta: '#DD2A1B',
  },
}

// ----------------------------------------------------------------------------
// Menu categories, in board order
// ----------------------------------------------------------------------------
export const menuCategories = [
  { id: 'shawarma', label: 'Shawarma', labelAr: 'الشاورما' },
  { id: 'burgers', label: 'Burgers', labelAr: 'البرجر' },
  { id: 'grill', label: 'Charcoal Grill', labelAr: 'مشوي على الفحم' },
  { id: 'hawawshi', label: 'Hawawshi', labelAr: 'الحواوشي' },
  { id: 'fatteh', label: 'Fatteh', labelAr: 'الفتة' },
  { id: 'snackpack', label: 'Snack Packs', labelAr: 'Snack Pack' },
  { id: 'hotdogs', label: 'Hot Dogs', labelAr: 'هوت دوج ساندوتش' },
  { id: 'fries', label: 'Fries', labelAr: 'الفرايز' },
  { id: 'combos', label: 'Combos', labelAr: 'الكومبو' },
  { id: 'drinks', label: 'Drinks', labelAr: 'المشروبات' },
  { id: 'extras', label: 'Extras', labelAr: 'الإضافات' },
]

// Each item's `sizes` array holds { label, price } pairs so MenuCard can
// render one card with a size/price table instead of duplicating items.
export const menuItems = [
  // ---- Shawarma -----------------------------------------------------------
  {
    id: 'shawarma-chicken',
    category: 'shawarma',
    name: 'Chicken Shawarma',
    nameAr: 'شاورما فراخ',
    description: 'Hand-carved chicken shawarma, wrapped fresh to order.',
    image: 'shawarmaSandwiches',
    sizes: [
      { label: 'Egyptian', price: 65 },
      { label: 'Beiti Pan', price: 110 },
      { label: 'Syrian L', price: 105 },
      { label: 'Syrian XL', price: 135 },
    ],
  },
  {
    id: 'shawarma-meat',
    category: 'shawarma',
    name: 'Meat Shawarma',
    nameAr: 'شاورما لحم',
    description: 'Slow-shaved beef shawarma, wrapped fresh to order.',
    image: 'shawarmaSandwiches',
    sizes: [
      { label: 'Egyptian', price: 70 },
      { label: 'Beiti Pan', price: 120 },
      { label: 'Syrian L', price: 120 },
      { label: 'Syrian XL', price: 160 },
    ],
  },
  {
    id: 'shawarma-mix',
    category: 'shawarma',
    name: 'Mix Shawarma',
    nameAr: 'شاورما ميكس',
    description: 'Chicken and meat shawarma together in one wrap.',
    image: 'shawarmaSandwiches',
    featured: true,
    sizes: [
      { label: 'Egyptian', price: 70 },
      { label: 'Beiti Pan', price: 115 },
      { label: 'Syrian L', price: 110 },
      { label: 'Syrian XL', price: 145 },
    ],
  },
  {
    id: 'shawarma-quarter-chicken',
    category: 'shawarma',
    name: 'Quarter Kilo Chicken Shawarma',
    nameAr: 'ربع شاورما فراخ',
    description: 'Shawarma by weight — quarter kilo, unwrapped.',
    sizes: [{ label: 'Quarter kilo', price: 210 }],
  },
  {
    id: 'shawarma-quarter-meat',
    category: 'shawarma',
    name: 'Quarter Kilo Meat Shawarma',
    nameAr: 'ربع شاورما لحم',
    description: 'Shawarma by weight — quarter kilo, unwrapped.',
    sizes: [{ label: 'Quarter kilo', price: 235 }],
  },
  {
    id: 'shawarma-quarter-mix',
    category: 'shawarma',
    name: 'Quarter Kilo Mix Shawarma',
    nameAr: 'ربع شاورما مكس',
    description: 'Shawarma by weight — quarter kilo, unwrapped.',
    sizes: [{ label: 'Quarter kilo', price: 225 }],
  },

  // ---- Burgers -------------------------------------------------------------
  {
    id: 'burger-smash',
    category: 'burgers',
    name: 'Smash Burger',
    nameAr: 'سماش برجر',
    description: 'Smashed hard on the flat-top, seasoned right away, melted cheese.',
    image: 'ultimateSmashBurger',
    sizes: [{ label: 'Single', price: 120 }],
  },
  {
    id: 'burger-double',
    category: 'burgers',
    name: 'Double Smash',
    nameAr: 'دبل سماش',
    description: 'Two smashed patties, double cheese.',
    image: 'doubleCheeseburgerCrop',
    featured: true,
    sizes: [{ label: 'Double', price: 160 }],
  },
  {
    id: 'burger-triple',
    category: 'burgers',
    name: 'Triple Smash',
    nameAr: 'تريبل سماش',
    description: 'Three smashed patties, stacked and melted.',
    image: 'burgerCrispyJuicyMelty',
    sizes: [{ label: 'Triple', price: 190 }],
  },
  {
    id: 'burger-quattro',
    category: 'burgers',
    name: 'Quattro Smash',
    nameAr: 'سماش quattro',
    description: 'Four smashed patties for the seriously hungry.',
    sizes: [{ label: 'Quattro', price: 225 }],
  },

  // ---- Charcoal grill --------------------------------------------------------
  {
    id: 'grill-chicken',
    category: 'grill',
    name: 'Grilled Chicken (Half)',
    nameAr: 'فراخ مشوية',
    description: 'Half a chicken, charcoal-grilled.',
    sizes: [{ label: 'Half', price: 210 }],
  },
  {
    id: 'grill-mesahhab',
    category: 'grill',
    name: 'Mesahhab Chicken (Half)',
    nameAr: 'فراخ مسحب',
    description: 'Half a chicken, mesahhab style, charcoal-grilled.',
    sizes: [{ label: 'Half', price: 220 }],
  },
  {
    id: 'grill-shish-tawook',
    category: 'grill',
    name: 'Shish Tawook',
    nameAr: 'شيش طاووق',
    description: 'Skewered chicken, charcoal-grilled, sold by the half kilo.',
    sizes: [{ label: 'Half kilo', price: 280 }],
  },
  {
    id: 'grill-kofta',
    category: 'grill',
    name: 'Kofta',
    nameAr: 'كفتة',
    description: 'Seasoned ground meat kofta, charcoal-grilled.',
    sizes: [{ label: 'Third kilo', price: 265 }],
  },
  {
    id: 'grill-tarab',
    category: 'grill',
    name: 'Tarab',
    nameAr: 'طرب',
    sizes: [{ label: 'Third kilo', price: 285 }],
  },
  {
    id: 'grill-entrecote',
    category: 'grill',
    name: 'Entrecôte',
    nameAr: 'انتركوت',
    description: 'Charcoal-grilled entrecôte steak.',
    sizes: [{ label: 'Third kilo', price: 305 }],
  },
  {
    id: 'grill-filetto',
    category: 'grill',
    name: 'Filetto',
    nameAr: 'فيليتو',
    description: 'Charcoal-grilled beef fillet.',
    sizes: [{ label: 'Third kilo', price: 335 }],
  },

  // ---- Hawawshi --------------------------------------------------------------
  {
    id: 'hawawshi-meat',
    category: 'hawawshi',
    name: 'Meat Hawawshi',
    nameAr: 'حواوشي لحم',
    description: 'Spiced minced meat baked inside fresh baladi bread.',
    image: 'hawawshiPlate',
    featured: true,
    sizes: [{ label: 'Regular', price: 80 }],
  },
  {
    id: 'hawawshi-meat-cheese',
    category: 'hawawshi',
    name: 'Meat Hawawshi with Cheese',
    nameAr: 'حواوشي لحم بالجبنة',
    image: 'hawawshiPlate',
    sizes: [{ label: 'Regular', price: 95 }],
  },
  {
    id: 'hawawshi-sausage',
    category: 'hawawshi',
    name: 'Sausage Hawawshi',
    nameAr: 'حواوشي سجق',
    sizes: [{ label: 'Regular', price: 90 }],
  },

  // ---- Fatteh ------------------------------------------------------------
  {
    id: 'fatteh-chicken',
    category: 'fatteh',
    name: 'Chicken Shawarma Fatteh',
    nameAr: 'فتة شاورما فراخ',
    description: 'Layered rice, bread and shawarma over garlic-vinegar sauce.',
    image: 'fettahChickenPlate',
    featured: true,
    sizes: [
      { label: 'Large', price: 135 },
      { label: 'XL', price: 180 },
    ],
  },
  {
    id: 'fatteh-meat',
    category: 'fatteh',
    name: 'Meat Shawarma Fatteh',
    nameAr: 'فتة شاورما لحمة',
    image: 'fettahChickenPlate',
    sizes: [
      { label: 'Large', price: 155 },
      { label: 'XL', price: 200 },
    ],
  },
  {
    id: 'fatteh-mix',
    category: 'fatteh',
    name: 'Mix Shawarma Fatteh',
    nameAr: 'فتة شاورما ميكس',
    sizes: [
      { label: 'Large', price: 145 },
      { label: 'XL', price: 190 },
    ],
  },

  // ---- Snack packs ---------------------------------------------------------
  {
    id: 'snackpack-chicken',
    category: 'snackpack',
    name: 'Chicken Snack Pack',
    nameAr: 'سناك باك فراخ',
    description: 'Shawarma over fries with cheese sauce and your choice of spicy or regular sauce.',
    sizes: [
      { label: 'Large', price: 135 },
      { label: 'XL', price: 180 },
    ],
  },
  {
    id: 'snackpack-meat',
    category: 'snackpack',
    name: 'Meat Snack Pack',
    nameAr: 'سناك باك لحمة',
    description: 'Shawarma over fries with cheese sauce and your choice of spicy or regular sauce.',
    sizes: [
      { label: 'Large', price: 155 },
      { label: 'XL', price: 200 },
    ],
  },
  {
    id: 'snackpack-mix',
    category: 'snackpack',
    name: 'Mix Snack Pack',
    nameAr: 'سناك باك مكس',
    description: 'Shawarma over fries with cheese sauce and your choice of spicy or regular sauce.',
    sizes: [
      { label: 'Large', price: 145 },
      { label: 'XL', price: 190 },
    ],
  },

  // ---- Hot dogs (new) ------------------------------------------------------
  {
    id: 'hotdog',
    category: 'hotdogs',
    name: 'Hot Dog Sandwich',
    nameAr: 'هوت دوج',
    description: 'Juicy, grilled, loaded — your go-to sandwich.',
    image: 'hotdogSandwich',
    badge: 'New',
    sizes: [{ label: 'Regular', price: 95 }],
  },
  {
    id: 'hotdog-cheesy',
    category: 'hotdogs',
    name: 'Cheesy Hot Dog',
    nameAr: 'تشيزي هوت دوج',
    image: 'hotdogSandwich',
    badge: 'New',
    sizes: [{ label: 'Regular', price: 110 }],
  },

  // ---- Fries -----------------------------------------------------------------
  {
    id: 'fries-plain',
    category: 'fries',
    name: 'Plain Fries',
    nameAr: 'فرايز سادة',
    sizes: [{ label: 'Regular', price: 45 }],
  },
  {
    id: 'fries-cheese',
    category: 'fries',
    name: 'Cheese Fries',
    nameAr: 'تشيز فرايز',
    sizes: [{ label: 'Regular', price: 70 }],
  },
  {
    id: 'fries-101',
    category: 'fries',
    name: 'Fries 101',
    nameAr: 'فرايز 101',
    description: "The house loaded fries.",
    sizes: [{ label: 'Regular', price: 80 }],
  },

  // ---- Drinks ------------------------------------------------------------
  {
    id: 'drink-vcola',
    category: 'drinks',
    name: 'V Cola',
    nameAr: 'V Cola',
    sizes: [{ label: 'Bottle', price: 20 }],
  },
  {
    id: 'drink-water',
    category: 'drinks',
    name: 'Water',
    nameAr: 'مياه',
    sizes: [{ label: 'Bottle', price: 10 }],
  },

  // ---- Extras / add-ons -----------------------------------------------------
  {
    id: 'extra-garlic',
    category: 'extras',
    name: 'Garlic Sauce (Toumeya)',
    nameAr: 'ثومية',
    sizes: [{ label: 'Add-on', price: 20 }],
  },
  {
    id: 'extra-tahini',
    category: 'extras',
    name: 'Tahini',
    nameAr: 'طحينة',
    sizes: [{ label: 'Add-on', price: 20 }],
  },
  {
    id: 'extra-ranch',
    category: 'extras',
    name: 'Ranch Sauce',
    nameAr: 'رانش صوص',
    sizes: [{ label: 'Add-on', price: 20 }],
  },
  {
    id: 'extra-burger-sauce',
    category: 'extras',
    name: 'Burger Sauce',
    nameAr: 'برجر صوص',
    sizes: [{ label: 'Add-on', price: 20 }],
  },
  {
    id: 'extra-thousand-island',
    category: 'extras',
    name: 'Thousand Island',
    nameAr: 'ثاوزند ايلاند',
    sizes: [{ label: 'Add-on', price: 20 }],
  },
  {
    id: 'extra-pickles',
    category: 'extras',
    name: 'Pickles',
    nameAr: 'مخلل',
    sizes: [{ label: 'Add-on', price: 15 }],
  },
]

// ----------------------------------------------------------------------------
// Combos — each is a fixed bundle at one price, so they're modeled separately
// from menuItems rather than force-fit into the size/price table shape.
// ----------------------------------------------------------------------------
export const combos = [
  {
    id: 'combo-fries-drink',
    name: 'Fries + Drink',
    nameAr: 'فرايز + مشروب',
    price: 60,
  },
  {
    id: 'combo-hawawshi-3',
    name: '3 Meat Hawawshi + Pickle + Drink',
    nameAr: '٣ حواوشي لحمة + مخلل + مشروب',
    price: 175,
  },
  {
    id: 'combo-shawarma-mix',
    name: '3 Egyptian Chicken Shawarma + 1 Syrian Meat Shawarma',
    nameAr: '٣ شاورما فراخ مصري + ١ شاورما لحمة سوري',
    price: 225,
  },
  {
    id: 'combo-burger-hawawshi-shawarma',
    name: 'Smash Burger + Meat Hawawshi + Egyptian Chicken Shawarma + Fries',
    nameAr: 'سماش برجر + حواوشي لحمة + شاورما فراخ مصري + فرايز',
    price: 290,
  },
  {
    id: 'combo-shawarma-smash-deal',
    name: 'Syrian Chicken Shawarma + Double Smash + Fries & Drink',
    nameAr: 'شاورما فراخ سوري + دبل سماش + (فرايز + مشروب)',
    price: 305,
  },
  {
    id: 'combo-shawarma-4pc',
    name: '2 Egyptian Chicken Shawarma + 2 Egyptian Meat Shawarma',
    nameAr: '٢ شاورما فراخ مصري + ٢ شاورما لحمة مصري',
    price: 260,
  },
]

// ----------------------------------------------------------------------------
// Images — centralized so URLs never scatter through components.
// Swap any of these for a new upload without touching component code.
// ----------------------------------------------------------------------------
export const images = {
  logoSignage: '/images/logo/logo-signage-crop.jpg',
  heroBurger: '/images/food/double-cheeseburger-crop.jpg',
  ultimateSmashBurger: '/images/food/ultimate-smash-burger.jpg',
  burgerCrispyJuicyMelty: '/images/food/burger-crispy-juicy-melty.jpg',
  doubleCheeseburger: '/images/food/double-cheeseburger.jpg',
  doubleCheeseburgerCrop: '/images/food/double-cheeseburger-crop.jpg',
  hotdogSandwich: '/images/food/hotdog-sandwich.jpg',
  fettahChickenPlate: '/images/food/fettah-chicken-plate.jpg',
  shawarmaSandwiches: '/images/food/shawarma-sandwiches.jpg',
  hawawshiPlate: '/images/restaurant/hawawshi-plate.jpg',
  storefront01: '/images/restaurant/storefront-01.jpg',
  storefront02: '/images/restaurant/storefront-02.jpg',
  promoToastBuns: '/images/promo/toast-buns.jpg',
  promoAddPickles: '/images/promo/add-pickles.jpg',
  promoSeasonRightAway: '/images/promo/season-right-away.jpg',
  promoAddCheese: '/images/promo/add-cheese.jpg',
  promoSmashItHard: '/images/promo/smash-it-hard.jpg',
}

// Real Instagram-style process/promo shots, used in the Gallery as an
// authentic "from our grill" feed rather than stock photography.
export const galleryImages = [
  { src: images.promoSmashItHard, alt: 'Smashing a fresh patty on the flat-top' },
  { src: images.promoSeasonRightAway, alt: 'Seasoning a smash patty right on the grill' },
  { src: images.promoAddCheese, alt: 'Melting cheese over a smash patty' },
  { src: images.promoToastBuns, alt: 'Toasting buns in mayo on the flat-top' },
  { src: images.promoAddPickles, alt: 'Building a smash burger with pickles' },
  { src: images.hawawshiPlate, alt: 'Sliced meat hawawshi on a plate' },
  { src: images.storefront01, alt: '101 Grillz storefront sign' },
  { src: images.storefront02, alt: '101 Grillz storefront sign, street view' },
]
