// import { View, Text } from "react-native";
// import React, { useState } from "react";

// export default function loginErrorHandling() {
//   //   check if error => useState initial value is true
//   const [isEmpty, setIsEmpty] = useState(true);

//   // use state for login form date
//   const [loginFormData, setLoginFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleFormDataChange = (name: string, value: string) => {
//     setLoginFormData((prev) => ({ ...prev, [name]: value }));
//     handleEmailValidation();
//     handlePasswordValidation();
//     setIsEmpty(false);
//   };

//   // check if empty fields
//   const handleEmptyFieldsError = () => {
//     if (loginFormData.email == "") {
//       console.log("Email is empty.");
//       setIsEmpty(true);
//     }

//     if (loginFormData.password == "") {
//       console.log("Password is empty.");
//       setIsEmpty(true);
//     }
//   };

//   //   chech if password is valid
//   const [isPasswordValid, setIsPasswordValid] = useState(true);
//   const handlePasswordValidation = () => {
//     if (loginFormData.password.length < 8) {
//       // error message
//       console.log("Password must be at least 8 characters.");
//       setIsPasswordValid(false);
//     } else {
//       console.log("Password is acceptable");
//       setIsPasswordValid(true);
//     }
//   };

//   //   check if email is valid, apply regex
//   // const [email, setEmail] = useState(() => loginFormData.email);
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleEmailValidation = () => {
//     if (emailRegex.test(loginFormData.email)) {
//       // email is valid
//       setIsEmailValid(true);
//       console.log("valid email");
//     } else {
//       // email invalid
//       setIsEmailValid(false);
//       console.log("invalid email");
//     }
//   };

//   return (
//     <View>
//       <Text>loginErrorHandling</Text>
//     </View>
//   );
// }
