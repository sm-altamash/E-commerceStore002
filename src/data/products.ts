
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cosmic Laptop Pro",
    price: 1299.99,
    description: "Ultra-thin laptop with stellar performance",
    fullDescription: "Experience the universe of computing with the Cosmic Laptop Pro. This ultra-thin powerhouse features a stunning 4K display, lightning-fast processor, and all-day battery life. Perfect for creative professionals and tech enthusiasts who demand the best. The aerospace-grade aluminum body ensures durability while maintaining an elegant, lightweight design.",
    image: "/placeholder.svg",
    category: "Laptops",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Nebula Smartphone",
    price: 899.99,
    description: "Advanced smartphone with revolutionary camera",
    fullDescription: "Capture the beauty of the cosmos with the Nebula Smartphone. Its revolutionary camera system lets you take professional-quality photos of the night sky. Powered by the latest AI technology, this phone anticipates your needs and adapts to your usage patterns. The edge-to-edge OLED display offers vibrant colors and deep blacks for an immersive viewing experience.",
    image: "/placeholder.svg",
    category: "Smartphones",
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Orbit Wireless Earbuds",
    price: 149.99,
    description: "Immersive sound with active noise cancellation",
    fullDescription: "Escape into your own orbit with these premium wireless earbuds. Featuring active noise cancellation technology, they block out the world so you can focus on what matters. The custom-designed drivers deliver rich bass and crystal-clear highs, while the ergonomic design ensures a comfortable fit for all-day wear. With 30 hours of total battery life with the charging case, your music never stops.",
    image: "/placeholder.svg",
    category: "Audio",
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Gravity Smart Watch",
    price: 249.99,
    description: "Health and fitness tracking with stylish design",
    fullDescription: "Defy gravity with this lightweight yet powerful smartwatch. Track your fitness goals, monitor your health metrics, and stay connected wherever you go. The always-on display adjusts to lighting conditions, ensuring optimal visibility indoors and out. With water resistance up to 50 meters and durable sapphire crystal glass, this watch is built for adventure.",
    image: "/placeholder.svg",
    category: "Wearables",
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Stellar Tablet",
    price: 499.99,
    description: "Vibrant display perfect for work and entertainment",
    fullDescription: "Bring your ideas to life on the Stellar Tablet's vibrant 12-inch display. Whether you're sketching designs, taking notes, or enjoying your favorite shows, this tablet delivers exceptional performance in a sleek package. The included stylus offers pressure sensitivity for precise control, while the keyboard attachment transforms it into a productive workstation in seconds.",
    image: "/placeholder.svg",
    category: "Tablets",
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Pulsar Gaming Headset",
    price: 129.99,
    description: "Immersive audio for the ultimate gaming experience",
    fullDescription: "Feel every pulse of the action with this premium gaming headset. The 3D audio technology helps you pinpoint enemy locations, while the noise-canceling microphone ensures your teammates hear you clearly. Designed for comfort during long gaming sessions, the memory foam ear cushions and adjustable headband reduce fatigue. Compatible with all major gaming platforms for seamless integration into your setup.",
    image: "/placeholder.svg",
    category: "Gaming",
    rating: 4.7,
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Galaxy Wireless Charger",
    price: 59.99,
    description: "Fast wireless charging for all compatible devices",
    fullDescription: "Power up your devices at warp speed with this sleek wireless charging pad. The innovative coil design ensures efficient energy transfer, while the smart chip prevents overheating and optimizes charging rates for different devices. The non-slip surface keeps your phone secure, and the ambient LED indicator lets you know charging status at a glance without being distracting at night.",
    image: "/placeholder.svg",
    category: "Accessories",
    rating: 4.3,
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Quantum Bluetooth Speaker",
    price: 199.99,
    description: "Room-filling sound in a compact, portable design",
    fullDescription: "Experience quantum leaps in audio quality with this powerful Bluetooth speaker. Despite its compact size, it fills any room with rich, detailed sound across the full frequency spectrum. The waterproof design makes it perfect for pool parties or beach trips, while the 24-hour battery life keeps the music playing all day and night. Connect multiple speakers for an immersive stereo or multi-room sound experience.",
    image: "/placeholder.svg",
    category: "Audio",
    rating: 4.5,
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Eclipse Smart Home Hub",
    price: 129.99,
    description: "Central control for all your smart home devices",
    fullDescription: "Bring all your smart home devices into perfect alignment with the Eclipse Smart Home Hub. This central command station connects to all major smart home ecosystems, allowing you to control lights, thermostats, security cameras, and more from a single interface. The advanced AI assistant learns your preferences and routines over time, automating common tasks and suggesting helpful optimizations for your connected lifestyle.",
    image: "/placeholder.svg",
    category: "Smart Home",
    rating: 4.2,
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Nova Fitness Tracker",
    price: 89.99,
    description: "Complete health monitoring for active lifestyles",
    fullDescription: "Ignite your fitness journey with the Nova Tracker. This sleek wristband monitors heart rate, sleep quality, stress levels, and activity metrics to give you a complete picture of your health. The companion app provides personalized coaching based on your data, helping you reach your goals faster. With a 7-day battery life and quick-charge capability, it keeps up with your active lifestyle without frequent charging breaks.",
    image: "/placeholder.svg",
    category: "Wearables",
    rating: 4.4,
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Comet Portable SSD",
    price: 179.99,
    description: "Lightning-fast storage in a pocket-sized device",
    fullDescription: "Transfer data at the speed of light with the Comet Portable SSD. This pocket-sized storage solution offers 1TB of space and read/write speeds up to 1050MB/s, perfect for creative professionals who work with large files. The shock-resistant, aluminum casing protects your data from drops and bumps, while the USB-C connection ensures compatibility with the latest laptops and devices.",
    image: "/placeholder.svg",
    category: "Storage",
    rating: 4.6,
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Astral VR Headset",
    price: 399.99,
    description: "Immersive virtual reality experience with precision tracking",
    fullDescription: "Step into new dimensions with the Astral VR Headset. The high-resolution displays and 120Hz refresh rate create stunningly realistic virtual environments without motion blur. The advanced tracking system follows your movements with millimeter precision, while the balanced, ergonomic design ensures comfort during extended sessions. With a growing library of games, fitness applications, and creative tools, this headset opens up limitless possibilities.",
    image: "/placeholder.svg",
    category: "VR",
    rating: 4.8,
    inStock: false,
    featured: false
  }
];

export default products;
