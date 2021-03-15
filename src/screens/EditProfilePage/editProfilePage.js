/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-useless-escape */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable camelcase */
/* eslint-disable spaced-comment */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect} from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./editProfilePage.style";
import UserPool from "../../util/UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const EditProfilePage = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-/\s\.]{0,1}[0-9]{4}$/');
    
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

    const submit = event => {

      const attributeList = [];

      attributeList.push(new CognitoUserAttribute({
        Name: 'name',
        Value: name
      }));

      attributeList.push(new CognitoUserAttribute({
        Name: 'phone_number',
        Value: phone_number
      }));

      attributeList.push(new CognitoUserAttribute({
        Name: 'family_name',
        Value: family_name
      }));

      UserPool.signUp(email, password, attributeList, null, (err, data) => {
        if (err){
          console.error(err);
        } 
        //If no errors new user is created here
        else{
          props.navigation.navigate("ProfilePage");
          console.log(data);
        }
        
      });

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
        createAlert("Saving Error", "Please Type First Name");
      }else if(family_name === ""){
        createAlert("Saving Error", "Please Type Last Name");
      }else if(password.length<8){
        createAlert("Saving Error", "Password Must Be At Least 8 Characters Long");
      }else if(!alphCheck(password)){
        createAlert("Saving Error", "Password Must Contain Letter");
      }else if(!upperCheck(password)){
        createAlert("Saving Error", "Password Must Contain One Upper-Case Letter");
      }else if(!lowerCheck(password)){
        createAlert("Saving Error", "Password Must Contain One Lower-Case Letter");
      }else if(!numCheck(password)){
        createAlert("Saving Error", "Password Must Contain One Number");
      }else if(!phoneCheck(phone_number)){
        createAlert("Saving Error", "Phone Number Must Be At Least 9 Numbers Long");
      }else if(!emailCheck(email)){
        console.log("here", emailCheck(email))
        createAlert("Saving Error", "Email must be in the correct format 'Example@Example.Example'");
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
            <View style={{flexDirection:"row"}}>
                <View style={styles.arrow}>
                    
                <TouchableOpacity
                    style={styles.arrowButtonContainer}
                    onPress={()=>props.navigation.navigate("ProfilePage")}
                >
                    <FontAwesome name='arrow-left' color='#009688' size={45} />
                </TouchableOpacity>
                    
                </View>
                <View style={styles.deleteBtn}>
                    <TouchableOpacity
                        style={styles.deleteButtonContainer}
                        // onPress={}
                    >
                        <Text style={styles.deleteButtonText}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                  
              
              <View style={styles.logo}>
                <Image source={{
                        uri: 'https://api.adorable.io/avatars/285/10@adorable.png',
                    }} 
                />
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
                  <Text style={styles.appButtonText}>Save</Text>
                </TouchableOpacity>
              </View> 

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView> 
    )
    
}

export default EditProfilePage;