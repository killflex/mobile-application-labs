import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const services = [
  {
    id: "uride",
    name: "URide",
    icon: "🏍️",
    color: "#10b981",
    description: "Motorcycle ride",
  },
  {
    id: "ucar",
    name: "UCar",
    icon: "🚗",
    color: "#3b82f6",
    description: "Car ride",
  },
  {
    id: "ufood",
    name: "UFood",
    icon: "🍔",
    color: "#ef4444",
    description: "Food delivery",
  },
  {
    id: "usend",
    name: "USend",
    icon: "📦",
    color: "#f59e0b",
    description: "Package delivery",
  },
  {
    id: "umart",
    name: "UMart",
    icon: "🛒",
    color: "#8b5cf6",
    description: "Grocery shopping",
  },
  {
    id: "upulsa",
    name: "UPulsa",
    icon: "📱",
    color: "#06b6d4",
    description: "Mobile credit",
  },
];

export default function LandingScreen({ navigation }) {
  const handleServicePress = (service) => {
    navigation.navigate("Order", { service });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <View style={styles.locationText}>
              <Text style={styles.locationLabel}>Your Location</Text>
              <Text style={styles.locationAddress}>Jakarta, Indonesia</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Hello, User!</Text>
          <Text style={styles.welcomeSubtext}>Where would you like to go?</Text>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service) => {
              return (
                <TouchableOpacity
                  key={service.id}
                  style={styles.serviceCard}
                  onPress={() => handleServicePress(service)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.serviceIconContainer,
                      { backgroundColor: service.color },
                    ]}
                  >
                    <Text style={styles.serviceIcon}>{service.icon}</Text>
                  </View>
                  <Text style={styles.serviceName}>{service.name}</Text>
                  <Text style={styles.serviceDescription}>
                    {service.description}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Special Offer!</Text>
            <Text style={styles.promoText}>Get 50% off on your first ride</Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Claim Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.recentCard}>
            <View style={styles.recentIconContainer}>
              <Text style={styles.recentIconText}>🚗</Text>
            </View>
            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>Ride to Office</Text>
              <Text style={styles.recentSubtitle}>Completed • 2 hours ago</Text>
            </View>
            <Text style={styles.recentPrice}>$12.50</Text>
          </View>

          <View style={styles.recentCard}>
            <View style={styles.recentIconContainer}>
              <Text style={styles.recentIconText}>🍕</Text>
            </View>
            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>Pizza Delivery</Text>
              <Text style={styles.recentSubtitle}>Completed • Yesterday</Text>
            </View>
            <Text style={styles.recentPrice}>$25.00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationIcon: {
    fontSize: 20,
  },
  locationText: {
    marginLeft: 10,
  },
  locationLabel: {
    fontSize: 12,
    color: "#666",
  },
  locationAddress: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bellIcon: {
    fontSize: 24,
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ef4444",
    borderWidth: 2,
    borderColor: "#fff",
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    padding: 20,
    paddingTop: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: "#666",
  },
  servicesContainer: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: (width - 60) / 2,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  serviceIcon: {
    fontSize: 32,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  promoBanner: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  promoContent: {
    alignItems: "center",
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  promoText: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 15,
  },
  promoButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  promoButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  recentSection: {
    padding: 20,
    paddingBottom: 30,
  },
  recentCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  recentIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  recentIconText: {
    fontSize: 24,
  },
  recentInfo: {
    flex: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  recentSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  recentPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
