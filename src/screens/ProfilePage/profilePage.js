/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-duplicates */
/* eslint-disable lines-between-class-members */
import React, { Component } from "react";
import { View, Image, SafeAreaView, AppState } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Auth } from "aws-amplify";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Appearance } from "react-native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "react-native-reanimated";
import { colors } from "../../util/colors";
import styles from "./profilePage.style";

class ProfilePageNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phone_number: "",
      name: "",
      family_name: "",
      appState: AppState.currentState,
    };
    this.signOut = this.signOut.bind(this);
  }
  async componentDidMount() {
    try {
      const data = await Auth.currentUserInfo();
      // console.log('userInfo data:', data);
      this.setState({ name: data.attributes.name });
      this.setState({ family_name: data.attributes.family_name });
      this.setState({ email: data.attributes.email });
      this.setState({ phone_number: data.attributes.phone_number });
    } catch (error) {
      console.log("could not find user :(", error);
      alert("Error: No user found, please sign in again");
      this.props.navigation.navigate("HomeScreen");
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
      console.log("User Signed Out");
      this.props.navigation.navigate("HomeScreen");
    } catch (error) {
      console.log("user sign out error");
    }
  }

  render() {
    return (
      <View style={styles.Page}>
        <View style={styles.signOutBtn}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={this.signOut}
          >
            <Text style={styles.appButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.container1}>
          <View>
            <Avatar.Image
              style={{ alignSelf: "center" }}
              source={{
                uri: "https://api.adorable.io/avatars/285/10@adorable.png",
              }}
              size={180}
            />
            <View style={styles.child}>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#000000",
                    fontSize: 25,
                    alignSelf: "center",
                    marginTop: hp("2%"),
                    marginLeft: wp("5%"),
                  }}
                >
                  {this.state.name} {this.state.family_name}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.child}>
            <Text
              style={{
                color: "#777777",
                fontSize: 15,
                marginLeft: wp("25%"),
                marginTop: hp("2%"),
              }}
            >
              Phone Number:
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: wp("25%"),
                marginTop: hp("2%"),
              }}
            >
              <Icon name="phone" color="#009688" size={50} />
              <View style={styles.child}>
                <Text
                  style={{
                    color: "#777777",
                    fontSize: 20,
                    marginHorizontal: wp("5%"),
                  }}
                >
                  {this.state.phone_number}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#777777",
                fontSize: 15,
                marginLeft: wp("25%"),
                marginTop: hp("5%"),
              }}
            >
              Email:
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: wp("25%"),
                marginTop: hp("2%"),
                marginBottom: hp("4%"),
              }}
            >
              <Icon name="mail" color="#009688" size={50} />
              <View style={styles.child}>
                <Text
                  style={{
                    color: "#777777",
                    fontSize: 20,
                    marginHorizontal: wp("5%"),
                  }}
                >
                  {this.state.email}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.child}>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => this.props.navigation.navigate("EditProfilePage")}
            >
              <Text style={styles.appButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
export default ProfilePageNav;
