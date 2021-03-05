/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Text, View, Image, ToastAndroid,Platform, AlertIOS} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./LogIn.style";
import data from "../../../db.json";


const HomeScreen = (props) => {
  const [email, setEmail]= useState('');
  const [Password, setPassword]= useState('');
  const [emProb, setEmProb] = useState(false);
  const [passProb,setPassProb] = useState(false);
  const [loginPressed, setLoginPressed] = useState(false);
  
  var json = require('../../../db.json');
  found = false;
  
  size  = json.users.length;
  


  const verifyLogin = async () =>{ 
    for(let i = 0; i < size; i++){
      if(json.users[i].email == email && json.users[i].password == Password){
        found = true;
        console.log(found,email,Password);
        break;
      }
      if(email === '' || Password === ''){
        if(email == ''){
          await setEmProb(true);
          console.log(found,email,Password);
        }
        if(Password === ''){
          await setPassProb(true);
          console.log(found,email,Password);
        }
        
      }
      
      console.log(found,email,Password);
    }
    await setLoginPressed(true);
    return found;
  }

//  const errorMessage = () => {
//     console.log('Wdksjfkds', emProb,passProb);
//     if(emProb && passProb){
//       if (Platform.OS === 'android') {
//         ToastAndroid.show("Please correct the errors on the Password and Email fields.", ToastAndroid.SHORT)
//       } else {
//         AlertIOS.alert("Please correct the errors on the Password and Email fields.");
//       }
//     }
//     else if(emProb){
//       if (Platform.OS === 'android') {
//         ToastAndroid.show("Please correct the error on the Email field.", ToastAndroid.SHORT)
//       } else {
//         console.log("Inside android error")
//         AlertIOS.alert("Please correct the error on the Email field.");
//       }
//     }
//     else if(passProb){
//       if (Platform.OS === 'android') {
//         ToastAndroid.show("Please correct the error on the Password field.", ToastAndroid.SHORT)
//       } else {
//         AlertIOS.alert("Please correct the error on the Password field.");
//       }
//     }
    

  

  

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
      {emProb && <Text style={{color: 'red'}} >Invalid Email</Text>}
      <TextInput 
        style={emProb ? styles.TextInputWrong : styles.TextInput}
        placeholder='email'
        onChangeText={(val)=>setEmail(val)}
        value={email}
      />
      {passProb && <Text style={{color: 'red'}} >Invalid Password</Text>}
      <TextInput
        secureTextEntry
        style={passProb ? styles.TextInputWrong : styles.TextInput}
        placeholder='Password'
        onChangeText={(val)=>setPassword(val)}
        value={Password}
      />
      
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>{
          verifyLogin();
          found ?  props.navigation.navigate("MainPage") : "";
        
        }}
      >
        <Text style={styles.appButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>props.navigation.navigate("CreateAccountScreen")}
      >
        <Text style={styles.appButtonText}>Create Account</Text>
      </TouchableOpacity>
      {((!found && loginPressed) && (email != '' && Password != '') )&& <Text style={{color: 'red', marginTop: 5}}>Account was not found!{'\n'}
      Please create an account</Text>}

    </View>
);};

export default HomeScreen;