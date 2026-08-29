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

export const SIDES = [
  'Pasta Salad',
  'Potato Salad',
  'Rice',
  'Macaroni Pie',
  'Garden Salad',
  'Corn',
  'Garlic Bread',
]

export const STORY = {
  owner: 'Janice Paris',
  paragraphs: [
    "Janice never planned on running a barbecue joint. Selling clothes, doing nails — sure. Feeding half of Cruz Bay off a smoker by the ferry dock wasn't the plan. She opened anyway, and calls the whole thing bigger than anything she could've mapped out herself.",
    "Love City BBQ picked up where a hurricane-shuttered island favorite left off, and locals will tell you the sides alone are worth the walk from the dock. Grab a seat at the bar, let the smoke do its thing, and don't rush it — this is island time BBQ.",
  ],
}
