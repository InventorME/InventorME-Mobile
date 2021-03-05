/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Text, View, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./LogIn.style";
import UserPool from "../UserPool";
import data from "../../../db.json";

const HomeScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },

      onFailure: err => {
        console.error("onFailure:", err);
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
      <TextInput 
        style={styles.TextInput}
        placeholder='Username'
        onChangeText={(val)=>setEmail(val)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.TextInput}
        placeholder='Password'
        onChangeText={(val)=>setPassword(val)}
        value={password}
      />
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>{props.navigation.navigate("MainPage")}}
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