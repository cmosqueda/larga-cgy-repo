// mao ni siya ang _layout responsible for routing

import { Stack } from "expo-router";
// import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={screenOptions} />
      <Stack.Screen name="login-signup/login" options={screenOptions}></Stack.Screen>
      <Stack.Screen name="login-signup/signup" options={screenOptions}></Stack.Screen>
      <Stack.Screen name="(tabs)" options={screenOptions}></Stack.Screen>
    </Stack>
  );
}
