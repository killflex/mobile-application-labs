export interface Product {
  id: string;
  name: string;
  category: 'culinary' | 'fashion' | 'instrument' | 'handicraft';
  price: number;
  region: string;
  description: string;
  image: string;
  materials?: string[];
  culturalStory?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const initialProducts: Product[] = [
  // Culinary
  {
    id: '1',
    name: 'Rendang',
    category: 'culinary',
    price: 75000,
    region: 'Padang, West Sumatra',
    description:
      'Traditional slow-cooked beef in rich coconut milk and spice mixture. Known as one of the most delicious foods in the world.',
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400',
    materials: ['Beef', 'Coconut Milk', 'Spices', 'Chili'],
    culturalStory:
      'Rendang is a ceremonial dish in Minangkabau culture, often served during special occasions and celebrations.',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Gudeg',
    category: 'culinary',
    price: 35000,
    region: 'Yogyakarta',
    description:
      'Sweet and savory jackfruit stew cooked in coconut milk and palm sugar, served with rice and various side dishes.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400',
    materials: ['Young Jackfruit', 'Coconut Milk', 'Palm Sugar', 'Spices'],
    culturalStory:
      'Gudeg is the soul food of Yogyakarta, representing the sweet and gentle nature of Javanese culture.',
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    name: 'Pempek',
    category: 'culinary',
    price: 45000,
    region: 'Palembang, South Sumatra',
    description:
      'Savory fishcake made from fish and tapioca, served with sweet and sour vinegar-based sauce.',
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400',
    materials: ['Fish', 'Tapioca Flour', 'Vinegar', 'Brown Sugar'],
    culturalStory:
      "Pempek has been a staple in Palembang for centuries, reflecting the city's rich maritime heritage.",
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17'),
  },

  // Fashion
  {
    id: '4',
    name: 'Batik Tulis',
    category: 'fashion',
    price: 850000,
    region: 'Solo, Central Java',
    description:
      'Hand-drawn batik fabric using traditional canting tool and wax-resist dyeing technique. Each piece is unique.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
    materials: ['Cotton', 'Natural Dyes', 'Wax'],
    culturalStory:
      'Batik Tulis is a UNESCO-recognized cultural heritage, with patterns carrying deep philosophical meanings.',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: '5',
    name: 'Songket',
    category: 'fashion',
    price: 1250000,
    region: 'Palembang, South Sumatra',
    description:
      'Luxurious hand-woven fabric with gold or silver threads creating intricate patterns.',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400',
    materials: ['Silk', 'Gold Thread', 'Silver Thread'],
    culturalStory:
      'Songket has been worn by Malay royalty for centuries, symbolizing wealth and prestige.',
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19'),
  },
  {
    id: '6',
    name: 'Ulos',
    category: 'fashion',
    price: 650000,
    region: 'North Sumatra',
    description:
      'Traditional Batak woven cloth with distinctive patterns, used in ceremonies and as a symbol of blessing.',
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=400',
    materials: ['Cotton', 'Natural Dyes'],
    culturalStory:
      'In Batak culture, Ulos is believed to bring warmth and protection, often given as a sacred gift.',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },

  // Musical Instruments
  {
    id: '7',
    name: 'Angklung',
    category: 'instrument',
    price: 350000,
    region: 'West Java',
    description:
      'Traditional bamboo musical instrument producing melodious sounds through shaking.',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400',
    materials: ['Bamboo'],
    culturalStory:
      'Angklung is a UNESCO Intangible Cultural Heritage, traditionally played in rice harvest ceremonies.',
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21'),
  },
  {
    id: '8',
    name: 'Sasando',
    category: 'instrument',
    price: 2500000,
    region: 'Rote, East Nusa Tenggara',
    description:
      'Unique stringed instrument with a distinctive fan-like shape, producing ethereal harp-like tones.',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400',
    materials: ['Bamboo', 'Palm Leaves', 'Strings'],
    culturalStory:
      'Legend says Sasando was inspired by the sound of wind blowing through palm leaves.',
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22'),
  },
  {
    id: '9',
    name: 'Kolintang',
    category: 'instrument',
    price: 4500000,
    region: 'North Sulawesi',
    description:
      'Traditional wooden xylophone-like percussion instrument producing bright melodic tones.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400',
    materials: ['Wood'],
    culturalStory:
      'Kolintang is central to Minahasan culture, often played in traditional dances and celebrations.',
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23'),
  },

  // Handicrafts
  {
    id: '10',
    name: 'Wayang Kulit',
    category: 'handicraft',
    price: 1800000,
    region: 'Central Java',
    description:
      'Traditional shadow puppet made from buffalo leather, intricately carved and painted.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400',
    materials: ['Buffalo Leather', 'Wood', 'Paint', 'Gold Leaf'],
    culturalStory:
      'Wayang Kulit performances tell ancient Hindu epics, recognized by UNESCO as a Masterpiece of Oral Heritage.',
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24'),
  },
  {
    id: '11',
    name: 'Keris',
    category: 'handicraft',
    price: 5000000,
    region: 'Java',
    description:
      'Traditional asymmetrical dagger with spiritual significance, featuring intricate damascus patterns.',
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400',
    materials: ['Steel', 'Nickel', 'Meteorite Iron', 'Wood'],
    culturalStory:
      'Keris is considered sacred in Javanese culture, believed to possess spiritual power and protect its owner.',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: '12',
    name: 'Tenun Ikat',
    category: 'handicraft',
    price: 950000,
    region: 'East Nusa Tenggara',
    description:
      'Traditional hand-woven textile using resist-dyeing technique on the yarns before weaving.',
    image: 'https://images.unsplash.com/photo-1569108091566-4d9c955a8ab0?w=400',
    materials: ['Cotton', 'Natural Dyes'],
    culturalStory:
      'Each Ikat pattern tells stories of ancestors and nature, passed down through generations in NTT communities.',
    createdAt: new Date('2024-01-26'),
    updatedAt: new Date('2024-01-26'),
  },
];
