const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.6682, 34.0259]
    },
    "review": [ObjectId('6802279fff73bd947ca4d1f3')],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 1
  },
  {

    "title": "Modern Loft in Downtown",
    "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    "image": {
      "URL": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1200,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.0060, 40.7128]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Mountain Retreat",
    "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1000,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8172, 39.1911]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Historic Villa in Tuscany",
    "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 2500,
    "location": "Florence",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2558, 43.7696]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Secluded Treehouse Getaway",
    "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.6765, 45.5231]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Beachfront Paradise",
    "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 2000,
    "location": "Cancun",
    "country": "Mexico",
    "geometry": {
      "type": "Point",
      "coordinates": [-86.8515, 21.1619]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Rustic Cabin by the Lake",
    "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 900,
    "location": "Lake Tahoe",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-120.0324, 39.0968]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Luxury Penthouse with City Views",
    "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 3500,
    "location": "Los Angeles",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.2437, 34.0522]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Ski-In/Ski-Out Chalet",
    "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 3000,
    "location": "Verbier",
    "country": "Switzerland",
    "geometry": {
      "type": "Point",
      "coordinates": [7.2266, 46.1009]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Safari Lodge in the Serengeti",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 4000,
    "location": "Serengeti National Park",
    "country": "Tanzania",
    "geometry": {
      "type": "Point",
      "coordinates": [34.8222, -2.3333]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Historic Canal House",
    "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "geometry": {
      "type": "Point",
      "coordinates": [4.8952, 52.3702]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Private Island Retreat",
    "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 10000,
    "location": "Fiji",
    "country": "Fiji",
    "geometry": {
      "type": "Point",
      "coordinates": [178.0650, -17.7134]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Charming Cottage in the Cotswolds",
    "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1200,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [-1.7667, 51.8333]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Historic Brownstone in Boston",
    "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 2200,
    "location": "Boston",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.0589, 42.3601]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Beachfront Bungalow in Bali",
    "description": "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1800,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [115.1889, -8.4095]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Mountain View Cabin in Banff",
    "description": "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1500,
    "location": "Banff",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [-115.5708, 51.1784]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Art Deco Apartment in Miami",
    "description": "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    "image": {
      "URL": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 1600,
    "location": "Miami",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.1918, 25.7617]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Tropical Villa in Phuket",
    "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 3000,
    "location": "Phuket",
    "country": "Thailand",
    "geometry": {
      "type": "Point",
      "coordinates": [98.3381, 7.8804]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Historic Castle in Scotland",
    "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 4000,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    "geometry": {
      "type": "Point",
      "coordinates": [-4.8639, 57.4778]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  },
  {

    "title": "Desert Oasis in Dubai",
    "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    "image": {
      "URL": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "filename": "wanderslust"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    },
    "review": [],
    "owner": ObjectId('67f9fdd9825dd6e8e05b42e5'),
    "__v": 0
  }
];

module.exports = { data: sampleListings };