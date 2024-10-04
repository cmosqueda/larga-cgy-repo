import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  parentContainer: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  scrollViewStyle: {
    width: "100%",
    // height: "100%",
  },
  displayProfile: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
    // width: "100%",
    // height: "40%",
    padding: "5%",
  },
  userNameDisplay: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  personalInfoWrapper: {
    flexDirection: "column",
    // backgroundColor: "green",
    margin: 15,
  },
  editIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  editButton: {
    // backgroundColor: "blue",
    margin: 5,
  },
  editIcon: {
    color: "#7CB22F",
  },
  formArea: {
    flexDirection: "column",
    backgroundColor: "#F9E6C0",
    padding: 10,
    borderRadius: 10,
  },
  singleField: {
    flexDirection: "column",
  },
  doubleField: {
    flexDirection: "row",
    // width: "100%",
    justifyContent: "space-between",
  },
  doubleFieldDiv: {
    width: "50%",
  },
  textFieldLabel: {
    fontSize: 16,
    marginVertical: 5,
    // fontWeight: "bold",
  },
  textFieldInput: {
    // width: "100%",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    margin: 5,
  },
});
