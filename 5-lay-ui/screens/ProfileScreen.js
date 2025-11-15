import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("John Doe");
  const [userEmail, setUserEmail] = useState("john.doe@example.com");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const name = await AsyncStorage.getItem("userName");
      const email = await AsyncStorage.getItem("userEmail");
      if (name) setUserName(name);
      if (email) setUserEmail(email);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            console.log("========================================");
            console.log("🚫 LOGOUT CANCELLED");
            console.log("User:", userName);
            console.log("Timestamp:", new Date().toLocaleString());
            console.log("========================================");
          },
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            console.log("========================================");
            console.log("🚪 LOGOUT ATTEMPT");
            console.log("User:", userName);
            console.log("Email:", userEmail);
            console.log("Timestamp:", new Date().toLocaleString());
            console.log("========================================");

            try {
              // Clear all user data from AsyncStorage
              await AsyncStorage.removeItem("userToken");
              await AsyncStorage.removeItem("userEmail");
              await AsyncStorage.removeItem("userName");

              console.log("✅ LOGOUT SUCCESSFUL");
              console.log("User token removed from AsyncStorage");
              console.log("User email removed from AsyncStorage");
              console.log("User name removed from AsyncStorage");
              console.log("All user data cleared");
              console.log("Redirecting to Login screen...");
              console.log("========================================");

              // Reset navigation to Login screen
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (error) {
              console.error("❌ LOGOUT FAILED");
              console.error("Error:", error);
              console.log("========================================");
              Alert.alert("Error", "Failed to logout. Please try again.");
              console.error("Logout error:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
          <TouchableOpacity style={styles.editBadge}>
            <Text style={styles.editBadgeText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.starIcon}>⭐</Text>
          <Text style={styles.ratingText}>4.9</Text>
          <Text style={styles.ratingLabel}>(120 trips)</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>45</Text>
          <Text style={styles.statLabel}>Total Trips</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCard}>
          <Text style={styles.statValue}>$320</Text>
          <Text style={styles.statLabel}>Total Spent</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Rewards</Text>
        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#3b82f6" }]}>
              <Text style={styles.menuIconText}>👤</Text>
            </View>
            <View style={styles.menuInfo}>
              <Text style={styles.menuLabel}>Full Name</Text>
              <Text style={styles.menuValue}>{userName}</Text>
            </View>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#10b981" }]}>
              <Text style={styles.menuIconText}>✉️</Text>
            </View>
            <View style={styles.menuInfo}>
              <Text style={styles.menuLabel}>Email</Text>
              <Text style={styles.menuValue}>{userEmail}</Text>
            </View>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#f59e0b" }]}>
              <Text style={styles.menuIconText}>📱</Text>
            </View>
            <View style={styles.menuInfo}>
              <Text style={styles.menuLabel}>Phone Number</Text>
              <Text style={styles.menuValue}>+1 234 567 8900</Text>
            </View>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#ef4444" }]}>
              <Text style={styles.menuIconText}>📍</Text>
            </View>
            <View style={styles.menuInfo}>
              <Text style={styles.menuLabel}>Address</Text>
              <Text style={styles.menuValue}>Jakarta, Indonesia</Text>
            </View>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Payment & Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment & Settings</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#8b5cf6" }]}>
              <Text style={styles.menuIconText}>💳</Text>
            </View>
            <Text style={styles.menuText}>Payment Methods</Text>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#06b6d4" }]}>
              <Text style={styles.menuIconText}>🔔</Text>
            </View>
            <Text style={styles.menuText}>Notifications</Text>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#64748b" }]}>
              <Text style={styles.menuIconText}>⚙️</Text>
            </View>
            <Text style={styles.menuText}>Settings</Text>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: "#f59e0b" }]}>
              <Text style={styles.menuIconText}>❓</Text>
            </View>
            <Text style={styles.menuText}>Help Center</Text>
          </View>
          <Text style={styles.chevronIcon}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutIcon}>🚪</Text>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileIcon: {
    fontSize: 40,
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#3b82f6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  editBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  starIcon: {
    fontSize: 16,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 5,
  },
  ratingLabel: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#e0e0e0",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuIconText: {
    fontSize: 20,
  },
  menuInfo: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  menuValue: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  menuText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ef4444",
  },
  logoutIcon: {
    fontSize: 20,
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
  },
});
