import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useProducts } from '../context/ProductContext';

type EditProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditProduct'>;
type EditProductScreenRouteProp = RouteProp<RootStackParamList, 'EditProduct'>;

type CategoryType = 'culinary' | 'fashion' | 'instrument' | 'handicraft';

interface FormData {
  name: string;
  category: CategoryType;
  price: string;
  region: string;
  description: string;
  materials: string;
  culturalStory: string;
  image: string;
}

interface FormErrors {
  name?: string;
  category?: string;
  price?: string;
  region?: string;
  description?: string;
}

export default function EditProductScreen() {
  const navigation = useNavigation<EditProductScreenNavigationProp>();
  const route = useRoute<EditProductScreenRouteProp>();
  const { productId } = route.params;
  const { getProductById, updateProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(false);

  const product = getProductById(productId);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: 'culinary',
    price: '',
    region: '',
    description: '',
    materials: '',
    culturalStory: '',
    image: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price.toString(),
        region: product.region,
        description: product.description,
        materials: product.materials?.join(', ') || '',
        culturalStory: product.culturalStory || '',
        image: product.image,
      });
    }
  }, [product]);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-gray-600">Product not found</Text>
      </View>
    );
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Product name must be at least 3 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Product name must be less than 100 characters';
    }

    const priceNum = parseFloat(formData.price);
    if (!formData.price || isNaN(priceNum)) {
      newErrors.price = 'Price is required and must be a number';
    } else if (priceNum < 1000) {
      newErrors.price = 'Price must be at least Rp 1.000';
    }

    if (formData.region.trim().length < 3) {
      newErrors.region = 'Region must be at least 3 characters';
    } else if (formData.region.trim().length > 50) {
      newErrors.region = 'Region must be less than 50 characters';
    }

    if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    } else if (formData.description.trim().length > 500) {
      newErrors.description = 'Description must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImagePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setFormData((prev) => ({ ...prev, image: result.assets[0].uri }));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fix the errors in the form');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const materialsArray = formData.materials
        ? formData.materials
            .split(',')
            .map((m) => m.trim())
            .filter((m) => m)
        : undefined;

      updateProduct(productId, {
        name: formData.name.trim(),
        category: formData.category,
        price: parseFloat(formData.price),
        region: formData.region.trim(),
        description: formData.description.trim(),
        materials: materialsArray,
        culturalStory: formData.culturalStory.trim() || undefined,
        image: formData.image,
      });

      setIsLoading(false);
      Alert.alert('Success', 'Product updated successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, 500);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-4">
        {/* Image Picker */}
        <View className="mb-6">
          <Text className="mb-2 text-base font-semibold text-gray-800">Product Image</Text>
          <TouchableOpacity
            onPress={handleImagePick}
            className="h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            <Image source={{ uri: formData.image }} className="h-full w-full" resizeMode="cover" />
          </TouchableOpacity>
        </View>

        {/* Product Name */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Product Name <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            placeholder="Enter product name"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
          {errors.name && <Text className="mt-1 text-sm text-red-500">{errors.name}</Text>}
        </View>

        {/* Category - Display only */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">Category</Text>
          <View className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3">
            <Text className="text-base capitalize text-gray-700">{formData.category}</Text>
          </View>
        </View>

        {/* Price */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Price (Rp) <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={formData.price}
            onChangeText={(value) => handleInputChange('price', value)}
            placeholder="e.g., 75000"
            keyboardType="numeric"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
          {errors.price && <Text className="mt-1 text-sm text-red-500">{errors.price}</Text>}
        </View>

        {/* Region */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Region/Origin <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={formData.region}
            onChangeText={(value) => handleInputChange('region', value)}
            placeholder="e.g., Padang, West Sumatra"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
          {errors.region && <Text className="mt-1 text-sm text-red-500">{errors.region}</Text>}
        </View>

        {/* Description */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Description <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            value={formData.description}
            onChangeText={(value) => handleInputChange('description', value)}
            placeholder="Describe the product..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
          {errors.description && (
            <Text className="mt-1 text-sm text-red-500">{errors.description}</Text>
          )}
        </View>

        {/* Materials */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">Materials (Optional)</Text>
          <TextInput
            value={formData.materials}
            onChangeText={(value) => handleInputChange('materials', value)}
            placeholder="Separate with commas"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
        </View>

        {/* Cultural Story */}
        <View className="mb-6">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Cultural Story (Optional)
          </Text>
          <TextInput
            value={formData.culturalStory}
            onChangeText={(value) => handleInputChange('culturalStory', value)}
            placeholder="Share the cultural significance..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="rounded-lg border border-gray-300 px-4 py-3 text-base"
          />
        </View>

        {/* Action Buttons */}
        <View className="mb-8 flex-row gap-3">
          <TouchableOpacity
            onPress={handleCancel}
            className="flex-1 items-center rounded-lg border-2 border-gray-300 py-4"
            disabled={isLoading}>
            <Text className="text-base font-semibold text-gray-700">Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
            className="flex-1 items-center rounded-lg bg-primary py-4"
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-base font-semibold text-white">Update Product</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
