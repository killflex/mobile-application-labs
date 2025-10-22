import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useProducts } from '../context/ProductContext';
import { Product } from '../utils/staticData';
import ProductCard from '../components/ProductCard';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type CategoryFilter = 'all' | 'culinary' | 'fashion' | 'instrument' | 'handicraft';

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { products, deleteProduct, getProductsByCategory } = useProducts();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'culinary', label: 'Culinary' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'instrument', label: 'Instruments' },
    { key: 'handicraft', label: 'Handicrafts' },
  ];

  const filteredProducts = getProductsByCategory(selectedCategory);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const handleEditPress = (productId: string) => {
    navigation.navigate('EditProduct', { productId });
  };

  const handleDeletePress = (productId: string) => {
    // In a real app, you'd show a confirmation modal here
    deleteProduct(productId);
  };

  const renderEmptyState = () => (
    <View className="flex-1 items-center justify-center py-20">
      <Text className="mb-2 text-6xl">📦</Text>
      <Text className="mb-1 text-xl font-semibold text-gray-800">No Products Yet</Text>
      <Text className="text-gray-600">Add your first local product!</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-primary px-6 pb-4 pt-12">
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-3xl font-bold text-white">Lokal</Text>
            <Text className="text-white/90">Discover Local Treasures</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <View className="h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Text className="text-xl text-white">ℹ️</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search bar - UI only */}
        <View className="mb-4 flex-row items-center rounded-lg bg-white/20 px-4 py-3">
          <Text className="mr-2 text-white">🔍</Text>
          <TextInput
            placeholder="Search products..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            className="flex-1 text-white"
            editable={false}
          />
        </View>

        {/* Category Filter */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.key)}
              className={`mr-2 rounded-full px-4 py-2 ${
                selectedCategory === item.key ? 'bg-white' : 'border border-white/50 bg-transparent'
              }`}>
              <Text
                className={`font-medium ${
                  selectedCategory === item.key ? 'text-primary' : 'text-white'
                }`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 16 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={renderEmptyState}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item.id)}
            onEdit={() => handleEditPress(item.id)}
            onDelete={() => handleDeletePress(item.id)}
          />
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
        className="absolute bottom-6 right-6 h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 8,
        }}>
        <Text className="text-3xl font-bold text-white">+</Text>
      </TouchableOpacity>
    </View>
  );
}
