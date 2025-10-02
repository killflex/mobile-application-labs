import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f4fd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    backgroundColor: "#34C759",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
