// mao ni siya ang _layout responsible for routing

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="login-signup/login" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="login-signup/signup" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="home/index" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
