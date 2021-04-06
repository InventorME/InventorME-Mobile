/* eslint-disable no-unused-vars */
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colors } from "../../util/colors";

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
    backgroundColor: colors.background,
  },
  deleteBtn: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: hp("8%"),
    paddingEnd: wp("10%"),
    paddingLeft: wp("35%"),
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  Image: {
    height: 70,
    width: 50,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 1,
    paddingHorizontal: wp("2.5%"),
    color: colors.text,
    padding: 8,
    margin: wp("5%"),
    width: wp("50%"),
    backgroundColor: colors.background,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.button,
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
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  deleteButtonText: {
    fontSize: 14,
    color: colors.buttonText,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  appButtonText: {
    fontSize: 18,
    color: colors.buttonText,
    fontWeight: "bold",
    alignItems: "center",
    textTransform: "uppercase",
  },
});
