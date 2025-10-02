import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function AppPage({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>App Features</Text>

        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Easy Navigation</Text>
          <Text style={styles.featureDescription}>
            Seamlessly navigate between different screens with our intuitive
            navigation system.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Form Management</Text>
          <Text style={styles.featureDescription}>
            Easily collect and manage user input with our form handling system.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Contact Information</Text>
          <Text style={styles.featureDescription}>
            Quick access to important contact details and support information.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  featureCard: {
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
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
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
