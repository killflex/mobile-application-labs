# Lokal - Traditional Indonesian Product Catalog

![Lokal Banner](https://img.shields.io/badge/React%20Native-0.81.5-blue) ![Expo](https://img.shields.io/badge/Expo-54.0.0-black) ![NativeWind](https://img.shields.io/badge/NativeWind-Latest-38bdf8)

A beautiful React Native mobile application built with Expo and NativeWind for cataloging and discovering traditional Indonesian products, including culinary delights, traditional fashion, musical instruments, and handicrafts.

## 🌟 Features

- ✨ **Beautiful Splash Screen** - Welcoming users with a smooth animated introduction
- 📱 **Product Catalog** - Browse through a collection of local Indonesian products
- 🔍 **Category Filtering** - Filter products by Culinary, Fashion, Instruments, and Handicrafts
- ➕ **Add Products** - Create new product entries with images and detailed information
- ✏️ **Edit Products** - Update existing product details
- 🗑️ **Delete Products** - Remove products with confirmation dialog
- 📸 **Image Selection** - Pick images from gallery or camera
- 📖 **Cultural Stories** - Learn about the cultural significance of each product
- 🎨 **Modern UI** - Clean, responsive design using NativeWind (TailwindCSS)
- 📱 **Cross-Platform** - Works on both iOS and Android

## 📸 Screenshots

_Add your screenshots here after running the app_

## 🛠️ Tech Stack

- **React Native** (0.81.5) - Mobile application framework
- **Expo** (~54.0.0) - Development platform
- **TypeScript** (~5.9.2) - Type-safe JavaScript
- **NativeWind** (Latest) - TailwindCSS for React Native
- **React Navigation** (^6.x) - Navigation library
- **Expo Image Picker** - Image selection functionality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)
- Git

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd my-expo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android)
   - Scan the QR code with Camera app (iOS)

   Or use these commands:

   ```bash
   npm run android  # Run on Android emulator
   npm run ios      # Run on iOS simulator
   npm run web      # Run in web browser
   ```

## 📁 Project Structure

```
my-expo-app/
├── assets/              # Images and static assets
├── components/          # Reusable components
│   ├── ProductCard.tsx  # Product card component
│   ├── Container.tsx
│   └── ...
├── context/             # React Context for state management
│   └── ProductContext.tsx
├── navigation/          # Navigation configuration
│   └── AppNavigator.tsx
├── screens/             # Application screens
│   ├── SplashScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ProductDetailScreen.tsx
│   ├── AddProductScreen.tsx
│   ├── EditProductScreen.tsx
│   └── AboutScreen.tsx
├── utils/               # Utility functions and static data
│   ├── staticData.ts    # Initial product data
│   └── helpers.ts       # Helper functions
├── App.tsx              # Main application component
├── global.css           # Global styles
├── tailwind.config.js   # TailwindCSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Product Categories

The app supports four main categories:

1. **🍛 Culinary** - Traditional Indonesian foods and dishes
2. **👗 Fashion** - Traditional clothing and textiles
3. **🎵 Instruments** - Traditional musical instruments
4. **🎨 Handicrafts** - Traditional crafts and artworks

## 📝 Features in Detail

### CRUD Operations

- **Create**: Add new products with image, name, category, price, region, description, materials, and cultural story
- **Read**: View all products in a grid layout with category filtering
- **Update**: Edit existing product information
- **Delete**: Remove products with confirmation dialog

### Form Validation

- Product name: 3-100 characters (required)
- Price: Minimum Rp 1,000 (required)
- Region: 3-50 characters (required)
- Description: 10-500 characters (required)
- Materials: Optional, comma-separated
- Cultural Story: Optional

### User Experience

- Pull-to-refresh on home screen
- Empty state when no products
- Loading indicators during operations
- Success/error feedback
- Unsaved changes warning
- Long-press product card for quick actions

## 🎯 Learning Outcomes

This project demonstrates:

- React Native development with Expo
- TypeScript integration
- Stack Navigation implementation
- State management with React Context
- CRUD operations without backend
- Component-based architecture
- Styling with NativeWind/TailwindCSS
- Form handling and validation
- Image selection and display
- Responsive UI design

## 👨‍💻 Developer Information

- **Name**: [Your Name]
- **Student ID**: [Your NIM]
- **University**: [Your University]
- **Course**: Mobile Application Development
- **Project**: React Native Product Catalog

## 🤝 Contributing

This is a student project, but suggestions and feedback are welcome!

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- React Native and Expo teams
- NativeWind for making TailwindCSS work with React Native
- Unsplash for product images
- Indonesian cultural heritage for inspiration

## 📞 Contact

- Email: [your.email@example.com]
- GitHub: [your-github-username]

## 🐛 Known Issues

- Data is not persistent (resets on app restart)
- No backend integration
- Search functionality is UI-only

## 🔮 Future Enhancements

- [ ] Persistent storage (AsyncStorage/SQLite)
- [ ] Functional search
- [ ] Advanced filtering and sorting
- [ ] Product ratings and reviews
- [ ] User authentication
- [ ] Cloud sync
- [ ] Social media sharing
- [ ] Dark mode support

---
