// import { View, Text } from "react-native";
import React from "react";

// side menu navigation imports
// import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

// tab pages imports
import Home from "./index";
import Profile from "./profile";
import History from "./history";
import SavedRoutes from "./savedRoutes";

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff", // Background color of drawer
          width: 250, // Width of the drawer
        },
        drawerLabelStyle: {
          fontSize: 18, // Label font size
          fontWeight: 600, // Label font weight
        },
        drawerActiveTintColor: "#7CB22F", // Active item text color
        drawerInactiveTintColor: "#6F6F6F", // Inactive item text color
        drawerActiveBackgroundColor: "#FFF7E8", // Active item background color

        headerStyle: {
          backgroundColor: "#F9E6C0",
          shadowColor: "#000",
        },
        headerTintColor: "#7CB22F", // Text and icon color
        headerTitleStyle: {
          fontWeight: "bold", // Title text styling
          fontSize: 20,
        },
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen options={{}} name="Home" component={Home}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
      <Drawer.Screen name="History" component={History}></Drawer.Screen>
      <Drawer.Screen name="Saved Routes" component={SavedRoutes}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
