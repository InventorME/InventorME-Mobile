import { StyleSheet } from "react-native";
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: hp("5%"),
  },
  child: {
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp("2%"),
    paddingLeft: wp("2%"),
  },
  arrowButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: colors.label,
    borderRadius: 1,
    paddingHorizontal: wp("2.5%"),
    padding: 8,
    margin: wp("5%"),
    width: wp("50%"),
    backgroundColor: colors.background,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: colors.label,
    borderRadius: 1,
    paddingHorizontal: wp("2.5%"),
    padding: 8,
    margin: wp("5%"),
    width: wp("85%"),
    backgroundColor: colors.background,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.button,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: wp("2%"),
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 16,
    color: colors.buttonText,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
