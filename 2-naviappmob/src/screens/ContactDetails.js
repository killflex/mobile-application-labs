import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ContactDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>123 Main Street, City</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>+1 234 567 8900</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>contact@example.com</Text>

        <Text style={styles.label}>Working Hours:</Text>
        <Text style={styles.info}>Mon-Fri: 9:00 AM - 5:00 PM</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  contactInfo: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginTop: 15,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#666",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
