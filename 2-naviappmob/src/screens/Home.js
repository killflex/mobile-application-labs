import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#007AFF" }]}
        onPress={() => navigation.navigate("FormPage")}
      >
        <Text style={styles.buttonText}>Form Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#34C759" }]}
        onPress={() => navigation.navigate("ContactDetails")}
      >
        <Text style={styles.buttonText}>Contact Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#5856D6" }]}
        onPress={() => navigation.navigate("AppPage")}
      >
        <Text style={styles.buttonText}>App Features</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
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
