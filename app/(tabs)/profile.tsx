import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";

// import style
import { profileStyles } from "@/assets/styles/profile-styles";

function FormArea() {
  return (
    <View style={profileStyles.formArea}>
      {/* name */}
      <View style={profileStyles.singleField}>
        <Text style={profileStyles.textFieldLabel}>Name</Text>
        <TextInput style={profileStyles.textFieldInput}></TextInput>
      </View>

      {/* sex and age */}
      <View style={profileStyles.doubleField}>
        {/* sex */}
        <View style={profileStyles.doubleFieldDiv}>
          <Text style={profileStyles.textFieldLabel}>Sex</Text>
          <TextInput style={profileStyles.textFieldInput}></TextInput>
        </View>

        {/* age */}
        <View style={profileStyles.doubleFieldDiv}>
          <Text style={profileStyles.textFieldLabel}>Age</Text>
          <TextInput style={profileStyles.textFieldInput}></TextInput>
        </View>
      </View>

      {/* address */}
      <View style={profileStyles.singleField}>
        <Text style={profileStyles.textFieldLabel}>Address</Text>
        <TextInput style={profileStyles.textFieldInput}></TextInput>
      </View>

      {/* phone number */}
      <View style={profileStyles.singleField}>
        <Text style={profileStyles.textFieldLabel}>Phone Number</Text>
        <TextInput style={profileStyles.textFieldInput}></TextInput>
      </View>

      {/* useState */}
    </View>
  );
}

export default function Profile() {
  return (
    <SafeAreaView style={profileStyles.parentContainer}>
      <ScrollView style={profileStyles.scrollViewStyle}>
        {/* profile picture */}
        <View style={profileStyles.displayProfile}>
          <FontAwesome name="user-circle" size={100} color="grey" />
          <Text style={profileStyles.userNameDisplay}>Jalanie Baraocor</Text>
        </View>

        {/* personal info wrapper */}
        <View style={profileStyles.personalInfoWrapper}>
          {/* edit icon */}
          <View style={profileStyles.editIconWrapper}>
            <Text>Personal Information</Text>
            <Pressable style={profileStyles.editButton}>
              <FontAwesome style={profileStyles.editIcon} name="edit" size={35}></FontAwesome>
            </Pressable>
          </View>

          {/* form area */}
          <FormArea></FormArea>
        </View>

        {/* butang ug useState para sa log out button */}
      </ScrollView>
    </SafeAreaView>
  );
}
