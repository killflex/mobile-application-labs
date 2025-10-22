import React from 'react';
import { View, Text, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  const APP_VERSION = '1.0.0';

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* App Info Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <View className="mb-4 items-center">
            <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-primary">
              <Text className="text-5xl font-bold text-white">L</Text>
            </View>
            <Text className="mb-1 text-2xl font-bold text-gray-800">Lokal</Text>
            <Text className="mb-2 text-gray-600">Discover Local Treasures</Text>
            <View className="rounded-full bg-primary/10 px-3 py-1">
              <Text className="text-sm font-medium text-primary">Version {APP_VERSION}</Text>
            </View>
          </View>

          <Text className="mb-4 text-center leading-6 text-gray-700">
            A mobile application dedicated to celebrating and promoting local Indonesian products,
            from traditional culinary delights to exquisite handicrafts.
          </Text>
        </View>

        {/* Features Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <Text className="mb-4 text-xl font-bold text-gray-800">Features</Text>
          <View className="space-y-3">
            <FeatureItem icon="📱" text="Browse local Indonesian products" />
            <FeatureItem icon="➕" text="Add new products to catalog" />
            <FeatureItem icon="✏️" text="Edit product information" />
            <FeatureItem icon="🗑️" text="Remove products from catalog" />
            <FeatureItem icon="🔍" text="Filter by category" />
            <FeatureItem icon="📸" text="Upload product images" />
            <FeatureItem icon="📖" text="Learn cultural stories" />
          </View>
        </View>

        {/* Student Info Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <Text className="mb-4 text-xl font-bold text-gray-800">Developer Information</Text>

          <InfoRow label="Name" value="Ferry Hasan" />
          <InfoRow label="NPM" value="22081010085" />
          <InfoRow label="University" value='UPN "Veteran" Jawa Timur' />
          <InfoRow label="Course" value="Mobile Application Development" />
          <InfoRow label="Project" value="React Native Product Catalog" />
        </View>

        {/* Technology Stack Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <Text className="mb-4 text-xl font-bold text-gray-800">Technology Stack</Text>
          <View className="space-y-2">
            <TechItem name="React Native" version="0.81.5" />
            <TechItem name="Expo" version="~54.0.0" />
            <TechItem name="NativeWind" version="Latest" />
            <TechItem name="React Navigation" version="^6.x" />
            <TechItem name="TypeScript" version="~5.9.2" />
          </View>
        </View>

        {/* Categories Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <Text className="mb-4 text-xl font-bold text-gray-800">Product Categories</Text>
          <View className="flex-row flex-wrap">
            <CategoryBadge icon="🍛" name="Culinary" color="bg-orange-500" />
            <CategoryBadge icon="👗" name="Fashion" color="bg-purple-500" />
            <CategoryBadge icon="🎵" name="Instruments" color="bg-blue-500" />
            <CategoryBadge icon="🎨" name="Handicrafts" color="bg-green-500" />
          </View>
        </View>

        {/* Contact Card */}
        <View className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <Text className="mb-4 text-xl font-bold text-gray-800">Contact & Links</Text>

          <TouchableOpacity
            onPress={() => handleLinkPress('https://github.com')}
            className="mb-3 flex-row items-center rounded-lg bg-gray-100 p-3">
            <Text className="mr-3 text-xl">🔗</Text>
            <Text className="flex-1 text-gray-700">GitHub Repository</Text>
            <Text className="text-gray-400">→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleLinkPress('mailto:your.email@example.com')}
            className="flex-row items-center rounded-lg bg-gray-100 p-3">
            <Text className="mr-3 text-xl">✉️</Text>
            <Text className="flex-1 text-gray-700">Email Support</Text>
            <Text className="text-gray-400">→</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center py-4">
          <Text className="mb-1 text-gray-600">Made with ❤️ by Ferry Hasan</Text>
          <Text className="text-sm text-gray-500">© 2025 Lokal. All rights reserved.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Helper Components
const FeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <View className="flex-row items-center">
    <Text className="mr-3 text-xl">{icon}</Text>
    <Text className="flex-1 text-gray-700">{text}</Text>
  </View>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="mb-3 flex-row border-b border-gray-100 pb-3">
    <Text className="w-32 font-medium text-gray-600">{label}</Text>
    <Text className="flex-1 text-gray-800">{value}</Text>
  </View>
);

const TechItem = ({ name, version }: { name: string; version: string }) => (
  <View className="flex-row items-center justify-between rounded-lg bg-gray-50 p-3">
    <Text className="font-medium text-gray-800">{name}</Text>
    <Text className="text-sm text-gray-600">{version}</Text>
  </View>
);

const CategoryBadge = ({ icon, name, color }: { icon: string; name: string; color: string }) => (
  <View className={`mb-2 mr-2 flex-row items-center rounded-full ${color} px-3 py-2`}>
    <Text className="mr-1">{icon}</Text>
    <Text className="font-medium text-white">{name}</Text>
  </View>
);
