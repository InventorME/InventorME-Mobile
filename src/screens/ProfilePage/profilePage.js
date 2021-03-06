/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Text, TouchableRipple } from 'react-native-paper';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./profilePage.style";
import { AccountContext } from '../../util/Accounts';




const ProfilePageNav = (props) => {

  const { logout } = useContext(AccountContext);
  

    const signOut = () =>{
        logout();
        props.navigation.navigate("HomeScreen");
    };
    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-/s.]{0,1}[0-9]{4}$/');
    
      return (
        <View style={styles.Page}>
          <View style={styles.arrow}>
            <TouchableOpacity
              style={styles.arrowButtonContainer}
              onPress={()=>props.navigation.goBack()}
            >
              <FontAwesome name='arrow-left' color='#009688' size={45} />
            </TouchableOpacity>
          </View>
          
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
                  <Text style={{color:"#bbbbc5", fontSize:12, alignSelf: 'center', }}>@j_doe</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>

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

           
          </SafeAreaView>
          <SafeAreaView style={styles.container1}>
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