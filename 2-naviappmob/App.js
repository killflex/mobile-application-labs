import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home.js";
import FormPage from "./src/screens/FormPage.js";
import ContactDetails from "./src/screens/ContactDetails.js";
import AppPage from "./src/screens/AppPage.js";
import SplashScreen from "./src/screens/SplashScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FormPage" component={FormPage} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="AppPage" component={AppPage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
