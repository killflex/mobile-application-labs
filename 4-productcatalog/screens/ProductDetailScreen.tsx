import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useProducts } from '../context/ProductContext';
import { formatPrice, getCategoryName, getCategoryColor, formatDate } from '../utils/helpers';

type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen() {
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params;
  const { getProductById, deleteProduct } = useProducts();

  const product = getProductById(productId);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-gray-600">Product not found</Text>
      </View>
    );
  }

  const handleEdit = () => {
    navigation.navigate('EditProduct', { productId });
  };

  const handleDelete = () => {
    Alert.alert('Delete Product', `Are you sure you want to delete "${product.name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteProduct(productId);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {/* Hero Image */}
        <Image
          source={{ uri: product.image }}
          className="h-80 w-full bg-gray-200"
          resizeMode="cover"
        />

        {/* Content */}
        <View className="p-6">
          {/* Category Badge */}
          <View
            className="mb-3 self-start rounded-full px-3 py-1"
            style={{ backgroundColor: getCategoryColor(product.category) }}>
            <Text className="text-sm font-semibold text-white">
              {getCategoryName(product.category)}
            </Text>
          </View>

          {/* Product Name */}
          <Text className="mb-2 text-3xl font-bold text-gray-800">{product.name}</Text>

          {/* Price */}
          <Text className="mb-4 text-2xl font-bold text-primary">{formatPrice(product.price)}</Text>

          {/* Region */}
          <View className="mb-6 flex-row items-center">
            <Text className="mr-2 text-2xl">📍</Text>
            <Text className="text-lg font-medium text-gray-700">{product.region}</Text>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="mb-2 text-lg font-semibold text-gray-800">Description</Text>
            <Text className="leading-6 text-gray-700">{product.description}</Text>
          </View>

          {/* Materials */}
          {product.materials && product.materials.length > 0 && (
            <View className="mb-6">
              <Text className="mb-2 text-lg font-semibold text-gray-800">Materials</Text>
              <View className="flex-row flex-wrap">
                {product.materials.map((material, index) => (
                  <View key={index} className="mb-2 mr-2 rounded-full bg-gray-100 px-3 py-1">
                    <Text className="text-gray-700">{material}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Cultural Story */}
          {product.culturalStory && (
            <View className="mb-6">
              <Text className="mb-2 text-lg font-semibold text-gray-800">Cultural Story</Text>
              <Text className="leading-6 text-gray-700">{product.culturalStory}</Text>
            </View>
          )}

          {/* Date Added */}
          <View className="mb-6">
            <Text className="text-sm text-gray-500">Added on {formatDate(product.createdAt)}</Text>
          </View>

          {/* Action Buttons */}
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={handleEdit}
              className="flex-1 items-center rounded-lg bg-primary py-4">
              <Text className="text-base font-semibold text-white">✏️ Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleDelete}
              className="flex-1 items-center rounded-lg bg-red-600 py-4">
              <Text className="text-base font-semibold text-white">🗑️ Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
