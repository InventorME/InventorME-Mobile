import React, {useState, useContext, useEffect} from "react";
import { Text, View, Image, Alert, Keyboard, TouchableWithoutFeedback, Component, AppState } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';
import styles from "./LogIn.style";
import { AccountContext } from '../../util/Accounts';
import UserPool from "../../util/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";



const HomeScreen  = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { authenticate, getSession } = useContext(AccountContext);
  const [appState, setAppState] = useState(AppState.currentState);

  // useFocusEffect(
  //   React.useCallback(() =>{
  //     console.log("here");
  //     getSession()
  //     .then(session => {
  //       console.log('Signed In:', "user found");
  //       console.log('Session:', session);
  //       props.navigation.navigate("MainPage");
  //     }).catch(err => {
  //       console.log('err:', "no user found");
  //     })
  //   })
  // );



  useEffect(() => {
    
    getSession()
      .then(session => {
        console.log('Signed In:', "user found");
        // console.log('Session:', session);
        props.navigation.navigate("MainPage");
      }).catch(err => {
        console.log('err:', "no user found");
      })
  }, []);
  
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
        // console.log('Logged in!', data);
        props.navigation.navigate("MainPage");
      })
      .catch(err =>{
        createAlert("Error", "Please Type Password");
        console.error('Failed to login!', err);
      })
 

 
  };
  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
);};

export default HomeScreen;