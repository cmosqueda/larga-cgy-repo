import SvgComponent from "@/assets/custom/larga_icon";
import { loginSignupStyles } from "@/assets/styles/login-signup-styles";
import GoogleAuthBtn from "@/components/custom/googleAuthBtn";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const [isEmpty, setIsEmpty] = useState(false);

  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormDataChange = (name: string, value: string) => {
    setSignupFormData({ ...signupFormData, [name]: value });
    handleEmailValidation();
    handlePasswordValidation();
    // handleNameEmptyError();
    setIsEmpty(false);
    //
  };

  const [isNameEmpty, setIsNameEmpty] = useState(false);

  // const handleNameEmptyError = () => {
  //   if (signupFormData.firstName.length == 0 && signupFormData.lastName.length == 0) {
  //     console.log("name is empty");
  //     // setIsEmpty(true);
  //     setIsNameEmpty(true);
  //   } else {
  //     setIsEmpty(false);
  //   }
  // };

  // chech if fields are empty
  // const handleEmptyFieldsError = () => {
  //   if (signupFormData.firstName == "") {
  //     console.log("first name is empty");
  //     setIsEmpty(true);
  //     setIsNameEmpty(true);
  //   }

  //   if (signupFormData.lastName == "") {
  //     console.log("last name is empty");
  //     setIsEmpty(true);
  //     setIsNameEmpty(true);
  //   }

  //   if (signupFormData.email == "") {
  //     console.log("Email is empty.");
  //     setIsEmpty(true);
  //   }

  //   if (signupFormData.password == "") {
  //     console.log("Password is empty.");
  //     setIsEmpty(true);
  //   }

  //   if (signupFormData.confirmPassword == "") {
  //     console.log("Confirm password is empty.");
  //   }
  // };

  //   chech if password is valid
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handlePasswordValidation = () => {
    if (signupFormData.password.length > 6) {
      // error message
      console.log("Password is acceptable");
      setIsPasswordValid(true);
    } else {
      console.log("Password must be at least 8 characters.");
      setIsPasswordValid(false);
    }
  };

  // check confirm password input
  const [isConfirmPasswordCorrect, setIsConfirmPasswordCorrect] = useState(true);
  const handleConfirmPasswordInput = (input: string) => {
    //
    if (signupFormData.password !== input) {
      console.log("Password does not match.");
      setIsConfirmPasswordCorrect(false);
    } else {
      console.log("Password matches.");
      setIsConfirmPasswordCorrect(true);
    }
  };

  //

  //   check if email is valid, apply regex
  // const [email, setEmail] = useState(() => loginFormData.email);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailValidation = () => {
    if (emailRegex.test(signupFormData.email)) {
      // email is valid
      setIsEmailValid(true);
      console.log("valid email");
    } else {
      // email invalid
      setIsEmailValid(false);
      console.log("invalid email");
    }
  };

  return (
    // screen
    <SafeAreaView style={loginSignupStyles.parentContainer}>
      {/* scroll view */}
      <ScrollView style={loginSignupStyles.scrollViewStyle}>
        {/* screen subcontainer */}
        <View style={loginSignupStyles.subContainer}>
          {/* logo */}
          <View>
            <SvgComponent></SvgComponent>
          </View>

          {/* heading and details */}
          <View>
            <Text style={loginSignupStyles.heading}>Sign up to Larga.cgy</Text>
            <Text style={loginSignupStyles.subHeading}>
              Don't have an account? Create your new Larga.cgy account now and commute with us, higala!
            </Text>
          </View>

          {/* sign up form */}
          <View style={loginSignupStyles.formArea}>
            {/* first name and last name */}
            <View style={loginSignupStyles.doubleColDivider}>
              {/* first name */}
              <TextInput
                style={loginSignupStyles.doubleColInputField}
                placeholder="First Name"
                inputMode={"text"}
              ></TextInput>

              {/* last name */}
              <TextInput
                style={loginSignupStyles.doubleColInputField}
                placeholder="Last Name"
                inputMode={"text"}
              ></TextInput>
            </View>
            {/* hidden text for name */}
            {/* <Text
              style={{
                color: isNameEmpty ? "black" : "red",
                opacity: isNameEmpty ? 0 : 1,
                display: isNameEmpty ? "none" : "flex",
              }}
            >
              Input First Name and Last Name.
            </Text> */}

            {/* email */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="Email"
              inputMode={"email"}
              value={signupFormData.email}
              onChangeText={(input) => handleFormDataChange("email", input)}
            ></TextInput>

            {/* hidden text for email error */}
            <Text
              style={{
                color: isEmailValid ? "black" : "red",
                opacity: isEmailValid ? 0 : 1,
                display: isEmailValid ? "none" : "flex",
              }}
            >
              Email is invalid.
            </Text>

            {/* password */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(input) => handleFormDataChange("password", input)}
            ></TextInput>

            {/* hidden text for confirm password */}
            <Text
              style={{
                color: isPasswordValid ? "black" : "red",
                opacity: isPasswordValid ? 0 : 1,
                display: isPasswordValid ? "none" : "flex",
              }}
            >
              Password should be at least 8 characters.
            </Text>

            {/* confirm password */}
            <TextInput
              style={loginSignupStyles.singleColInputField}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(input) => handleConfirmPasswordInput(input)}
            ></TextInput>

            {/* hidden text for confirm password */}
            <Text
              style={{
                color: isConfirmPasswordCorrect ? "black" : "red",
                opacity: isConfirmPasswordCorrect ? 0 : 1,
                display: isConfirmPasswordCorrect ? "none" : "flex",
              }}
            >
              Password does not match.
            </Text>

            {/* Continue button */}
            <Pressable style={loginSignupStyles.slabButton}>
              <Link href={"/home"} style={loginSignupStyles.slabButtonTxt}>
                SIGN UP
              </Link>
            </Pressable>

            {/* Log in option => links user to log in screen */}
            <Text style={loginSignupStyles.loginOrSignupText}>
              Already have an account?
              <Link href={"/login-signup/login"} style={loginSignupStyles.routeScreenLink}>
                {" "}
                Log in
              </Link>
            </Text>

            {/* horizontal line */}
            <View style={loginSignupStyles.divider}>
              <View style={loginSignupStyles.dividerLine}></View>
              <Text style={loginSignupStyles.dividerText}>or</Text>
              <View style={loginSignupStyles.dividerLine}></View>
            </View>

            {/* Google auth */}
            <GoogleAuthBtn></GoogleAuthBtn>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
