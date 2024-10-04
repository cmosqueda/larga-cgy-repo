// react components imports
import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Link } from "expo-router";

// styles
import { loginSignupStyles } from "@/assets/styles/login-signup-styles";

// components
import SvgLargaIcon from "@/assets/custom/larga_icon";
import GoogleAuthBtn from "@/components/custom/googleAuthBtn";

export default function Login() {
  return (
    // screen
    <SafeAreaView style={loginSignupStyles.parentContainer}>
      {/* scrollview */}
      <ScrollView style={loginSignupStyles.scrollViewStyle}>
        {/* screen subcontainer */}
        <View style={loginSignupStyles.subContainer}>
          {/* logo */}
          <View>
            {/* logo here */}
            <SvgLargaIcon></SvgLargaIcon>
          </View>

          <View>
            {/* Heading */}
            <Text style={loginSignupStyles.heading}>Welcome to Larga.cgy, higala!</Text>
            {/* Subheading */}
            <Text style={loginSignupStyles.subHeading}>Please log in to your existing Larga.cgy account.</Text>
          </View>

          {/* login form */}
          <View style={loginSignupStyles.formArea}>
            {/* email */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="E-mail"
              inputMode={"email"}
              // value={loginFormData.email}
              // onPress={() => setIsEmpty(!isEmpty)}
              // onChangeText={(input) => handleFormDataChange("email", input)}
            ></TextInput>
            {/* hidden error message for invalid email */}
            {/* <Text
              style={{
                color: isEmailValid ? "black" : "red",
                opacity: isEmailValid ? 0 : 1,
                display: isEmailValid ? "none" : "flex",
              }}
            >
              Invalid email.
            </Text> */}

            {/* password */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="Password"
              secureTextEntry={true}
              // value={loginFormData.password}
              // onChangeText={(input) => handleFormDataChange("password", input)}
            ></TextInput>

            {/* hidden error message for invalid password */}
            {/* <Text
              style={{
                color: isPasswordValid ? "black" : "red",
                opacity: isPasswordValid ? 0 : 1,
                display: isPasswordValid ? "none" : "flex",
              }}
            >
              Password must contain at least 8 characters.
            </Text> */}

            {/* continue button */}
            <Pressable
              style={loginSignupStyles.slabButton}
              // basta butangan diri ug on press
            >
              <Link href={"/(tabs)"} style={loginSignupStyles.slabButtonTxt}>
                LOG IN
              </Link>
            </Pressable>

            {/* sign up option - links user to signup screen */}
            {/* <View style={loginSignupStyles.loginOrSignupTextArea}> */}
            <Text style={loginSignupStyles.loginOrSignupText}>
              New User?
              <Link href={"/login-signup/signup"} style={loginSignupStyles.routeScreenLink}>
                {" "}
                Sign Up
              </Link>
            </Text>
            {/* </View> */}

            {/* horizontal line */}
            <View style={loginSignupStyles.divider}>
              <View style={loginSignupStyles.dividerLine}></View>
              <Text style={loginSignupStyles.dividerText}>or</Text>
              <View style={loginSignupStyles.dividerLine}></View>
            </View>

            {/* google auth button */}
            <GoogleAuthBtn></GoogleAuthBtn>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
