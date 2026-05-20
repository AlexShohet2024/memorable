
export const VENUE = {
  name: "Villa Maria Del Mar",
  address: "21918 E Cliff Dr, Santa Cruz, CA 95062",
  phone: "(831) 475-1236",
  mapsUrl: "https://maps.google.com/?q=Villa+Maria+Del+Mar+Santa+Cruz",
  rules: ["Be respectful of the space and fellow guests", "This is a sober space — please honor that", "Keep noise considerate during quiet hours"],
  rooms: [
    { name: "Main Chapel",   description: "Primary space for sessions and speakers" },
    { name: "Fireside Room", description: "Small group discussions, 15-person max" },
    { name: "Dining Hall",   description: "All meals and casual gathering" },
    { name: "Garden",        description: "Outdoor space — bring a layer in the morning" },
  ],
}
export const EMERGENCY_CONTACTS = [
  { name: "Jordan Smith",        role: "Host",       phone: "+13107456161", display: "(310) 745-6161" },
  { name: "Alex Shohet",         role: "Backup",     phone: "+13238999115", display: "(323) 899-9115" },
  { name: "Villa Maria Del Mar", role: "Front Desk", phone: "+18314751236", display: "(831) 475-1236" },
  { name: "Emergency Services",  role: "911",        phone: "911",          display: "911" },
]
export const MEDICAL = [
  { name: "Dominican Hospital", type: "Emergency Room", address: "1555 Soquel Dr, Santa Cruz",  phone: "(831) 462-7700", distance: "3.5 miles", mapsUrl: "https://maps.google.com/?q=Dominican+Hospital+Santa+Cruz" },
  { name: "PAMF Urgent Care",   type: "Urgent Care",    address: "2025 Soquel Ave, Santa Cruz", phone: "(831) 425-2000", distance: "3 miles",   mapsUrl: "https://maps.google.com/?q=2025+Soquel+Ave+Santa+Cruz" },
  { name: "Walgreens",          type: "24-Hr Pharmacy", address: "1535 41st Ave, Capitola",     phone: "(831) 476-9420", distance: "0.8 miles", mapsUrl: "https://maps.google.com/?q=Walgreens+1535+41st+Ave+Capitola" },
]
export const ERRANDS = [
  { category: "Pharmacy", items: [
    { name: "Walgreens", address: "1535 41st Ave, Capitola", hours: "24 hours", mapsUrl: "https://maps.google.com/?q=Walgreens+Capitola" },
    { name: "CVS",        address: "1740 41st Ave, Capitola", hours: "8am-10pm", mapsUrl: "https://maps.google.com/?q=CVS+Capitola" },
  ]},
  { category: "Grocery", items: [
    { name: "New Leaf Market", address: "2351 Mission St, Santa Cruz", hours: "7am-9pm",  mapsUrl: "https://maps.google.com/?q=New+Leaf+Market+Santa+Cruz" },
    { name: "Safeway",         address: "3250 Mission St, Santa Cruz", hours: "6am-11pm", mapsUrl: "https://maps.google.com/?q=Safeway+Mission+St+Santa+Cruz" },
  ]},
  { category: "Coffee", items: [
    { name: "Verve Coffee",    address: "1540 Pacific Ave, Santa Cruz", hours: "6am-7pm", mapsUrl: "https://maps.google.com/?q=Verve+Coffee+Santa+Cruz" },
    { name: "Cat and Cloud",   address: "3600 Portola Dr, Santa Cruz",  hours: "6am-6pm", mapsUrl: "https://maps.google.com/?q=Cat+and+Cloud+Coffee+Santa+Cruz" },
  ]},
]
export const RESTAURANTS = [
  { name: "Gayles Bakery",     cuisine: "Bakery",   address: "504 Bay Ave, Capitola",        distance: "1 mi",   mapsUrl: "https://maps.google.com/?q=Gayles+Bakery+Capitola" },
  { name: "Shadowbrook",       cuisine: "American", address: "1750 Wharf Rd, Capitola",      distance: "1.2 mi", mapsUrl: "https://maps.google.com/?q=Shadowbrook+Restaurant+Capitola" },
  { name: "Pizza My Heart",    cuisine: "Pizza",    address: "Capitola Village",             distance: "1 mi",   mapsUrl: "https://maps.google.com/?q=Pizza+My+Heart+Capitola" },
  { name: "Tacos Moreno",      cuisine: "Mexican",  address: "1053 Water St, Santa Cruz",    distance: "3 mi",   mapsUrl: "https://maps.google.com/?q=Tacos+Moreno+Santa+Cruz" },
  { name: "Lupulo Beer House", cuisine: "American", address: "233 Cathcart St, Santa Cruz",  distance: "3.5 mi", mapsUrl: "https://maps.google.com/?q=Lupulo+Santa+Cruz" },
]
export const SIGHTS = [
  { name: "Pleasure Point Beach",        type: "Beach",        description: "Iconic surf spot, 5-min walk from the venue",    mapsUrl: "https://maps.google.com/?q=Pleasure+Point+Santa+Cruz" },
  { name: "Capitola Village",            type: "Village",      description: "Charming beach town with shops and cafes",       mapsUrl: "https://maps.google.com/?q=Capitola+Village" },
  { name: "Natural Bridges State Beach", type: "Beach + Hike", description: "Monarch butterfly sanctuary and arch rock",      mapsUrl: "https://maps.google.com/?q=Natural+Bridges+State+Beach" },
  { name: "West Cliff Drive",            type: "Walk",         description: "Scenic coastal path with panoramic ocean views", mapsUrl: "https://maps.google.com/?q=West+Cliff+Drive+Santa+Cruz" },
  { name: "Santa Cruz Wharf",            type: "Landmark",     description: "Historic pier with sea lions and bay views",     mapsUrl: "https://maps.google.com/?q=Santa+Cruz+Wharf" },
]
export const AA_MEETINGS = [
  { name: "Serenity Group",     time: "7:00 AM daily",  location: "226 Cathcart St, Santa Cruz", type: "Open", mapsUrl: "https://maps.google.com/?q=226+Cathcart+St+Santa+Cruz" },
  { name: "Daily Reflections",  time: "7:30 AM daily",  location: "444 Encinal St, Santa Cruz",  type: "Open", mapsUrl: "https://maps.google.com/?q=444+Encinal+St+Santa+Cruz" },
  { name: "Santa Cruz Central", time: "12:00 PM daily", location: "1111 Soquel Ave, Santa Cruz", type: "Open", mapsUrl: "https://maps.google.com/?q=1111+Soquel+Ave+Santa+Cruz" },
  { name: "Evening Group",      time: "7:00 PM daily",  location: "226 Cathcart St, Santa Cruz", type: "Open", mapsUrl: "https://maps.google.com/?q=226+Cathcart+St+Santa+Cruz" },
]
