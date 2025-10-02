import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace("Home");
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to NavApp</Text>
      <Image
        source={require("../../assets/splash-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator
        animating={animating}
        color="#007AFF"
        size="large"
        style={styles.loader}
      />
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  loader: {
    marginVertical: 10,
  },
});
