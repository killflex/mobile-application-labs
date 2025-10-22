import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useProducts } from '../context/ProductContext';
import { Picker } from '@react-native-picker/picker';

type AddProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddProduct'>;

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

export default function AddProductScreen() {
  const navigation = useNavigation<AddProductScreenNavigationProp>();
  const { addProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: 'culinary',
    price: '',
    region: '',
    description: '',
    materials: '',
    culturalStory: '',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
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

    // Simulate API call
    setTimeout(() => {
      const materialsArray = formData.materials
        ? formData.materials
            .split(',')
            .map((m) => m.trim())
            .filter((m) => m)
        : undefined;

      addProduct({
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
      Alert.alert('Success', 'Product added successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }, 500);
  };

  const handleCancel = () => {
    if (formData.name || formData.price || formData.region || formData.description) {
      Alert.alert('Discard Changes?', 'Are you sure you want to discard your changes?', [
        { text: 'Keep Editing', style: 'cancel' },
        { text: 'Discard', style: 'destructive', onPress: () => navigation.goBack() },
      ]);
    } else {
      navigation.goBack();
    }
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
            {formData.image ? (
              <Image
                source={{ uri: formData.image }}
                className="h-full w-full"
                resizeMode="cover"
              />
            ) : (
              <View className="items-center">
                <Text className="mb-2 text-4xl">📷</Text>
                <Text className="text-gray-600">Tap to select image</Text>
              </View>
            )}
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

        {/* Category */}
        <View className="mb-4">
          <Text className="mb-2 text-base font-semibold text-gray-800">
            Category <Text className="text-red-500">*</Text>
          </Text>
          <View className="overflow-hidden rounded-lg border border-gray-300">
            <Picker
              selectedValue={formData.category}
              onValueChange={(value: CategoryType) => handleInputChange('category', value)}>
              <Picker.Item label="Culinary" value="culinary" />
              <Picker.Item label="Fashion" value="fashion" />
              <Picker.Item label="Musical Instrument" value="instrument" />
              <Picker.Item label="Handicraft" value="handicraft" />
            </Picker>
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
            placeholder="Separate with commas (e.g., Cotton, Silk)"
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
              <Text className="text-base font-semibold text-white">Add Product</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
