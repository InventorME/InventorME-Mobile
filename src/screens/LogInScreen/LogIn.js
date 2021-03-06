import React, {useState, useContext} from "react";
import { Text, View, Image, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./LogIn.style";
import { AccountContext } from '../../util/Accounts';
import UserPool from "../../util/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";


const HomeScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);
  const createAlert = (title, msg) =>
    Alert.alert(
      title,
      msg,
      [
        { text: "OK"}
      ]
    );
  const validateUser = () =>{
    if(email === "")
      createAlert("Error", "Please Type Email");
    else if(password === "")
      createAlert("Error", "Please Type Password");
    else
      submit();

  };

  const submit = ()=> {
    authenticate(email, password)
      .then(data =>{
        //success
        console.log('Logged in!', data);
        props.navigation.navigate("MainPage");
      })
      .catch(err =>{
        createAlert("Error", "Please Type Password");
        console.error('Failed to login!', err);
      })
 

 
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
      <TextInput 
       
        style={styles.TextInput}
        placeholder='Email'
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
        onPress={()=>{validateUser();}}
      >
        <Text style={styles.appButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>props.navigation.navigate("CreateAccountScreen")}
      >
        <Text style={styles.appButtonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
);};

export default HomeScreen;