import React, { useState, useEffect} from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./CreateAccountScreen.style";
import { Auth } from "aws-amplify";

const CreateAccountScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhone] = useState('');
    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');

    const createAlert = (title, msg) =>
    Alert.alert(
      title,
      msg,
      [
        { text: "OK"}
      ],
      { cancelable: false }
    );

    const submit = async event => {

      const attributeList = {
        'name': name,
        'phone_number': phone_number,
        'family_name': family_name,
        'email': email
        // ,'photo': 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
      };
      try{
        await Auth.signUp({username: email, password: password, attributes: attributeList});
        // console.log('User Created!');
        createAlert("Account Created","Please confirm account by clicking on the email sent to your inbox");
        this.props.navigation.navigate("HomeScreen");
      }catch(error){
        console.log('create user error: ', error);
      }
    };
    
    const upperCheck = (str) =>{
      if(str.toLowerCase() === str){
        return false;
      }
      return true;
    };
    const lowerCheck = (str) => {
      if(str.toUpperCase() === str){
        return false;
      }
      return true;
    };
    const alphCheck = (str) => {
      var regex = /[a-zA-Z]/g;
      return regex.test(str);
    };
    const numCheck = (str) => {
      var regex = /\d/g;
      return regex.test(str);
    };
    const phoneCheck = (num) => {
      //insert phone number checking here
      var regex = /^(\+1\d{3}\d{3}\d{4}$)/g
      return regex.test(num);
    };
    const emailCheck = (str) => {
      var regex = /^[a-zA-Z]+[0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g
      return regex.test(str);
    };

    const validateUser = () => {
      if(name === ""){
        createAlert("Create Account Error", "Please Type First Name");
      }else if(family_name === ""){
        createAlert("Create Account Error", "Please Type Last Name");
      }else if(password.length<8){
        createAlert("Create Account Error", "Password Must Be At Least 8 Characters Long");
      }else if(!alphCheck(password)){
        createAlert("Create Account Error", "Password Must Contain Letter");
      }else if(!upperCheck(password)){
        createAlert("Create Account Error", "Password Must Contain One Upper-Case Letter");
      }else if(!lowerCheck(password)){
        createAlert("Create Account Error", "Password Must Contain One Lower-Case Letter");
      }else if(!numCheck(password)){
        createAlert("Create Account Error", "Password Must Contain One Number");
      // }else if(!phoneCheck(phone_number)){
      //   createAlert("Create Account Error", "Phone Number Must Be At Least 9 Numbers Long");
      }else if(!emailCheck(email)){
        console.log("here", emailCheck(email))
        createAlert("Create Account Error", "Email must be in the correct format 'Example@Example.Example'");
      }
      else{
        submit();
      }

    };

    return (
      <KeyboardAwareScrollView 
        resetScrollToCoords = {{x : 0, y : 0}}
        contentContainerStyle = {styles.Page}
        scrollEnabled = {false}  
      >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.Page}>
            <View style={styles.arrow}>
                  
              <TouchableOpacity
                style={styles.arrowButtonContainer}
                onPress={()=>props.navigation.navigate("HomeScreen")}
              >
                <FontAwesome name='arrow-left' color='#009688' size={45} />
              </TouchableOpacity>
                  
            </View>
            <View style={styles.container}>
                  
              
              <View style={styles.logo}>
                <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688'}}>First Name:</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder='First Name'
                  onChangeText={(text) => {setName(text)}}
                  value={name}
                />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688' }}>Last Name:</Text>
                <TextInput 
                  style={styles.TextInput}
                  placeholder='Last Name'
                  onChangeText={(text) => {setFamilyName(text)}}
                  value={family_name}
                />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688'}}>Phone Number:</Text>
                <TextInput   
                  type="number"
                  style={styles.TextInput}
                  placeholder='Phone Number'
                  //validations={{matchRegexp:phoneRegEx}}
                  onChangeText={(text) => {setPhone(text)}}
                  value={phone_number}
                />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688'}}>Email:</Text>
                <TextInput 
                  type="email"
                  style={styles.TextInput}
                  placeholder='Email'
                  onChangeText={(text) => {setEmail(text)}}
                  value={email}
                />
              </View>
              
              <View style={styles.child}>
                <Text style={{color: '#009688'}}>Password:</Text>
                <TextInput    
                  secureTextEntry
                  style={styles.TextInput}
                  placeholder='Password'
                  onChangeText={(text) => {setPassword(text)}}
                  value={password}
                />
              </View>
              <View style={styles.logo}>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={()=>{{validateUser()};}}
                >
                  <Text style={styles.appButtonText}>Create Account</Text>
                </TouchableOpacity>
              </View> 

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView> 
    )
    
}

export default CreateAccountScreen;
