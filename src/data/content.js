// Real facts about Love City BBQ & Grill, Cruz Bay, St. John, USVI.
// Sourced from Virgin Islands Daily News, local island guides, and public
// listings. Swap in exact current hours/menu from the owner if anything
// has changed since — small island kitchens shift with the season.

export const HOURS = [
  { day: 'Monday', open: null },
  { day: 'Tuesday', open: '10:00 AM until the smoke runs out' },
  { day: 'Wednesday', open: '10:00 AM until the smoke runs out' },
  { day: 'Thursday', open: '10:00 AM until the smoke runs out' },
  { day: 'Friday', open: '10:00 AM until the smoke runs out' },
  { day: 'Saturday', open: '10:00 AM until the smoke runs out' },
  { day: 'Sunday', open: '10:00 AM – 2:00 PM' },
]

// Kitchen closing time is "until it's gone" — for the live open/closed
// badge we use a reasonable last-call estimate. The bar runs later than
// the kitchen most nights.
export const KITCHEN_CLOSE_HOUR = 20 // 8pm estimate, adjust as needed

export const CONTACT = {
  phone: '(340) 715-5600',
  phoneHref: 'tel:+13407155600',
  address: '307 Cruz Bay Quarters, St. John, USVI 00830',
  landmark: 'A short walk from the Cruz Bay car ferry dock',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Love+City+BBQ+%26+Grill+Cruz+Bay+St+John+USVI',
  mapsEmbed: 'https://www.google.com/maps?q=Love+City+BBQ+%26+Grill,+Cruz+Bay,+St+John,+USVI&output=embed',
  facebook: 'https://www.facebook.com/p/Love-City-BBQ-100093145575801/',
}

export const MAINS = [
  { name: 'BBQ Chicken', note: 'Slow over real wood, sauced to order' },
  { name: 'Jerk Chicken', note: 'Island heat, done right' },
  { name: 'BBQ Ribs', note: 'Fall-off-the-bone, the one people drive back for' },
  { name: 'Steak', note: 'Off the grill, no fuss' },
  { name: 'Salmon', note: 'For the one at the table who "doesn\'t really do BBQ"' },
  { name: 'Pigtail', note: 'Every other Sunday — ask if it\'s the week', special: true },
]

// icon keys map to the illustrated icon set in components/Illustrations.jsx
export const SIDES = [
  { name: 'Pasta Salad', icon: 'pasta' },
  { name: 'Potato Salad', icon: 'potato' },
  { name: 'Rice', icon: 'rice' },
  { name: 'Macaroni Pie', icon: 'macpie' },
  { name: 'Garden Salad', icon: 'garden' },
  { name: 'Corn', icon: 'corn' },
  { name: 'Garlic Bread', icon: 'bread' },
]

export const STORY = {
  owner: 'Janice',
  paragraphs: [
    "Janice never planned on running a barbecue joint. Selling clothes, doing nails — sure. Feeding half of Cruz Bay off a smoker by the ferry dock wasn't the plan. She opened anyway, and calls the whole thing bigger than anything she could've mapped out herself.",
    "Love City BBQ picked up where a hurricane-shuttered island favorite left off, and locals will tell you the sides alone are worth the walk from the dock. Grab a seat at the bar, let the smoke do its thing, and don't rush it — this is island time BBQ.",
  ],
}

// Alternating image/text story sections, in display order.
export const STORY_BLOCKS = [
  {
    eyebrow: 'Not The Plan, But Here We Are',
    heading: 'Run by ',
    emphasis: 'Janice',
    headingEnd: ', fueled by real fire.',
    paragraphs: [STORY.paragraphs[0]],
    image: '/images/janice.webp',
    alt: 'Janice behind the bar at Love City BBQ',
    imageSide: 'left',
  },
  {
    eyebrow: 'Straight Off The Smoker',
    heading: '',
    emphasis: 'Real wood.',
    headingEnd: ' Real time. No shortcuts.',
    paragraphs: [
      "Nothing here is rushed. The chicken and ribs sit low and slow over real wood until the smoke does the seasoning for you — no gas, no shortcuts, no apologies for how long it takes.",
      "Sauce goes on when it's ready, not before. Ask for it on the side if you're particular about that kind of thing — nobody here will judge you for it.",
    ],
    image: '/images/gallery-2.jpg',
    alt: 'BBQ chicken plate with mac and rice',
    imageSide: 'right',
  },
  {
    eyebrow: 'Bigger Than The Storm',
    heading: '',
    emphasis: 'Community first',
    headingEnd: ', plate second.',
    paragraphs: [STORY.paragraphs[1]],
    image: '/images/gallery-3.webp',
    alt: 'BBQ plate with mac, pasta salad, and coleslaw',
    imageSide: 'left',
  },
]

export const FEATURES = [
  { label: 'Walk-Up Window', icon: '🪟' },
  { label: 'Dine-In At The Bar', icon: '🍹' },
  { label: 'Catering', icon: '🔥' },
  { label: 'Cash & Card', icon: '💳' },
]

// Placeholder reviews written in the site's voice, formatted the way real
// Google/Facebook reviews will be shown (star rating, quote, first name +
// last initial). Swap these for actual guest reviews before launch —
// same idea as the PhotoSlot fallbacks standing in for real photos.
export const TESTIMONIALS = [
  {
    name: 'Marcus T.',
    quote:
      "Walked up straight off the ferry not knowing what to expect. Ribs were fall-apart tender and the mac pie disappeared before the ribs did.",
  },
  {
    name: 'Danielle R.',
    quote:
      "Best plate on the island, hands down. No reservation, no fuss, just a barstool and real barbecue.",
  },
  {
    name: 'Owen K.',
    quote:
      "Got the pigtail on a lucky Sunday. If you see it on the board, order it — don't think twice.",
  },
]

export const FAQS = [
  {
    q: 'Do you take reservations?',
    a: 'No — walk up, grab a stool at the bar, and order at the window. First come, first served, same as everyone else off the ferry.',
  },
  {
    q: 'What are you known for?',
    a: 'The ribs and the sides — pasta salad and macaroni pie disappear first. Pigtail shows up every other Sunday if you know to ask.',
  },
  {
    q: 'Where are you located?',
    a: `${CONTACT.address} — ${CONTACT.landmark.toLowerCase()}.`,
  },
  {
    q: 'Do you do catering?',
    a: 'Yes — call ahead with a headcount for boats, weddings on the beach, or anything bigger than a table for four.',
  },
  {
    q: 'Is there parking?',
    a: "Most people walk up from the ferry or downtown Cruz Bay — it's a short walk, and easier than finding a spot.",
  },
]
