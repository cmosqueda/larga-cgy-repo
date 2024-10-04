import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import SvgComponent from "@/assets/custom/larga_icon";

// home styles
import { homeStyles } from "@/assets/styles/home-styles";
import { Link } from "expo-router";
// import HamburgerMenu from "@/components/custom/hamburgerMenu";

export default function Home() {
  return (
    // parent screen
    <SafeAreaView style={homeStyles.parentContainer}>
      {/* diri */}
      {/* <HamburgerMenu></HamburgerMenu> */}
      {/* scrollview container*/}
      <ScrollView style={homeStyles.scrollViewStyle}>
        {/* subcontainer */}

        <View style={homeStyles.subContainer}>
          {/* logo, headings, subheadings */}
          <View style={homeStyles.logoHeadingsSubheadings}>
            {/* larga.cgy logo */}
            <SvgComponent></SvgComponent>

            {/* heading */}
            <Text style={homeStyles.heading}>Larga.cgy: Your Guide to Easy Rides!</Text>

            {/* subheading */}
            <Text style={homeStyles.subHeading}>
              Larga.cgy is your jeepney guide for easy travel around Cagayan de Oro. Find routes, stops, and schedules
              to plan your trips and ride with ease!
            </Text>
          </View>

          {/* route request form */}
          <View style={homeStyles.formArea}>
            {/* origin location input */}
            <TextInput style={homeStyles.singleColInputField} placeholder="Your Origin" inputMode={"text"}></TextInput>

            {/* destination location input */}
            <TextInput
              style={homeStyles.singleColInputField}
              placeholder="Your Destination"
              inputMode={"text"}
            ></TextInput>

            {/* go button => handle jeepney route requests processing */}
            <View style={homeStyles.goBtnWrap}>
              <Pressable style={homeStyles.goBtn}>
                <Text style={homeStyles.goBtnText}>GO</Text>
              </Pressable>
            </View>

            {/* for login redirection purposes */}
            <Text style={homeStyles.loginRedirectText}>
              Go back to
              <Link href={"/login-signup/login"} style={homeStyles.loginRedirectLink}>
                {" "}
                Login Screen
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
