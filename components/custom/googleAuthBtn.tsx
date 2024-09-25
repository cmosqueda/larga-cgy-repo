import React from "react";
import SvgComponent from "@/assets/custom/google_icon";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function GoogleAuthBtn() {
  return (
    <View style={googleAuthBtnStyles.container}>
      <Pressable style={googleAuthBtnStyles.buttonStyle}>
        <SvgComponent style={googleAuthBtnStyles.googleSvg}></SvgComponent>
        <Text>Continue with Google</Text>
      </Pressable>
    </View>
  );
}

const googleAuthBtnStyles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 20,
  },
  buttonStyle: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleSvg: {
    marginRight: 10,
  },
});
