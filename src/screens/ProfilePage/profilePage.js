import React, { Component } from "react";
import { View, Image, SafeAreaView, AppState } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./profilePage.style";
import { Appearance } from 'react-native';
import { Auth } from 'aws-amplify';
import { colors } from '../../util/colors';
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "react-native-reanimated";

class ProfilePageNav extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', phone_number: '', name: '', family_name: '', appState: AppState.currentState }
    this.signOut = this.signOut.bind(this);
  }
  async componentDidMount() {
    // this.focused = navigation.addListener('focus', () => {
    //   console.log('focused');
    // });
    try {
      const data = await Auth.currentUserInfo();
      // console.log('userInfo data:', data);
      this.setState({ name: data.attributes.name });
      this.setState({ family_name: data.attributes.family_name });
      this.setState({ email: data.attributes.email });
      this.setState({ phone_number: data.attributes.phone_number });
    }
    catch (error) {
      console.log('could not find user :(', error);
      alert("Error: No user found, please sign in again");
      this.props.navigation.navigate("HomeScreen");
    }
  }



  async signOut() {
    try {
      await Auth.signOut();
      console.log("User Signed Out");
      this.props.navigation.navigate("HomeScreen");
    }
    catch (error) {
      console.log("user sign out error");
    }
  }

  render() {
    return (
      <View style={styles.Page}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.arrow}>
            <TouchableOpacity
              style={styles.arrowButtonContainer}
              onPress={() => this.props.navigation.goBack()}
            >
              <FontAwesome name="arrow-left" color={colors.accent} size={45} />
            </TouchableOpacity>
          </View>
          <View style={styles.signOutBtn}>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={this.signOut}
            >
              <Text style={styles.appButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView style={styles.container1}>
          <View>
            <Avatar.Image
              style={{ alignSelf: "center" }}
              source={{
                uri: "https://api.adorable.io/avatars/285/10@adorable.png",
              }}
              size={120}
            />
            <View style={styles.child}>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.text,
                    fontSize: 25,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                >
                  {this.state.name} {this.state.family_name}
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.container2}>
          <Text
            style={{
              color: colors.label,
              fontSize: 15,
              marginLeft: 170,
              marginTop: 50,
            }}
          >
            Phone Number:
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 100 }}>
            <Icon name="phone" color={colors.icon} size={50} />
            <View style={styles.child}>
              <Text
                style={{ color: colors.text, fontSize: 20, marginHorizontal: 20 }}
              >
                {this.state.phone_number}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: colors.label,
              fontSize: 15,
              marginLeft: 170,
              marginTop: 50,
            }}
          >
            Email:
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 100 }}>
            <Icon name="mail" color={colors.icon} size={50} />
            <View style={styles.child}>
              <Text
                style={{ color: colors.text, fontSize: 20, marginHorizontal: 20 }}
              >
                {this.state.email}
              </Text>
            </View>
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.container1}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={() => this.props.navigation.navigate("EditProfilePage")}
          >
            <Text style={styles.appButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
export default ProfilePageNav;
