import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Product } from '../utils/staticData';
import { formatPrice, truncateText, getCategoryColor, getCategoryName } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProductCard({ product, onPress, onEdit, onDelete }: ProductCardProps) {
  const handleLongPress = () => {
    Alert.alert('Product Actions', 'Choose an action', [
      { text: 'Edit', onPress: onEdit },
      { text: 'Delete', onPress: handleDeleteConfirm, style: 'destructive' },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const handleDeleteConfirm = () => {
    Alert.alert('Delete Product', `Are you sure you want to delete "${product.name}"?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: onDelete, style: 'destructive' },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={handleLongPress}
      className="mb-4 w-[48%] overflow-hidden rounded-xl bg-white shadow-md"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      }}>
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        className="h-32 w-full bg-gray-200"
        resizeMode="cover"
      />

      {/* Category Badge */}
      <View
        className="absolute right-2 top-2 rounded-full px-2 py-1"
        style={{ backgroundColor: getCategoryColor(product.category) }}>
        <Text className="text-xs font-semibold text-white">
          {getCategoryName(product.category)}
        </Text>
      </View>

      {/* Product Info */}
      <View className="p-3">
        <Text className="mb-1 text-base font-bold text-gray-800" numberOfLines={1}>
          {product.name}
        </Text>

        <Text className="mb-2 text-xs text-gray-600" numberOfLines={1}>
          📍 {product.region}
        </Text>

        <Text className="mb-2 text-xs text-gray-700" numberOfLines={2}>
          {truncateText(product.description, 60)}
        </Text>

        <Text className="text-base font-bold text-primary">{formatPrice(product.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}
