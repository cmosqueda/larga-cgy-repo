// react components imports
import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// styles
import { loginSignupStyles } from "@/assets/styles/login-signup-styles";
import SvgLargaIcon from "@/assets/custom/larga_icon";
import GoogleAuthBtn from "@/components/custom/googleAuthBtn";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import { StyleSheet } from "react-native";

export default function Login() {
  const [isEmpty, setIsEmpty] = useState(true);

  // use state for login form date
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (name: string, value: string) => {
    setLoginFormData({ ...loginFormData, [name]: value });
    handleEmailValidation();
    handlePasswordValidation();
    setIsEmpty(false);
  };

  // check if empty fields
  const handleEmptyFieldsError = () => {
    if (loginFormData.email == "") {
      console.log("Email is empty.");
      setIsEmpty(true);
    }

    if (loginFormData.password == "") {
      console.log("Password is empty.");
      setIsEmpty(true);
    }
  };

  //   chech if password is valid
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handlePasswordValidation = () => {
    if (loginFormData.password.length > 6) {
      // error message
      console.log("Password is acceptable");
      setIsPasswordValid(true);
    } else {
      console.log("Password must be at least 8 characters.");
      setIsPasswordValid(false);
    }
  };

  //   check if email is valid, apply regex
  // const [email, setEmail] = useState(() => loginFormData.email);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailValidation = () => {
    if (emailRegex.test(loginFormData.email)) {
      // email is valid
      setIsEmailValid(true);
      console.log("valid email");
    } else {
      // email invalid
      setIsEmailValid(false);
      console.log("invalid email");
    }
  };

  const [isFieldsCorrect, setIsFieldsCorrect] = useState(true);
  // check if fields are correct
  const handleIsFieldsCorrect = () => {
    // check if all vields are validated correctly
    if (isEmpty == true) {
      console.log("Fields are empty");
      setIsFieldsCorrect(false);
    }

    if (isEmailValid == false) {
      console.log("Invalid email");
      setIsFieldsCorrect(false);
    }

    if (isPasswordValid == false) {
      console.log("Invalid password");
      setIsFieldsCorrect(false);
    }
  };

  const handleLoginSubmit = () => {
    handleIsFieldsCorrect();

    if (isFieldsCorrect == false) {
      console.log("Fields are not correct");
    }
  };

  // const dynamicEmailErrMessage = {
  //   color: isEmailValid ? "black" : "red",
  //   opacity: isEmailValid ? 0 : 1,
  //   display: isEmailValid ? "none" : "flex",
  // };

  // const dynamicPasswordErrMessage = {
  //   color: isPasswordValid ? "black" : "red",
  //   opacity: isPasswordValid ? 0 : 1,
  //   display: isPasswordValid ? "none" : "flex",
  // };

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
              value={loginFormData.email}
              // onPress={() => setIsEmpty(!isEmpty)}
              onChangeText={(input) => handleFormDataChange("email", input)}
            ></TextInput>
            {/* hidden error message for invalid email */}
            <Text
              style={{
                color: isEmailValid ? "black" : "red",
                opacity: isEmailValid ? 0 : 1,
                display: isEmailValid ? "none" : "flex",
              }}
            >
              Invalid email.
            </Text>

            {/* password */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="Password"
              secureTextEntry={true}
              value={loginFormData.password}
              onChangeText={(input) => handleFormDataChange("password", input)}
            ></TextInput>

            {/* hidden error message for invalid password */}
            <Text
              style={{
                color: isPasswordValid ? "black" : "red",
                opacity: isPasswordValid ? 0 : 1,
                display: isPasswordValid ? "none" : "flex",
              }}
            >
              Password must contain at least 8 characters.
            </Text>

            {/* continue button */}
            <Pressable
              style={loginSignupStyles.slabButton}
              // basta butangan diri ug on press
            >
              <Link href={"/home"} style={loginSignupStyles.slabButtonTxt}>
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
