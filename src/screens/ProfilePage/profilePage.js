/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/static-property-placement */
import React, { useState, useContext, useEffect, Component } from "react";
import { View, Image, SafeAreaView, StyleSheet, AppState } from "react-native";
import { Avatar, Text, TouchableRipple } from "react-native-paper";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./profilePage.style";
import { AccountContext } from '../../util/Accounts';
import { Database } from '../../util/Database';



class ProfilePageNav extends Component {
  static contextType = AccountContext
  

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', phone_number: '', name: '', family_name: '', appState: AppState.currentState }
    this.signOut = this.signOut.bind(this);
    
  }
  componentDidMount() {
    this.setState({ appState: AppState.currentState });
    AppState.addEventListener("change", this._handleAppStateChange);
    const { getSession } = this.context;
    // console.log("Mounting");
    getSession()
      .then((data) => {
        this.setState({ name: data.name });
        this.setState({ family_name: data.family_name });
        this.setState({ email: data.email });
        this.setState({ phone_number: data.phone_number });
        // this.setState({ userProfilePic: res.userProfilePicURL })
        // console.log("Data:",data);
        // console.log("Name:",data.name);
        this.render();
      })
      .catch((err) => {
        console.log(err);
        // alert("Error: No user found, please sign in again");
        this.props.navigation.navigate("HomeScreen");
      });
  }
  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    console.log(this.state.appState);
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground! (iOS and Android)");
      // this.componentDidMount();
    }
    this.setState({ appState: nextAppState });
  };

  signOut() {
    const { logout } = this.context;
    logout();
    this.props.navigation.navigate("HomeScreen");
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
              <FontAwesome name="arrow-left" color="#009688" size={45} />
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
                    color: "#000000",
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
              color: "#777777",
              fontSize: 15,
              marginLeft: 170,
              marginTop: 50,
            }}
          >
            Phone Number:
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 100 }}>
            <Icon name="phone" color="#009688" size={50} />
            <View style={styles.child}>
              <Text
                style={{ color: "#777777", fontSize: 20, marginHorizontal: 20 }}
              >
                {this.state.phone_number}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: "#777777",
              fontSize: 15,
              marginLeft: 170,
              marginTop: 50,
            }}
          >
            Email:
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 100 }}>
            <Icon name="mail" color="#009688" size={50} />
            <View style={styles.child}>
              <Text
                style={{ color: "#777777", fontSize: 20, marginHorizontal: 20 }}
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
