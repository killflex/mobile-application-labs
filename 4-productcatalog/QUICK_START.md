# 🚀 Quick Start Guide

## For Students: How to Use This Project

### 📱 Running the App (3 Easy Steps)

1. **Open Terminal in VS Code** (Ctrl+` or View → Terminal)

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Open on your phone:**
   - Install **Expo Go** app from App Store (iOS) or Play Store (Android)
   - Scan the QR code shown in terminal
   - Wait for the app to load

### 🎯 What You'll See

1. **Splash Screen** (3 seconds)
   - Orange background with "Lokal" logo
   - Automatically transitions to Home

2. **Home Screen**
   - Grid of 12 Indonesian products
   - Filter buttons at top (All, Culinary, Fashion, etc.)
   - Orange "+" button at bottom right to add products

3. **Try These Actions:**
   - **Tap any product card** → See full details
   - **Long-press a product** → Quick Edit/Delete menu
   - **Tap the + button** → Add new product form
   - **Tap ℹ️ icon** (top right) → About page

### 📝 Customizing for Your Submission

#### 1. Update About Page with Your Information

Open `screens/AboutScreen.tsx` and find this section (around line 52):

```tsx
<InfoRow label="Name" value="[Your Name]" />
<InfoRow label="Student ID" value="[Your NIM]" />
<InfoRow label="University" value="[Your University]" />
```

Replace with your actual information:

```tsx
<InfoRow label="Name" value="John Doe" />
<InfoRow label="Student ID" value="123456789" />
<InfoRow label="University" value="University of Indonesia" />
```

#### 2. Update README.md

Open `README.md` and update the Developer Information section:

```markdown
- **Name**: John Doe
- **Student ID**: 123456789
- **University**: University of Indonesia
```

#### 3. Add Your Own Products

You can add products through the app by:

1. Tapping the orange "+" button
2. Filling in the form
3. Tapping "Add Product"

Or modify the initial data in `utils/staticData.ts`

### 📸 Taking Screenshots for Documentation

1. **Run the app on your phone**
2. **Navigate to each screen:**
   - Splash Screen
   - Home Screen
   - Product Details
   - Add Product Form
   - About Page
3. **Take screenshots** (varies by device)
4. **Save screenshots** in `assets/screenshots/` folder

### 🎓 Understanding the Code Structure

```
Key Files to Understand:
├── App.tsx                      → Entry point, wraps app with providers
├── navigation/AppNavigator.tsx  → Defines all screens and navigation
├── context/ProductContext.tsx   → Manages product data (add/edit/delete)
├── screens/
│   ├── HomeScreen.tsx           → Main product list with filters
│   ├── ProductDetailScreen.tsx  → Single product view
│   ├── AddProductScreen.tsx     → Form to create products
│   └── EditProductScreen.tsx    → Form to update products
└── utils/
    ├── staticData.ts            → Initial product data (12 items)
    └── helpers.ts               → Utility functions (format price, etc.)
```

### 🐛 Common Issues & Solutions

#### Issue 1: QR Code doesn't work

**Solution:** Make sure your phone and computer are on the same WiFi network

#### Issue 2: App shows error after scanning

**Solution:** Wait for bundling to complete (check terminal for "Bundling complete")

#### Issue 3: Changes not reflecting

**Solution:** Press `r` in terminal to reload, or shake your phone and tap "Reload"

#### Issue 4: "Cannot find module" errors

**Solution:**

```bash
rm -rf node_modules
npm install
npm start
```

#### Issue 5: Metro Bundler errors

**Solution:**

```bash
npm start -- --clear
```

### 📚 Learning Resources

- **React Native Docs:** https://reactnative.dev/
- **Expo Docs:** https://docs.expo.dev/
- **NativeWind Docs:** https://www.nativewind.dev/
- **React Navigation:** https://reactnavigation.org/

### ✅ Testing Your App Before Submission

Use this checklist:

- [ ] App launches without crashes
- [ ] Splash screen shows and transitions
- [ ] All 12 products display on Home
- [ ] Category filters work (tap each category)
- [ ] Can tap product to see details
- [ ] Can add new product with image
- [ ] Can edit existing product
- [ ] Can delete product (shows confirmation)
- [ ] About page shows YOUR information
- [ ] No console errors in terminal

### 📦 Submitting Your Project

1. **Update your information** (About page, README)
2. **Take screenshots** of all screens
3. **Test all features** using checklist above
4. **Create a ZIP file** of the project folder
5. **Include:**
   - All source code
   - README.md (with your info)
   - Screenshots (if required)
   - PROJECT_SUMMARY.md

### 🎨 Customization Ideas

Want to make it unique? Try:

1. **Change the color scheme:**
   - Open `tailwind.config.js`
   - Modify the `primary`, `secondary`, `accent` colors

2. **Add more products:**
   - Open `utils/staticData.ts`
   - Add new product objects to the array

3. **Change app name:**
   - Open `app.json`
   - Update the `name` and `displayName` fields

4. **Add your logo:**
   - Replace logo placeholder in `SplashScreen.tsx`
   - Add your image to `assets/` folder

### 💡 Tips for Presentation

When demonstrating your app:

1. **Start with Splash Screen** - Show the loading animation
2. **Show Home Screen** - Explain the grid layout and filters
3. **Tap a product** - Show detailed view with cultural info
4. **Add a new product** - Demonstrate form validation
5. **Edit a product** - Show how changes persist
6. **Delete a product** - Show confirmation dialog
7. **Show About page** - Highlight your information
8. **Filter by category** - Show how filtering works

### 🎓 Expected Grading Criteria

Your app should demonstrate:

- ✅ **Functionality** (50%) - All CRUD operations work
- ✅ **UI/UX Design** (20%) - Clean, professional appearance
- ✅ **Code Quality** (15%) - Well-organized, readable code
- ✅ **Navigation** (10%) - Smooth screen transitions
- ✅ **Documentation** (5%) - README with your info

### 📞 Need Help?

If you're stuck:

1. Read the error message in the terminal carefully
2. Check the troubleshooting section above
3. Review the code comments in each file
4. Search the error on Stack Overflow
5. Ask your instructor or teaching assistant

---

## 🎉 You're Ready!

Your app is fully functional and ready for submission. Just:

1. Update your personal information
2. Test all features
3. Take screenshots
4. Submit!

**Good luck with your project! 🚀**
