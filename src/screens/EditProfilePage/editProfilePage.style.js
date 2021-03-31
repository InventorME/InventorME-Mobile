import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  Page: {
    flex: 1,
    alignItems: "stretch",
  },
  child: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  arrow: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingTop: hp("6%"),
    paddingStart: wp("5%"),
    backgroundColor: "#fff",
  },
  deleteBtn: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: hp("6.9%"),
    paddingEnd: wp("10%"),
    paddingLeft: wp("30%"),
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    paddingTop: 50,
    backgroundColor: "#fff",
  },

  Image: {
    height: 70,
    width: 50,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 1,
    paddingHorizontal: wp("2.5%"),
    padding: 8,
    margin: wp("5%"),
    width: wp("50%"),
    backgroundColor: "#fff",
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  arrowButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  deleteButtonContainer: {
    elevation: 8,
    backgroundColor: "#e01f0d",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  deleteButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    textTransform: "uppercase",
  },
});
