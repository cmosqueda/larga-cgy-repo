import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  //
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
    marginVertical: 50,
    // marginHorizontal: 5,
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
  },
  logoHeadingsSubheadings: {
    alignItems: "center",
    margin: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  subHeading: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  formArea: {
    // margin: 10,
    width: "80%",
    alignItems: "center",
  },
  singleColInputField: {
    width: "100%",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
  },
  goBtnWrap: {
    width: "100%",
    alignItems: "flex-end",
  },
  goBtn: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#F4C916",
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  goBtnText: {
    color: "#fff",
  },
  // for login redirection purposes

  loginRedirectText: {
    marginVertical: 50,
    // alignItems: "center",
  },
  loginRedirectLink: {
    color: "#F4C916",
  },
});
