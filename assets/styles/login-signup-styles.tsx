import { StyleSheet } from "react-native";

export const loginSignupStyles = StyleSheet.create({
  parentContainer: {
    // flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 20,
  },
  scrollViewStyle: {
    // marginVertical: 50,
    // marginHorizontal: 5,
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  formArea: {
    marginVertical: 10,
    width: "90%",
  },
  subHeading: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  doubleCol: {
    // flex: 1,
    // width: "50%",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    // marginVertical: 5,
  },
  doubleColDiv: {
    width: "50%",
  },
  singleColInputField: {
    // width: "100%",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
  },
  // slabButtonLink: {
  //   // width: "100%",
  // },
  slabButton: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#F4C916",
    padding: 10,
    borderRadius: 5,
  },
  slabButtonTxt: {
    color: "#fff",
    textAlign: "center",
  },
  loginOrSignupTextArea: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  loginOrSignupText: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 10,
  },
  routeScreenLink: {
    color: "#7CB22F",
  },
  divider: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerText: {
    marginHorizontal: 5,
    textAlign: "center",
  },
  dividerLine: {
    width: "45%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
