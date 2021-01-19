import React, {useState} from "react";
import { Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./LogIn.style";

const HomeScreen = () => {
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
      <Text>
        Username:
        {userName}
      </Text>
      <Text>
        Password:
        {Password}
      </Text>
    </View>
);};

export default HomeScreen;
