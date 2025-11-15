import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function OrderScreen({ navigation, route }) {
  const { service } = route.params;
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleConfirmOrder = () => {
    // Add order confirmation logic here
    console.log("Order confirmed:", service.name);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: service.color }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>{service.icon}</Text>
          <Text style={styles.headerTitle}>{service.name}</Text>
          <Text style={styles.headerSubtitle}>{service.description}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Location Input Section */}
        <View style={styles.locationSection}>
          <Text style={styles.sectionTitle}>Where to?</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <View style={styles.dotGreen} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Pick-up location"
              placeholderTextColor="#999"
              value={pickupLocation}
              onChangeText={setPickupLocation}
            />
            <TouchableOpacity style={styles.navigationButton}>
              <Text style={styles.navIcon}>🧭</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.locationConnector} />

          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Text style={styles.pinIcon}>📍</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Drop-off location"
              placeholderTextColor="#999"
              value={dropoffLocation}
              onChangeText={setDropoffLocation}
            />
          </View>
        </View>

        {/* Service Options */}
        <View style={styles.optionsSection}>
          <Text style={styles.sectionTitle}>Choose your option</Text>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionLeft}>
              <Text style={styles.optionServiceIcon}>{service.icon}</Text>
              <View style={styles.optionInfo}>
                <Text style={styles.optionName}>{service.name} Standard</Text>
                <View style={styles.optionDetails}>
                  <Text style={styles.clockIcon}>⏱️</Text>
                  <Text style={styles.optionDetailText}>5-10 min</Text>
                </View>
              </View>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.optionPrice}>$8.50</Text>
              <Text style={styles.chevronIcon}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionLeft}>
              <Text style={styles.optionServiceIcon}>{service.icon}</Text>
              <View style={styles.optionInfo}>
                <Text style={styles.optionName}>{service.name} Premium</Text>
                <View style={styles.optionDetails}>
                  <Text style={styles.clockIcon}>⏱️</Text>
                  <Text style={styles.optionDetailText}>3-7 min</Text>
                </View>
              </View>
            </View>
            <View style={styles.optionRight}>
              <Text style={styles.optionPrice}>$12.50</Text>
              <Text style={styles.chevronIcon}>›</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Payment Method</Text>

          <TouchableOpacity style={styles.paymentCard}>
            <View style={styles.paymentLeft}>
              <View style={styles.paymentIconContainer}>
                <Text style={styles.dollarIcon}>💵</Text>
              </View>
              <View>
                <Text style={styles.paymentName}>Cash</Text>
                <Text style={styles.paymentSubtext}>Pay with cash</Text>
              </View>
            </View>
            <Text style={styles.chevronIcon}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Code */}
        <View style={styles.promoSection}>
          <Text style={styles.sectionTitle}>Have a promo code?</Text>
          <View style={styles.promoInputContainer}>
            <TextInput
              style={styles.promoInput}
              placeholder="Enter promo code"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Price Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Price Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Base fare</Text>
              <Text style={styles.summaryValue}>$5.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Distance (5 km)</Text>
              <Text style={styles.summaryValue}>$3.50</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Service fee</Text>
              <Text style={styles.summaryValue}>$1.00</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryTotal}>Total</Text>
              <Text style={styles.summaryTotalValue}>$9.50</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.confirmButton, { backgroundColor: service.color }]}
          onPress={handleConfirmOrder}
        >
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "relative",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 24,
    color: "#fff",
  },
  headerContent: {
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 32,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
  },
  content: {
    flex: 1,
  },
  locationSection: {
    backgroundColor: "#fff",
    margin: 20,
    marginTop: -20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  inputIconContainer: {
    width: 24,
    alignItems: "center",
    marginRight: 10,
  },
  pinIcon: {
    fontSize: 20,
  },
  dotGreen: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#10b981",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  navigationButton: {
    padding: 5,
  },
  navIcon: {
    fontSize: 20,
  },
  locationConnector: {
    width: 2,
    height: 20,
    backgroundColor: "#e0e0e0",
    marginLeft: 26,
    marginVertical: 5,
  },
  optionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  optionCard: {
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
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  optionServiceIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  optionInfo: {
    marginLeft: 15,
  },
  optionName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  optionDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    fontSize: 14,
  },
  optionDetailText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  optionRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevronIcon: {
    fontSize: 20,
    color: "#666",
  },
  optionPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 5,
  },
  paymentSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  paymentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  paymentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  dollarIcon: {
    fontSize: 24,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  paymentSubtext: {
    fontSize: 14,
    color: "#666",
  },
  promoSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  promoInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  promoInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    marginRight: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  applyButton: {
    backgroundColor: "#000",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  summarySection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 15,
    color: "#666",
  },
  summaryValue: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
  summaryDivider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  summaryTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  summaryTotalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bottomContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  confirmButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
