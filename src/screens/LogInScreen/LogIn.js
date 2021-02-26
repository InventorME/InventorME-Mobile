/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Text, View, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./LogIn.style";

const HomeScreen = (props) => {
  const [userName, setUsername]= useState();
  const [Password, setPassword]= useState();
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
      <TextInput 
        style={styles.TextInput}
        placeholder='Username'
        onChangeText={(val)=>setUsername(val)}
      />
      <TextInput
        secureTextEntry
        style={styles.TextInput}
        placeholder='Password'
        onChangeText={(val)=>setPassword(val)}
      />
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>props.navigation.navigate("MainPage")}
      >
        <Text style={styles.appButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.appButtonContainer} 
        onPress={()=>props.navigation.navigate("CreateAccountScreen")}
      >
        <Text style={styles.appButtonText}>Create Account</Text>
      </TouchableOpacity>

    </View>
);};

export default HomeScreen;