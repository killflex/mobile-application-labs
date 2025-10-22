import React, { useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Navigate to Home after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Animated.View style={{ opacity: fadeAnim }} className="items-center">
        {/* Logo placeholder - you can replace with actual logo */}
        <View className="mb-6 h-32 w-32 items-center justify-center rounded-full bg-white">
          <Text className="text-5xl font-bold text-primary">L</Text>
        </View>

        <Text className="mb-2 text-4xl font-bold text-white">Lokal</Text>
        <Text className="text-lg text-white/90">Discover Local Treasures</Text>
      </Animated.View>
    </View>
  );
}
