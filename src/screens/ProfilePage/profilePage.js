<<<<<<< Updated upstream
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Text, TouchableRipple } from 'react-native-paper';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./profilePage.style";



const ProfilePageNav = (props) => {
=======
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
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
>>>>>>> Stashed changes

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-/s.]{0,1}[0-9]{4}$/');
    
      return (
        <View style={styles.Page}>
          <View style={styles.arrow}>
            <TouchableOpacity
              style={styles.arrowButtonContainer}
              onPress={()=>props.navigation.navigate("MainPage")}
            >
              <FontAwesome name='arrow-left' color='#009688' size={45} />
            </TouchableOpacity>
          </View>
<<<<<<< Updated upstream
          
          <SafeAreaView style={styles.container1}>
            <View>
              <Avatar.Image
                source={{
                        uri: 'https://api.adorable.io/avatars/285/10@adorable.png',
                    }}
                size={120}
              />
              <View style={styles.child}>
                <View>
                  <Text style={{fontWeight: "bold", color:"#000000", fontSize:25, alignSelf: 'center', }}>John Doe</Text> 
                </View>
=======
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
                    marginTop: hp("2%"),
                  }}
                >
                  {this.state.name} {this.state.family_name}
                </Text>
>>>>>>> Stashed changes
              </View>
            </View>
          </SafeAreaView>

<<<<<<< Updated upstream
          <SafeAreaView style={styles.container2}>
            <Text style={{color:"#777777", fontSize:10, marginLeft: 170, marginTop: 50, }}>Phone Number:</Text>
            <View style={{flexDirection:"row", marginLeft: 100, }}>
              <Icon name="phone" color="#009688" size={50} />
              <View style={styles.child}>
                <Text style={{color:"#777777", fontSize:20, marginHorizontal:20 }}>123-456-7890</Text>
              </View>
            </View>
            <Text style={{color:"#777777", fontSize:10, marginLeft: 170, marginTop: 20, }}>Email:</Text>
            <View style={{flexDirection:"row", marginLeft: 100, }}>
              <Icon name="mail" color="#009688" size={50} />
              <View style={styles.child}>
                <Text style={{color:"#777777", fontSize:20, marginHorizontal:20  }}>j_doe@gmail.com</Text>
              </View>
=======
        <SafeAreaView style={styles.container2}>
          <Text
            style={{
              color: "#777777",
              fontSize: 15,
              marginLeft: wp("25%"),
              marginTop: hp("8%"),
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
                  color: "#009688",
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
            }}
          >
            <Icon name="mail" color="#009688" size={50} />
            <View style={styles.child}>
              <Text
                style={{
                  color: "#009688",
                  fontSize: 20,
                  marginHorizontal: wp("5%"),
                }}
              >
                {this.state.email}
              </Text>
>>>>>>> Stashed changes
            </View>
            <Text style={{color:"#777777", fontSize:10, marginLeft: 170, marginTop: 20, }}>Creation Date:</Text>
            <View style={{flexDirection:"row", marginLeft: 100, }}>
              <Icon name="calendar" color="#009688" size={50} />
              <View style={styles.child}>
                <Text style={{color:"#777777", fontSize:20, marginHorizontal:20  }}>2-25-2021</Text>
              </View>
            </View>
          </SafeAreaView>

          <SafeAreaView style={styles.container1}>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={()=>props.navigation.navigate("EditProfilePage")}
            >
              <Text style={styles.appButtonText}>Edit Profile</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() =>signOut()}
            >
              <Text style={styles.appButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>                
      );
};
export default ProfilePageNav;