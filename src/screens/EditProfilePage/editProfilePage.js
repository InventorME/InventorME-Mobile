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
import React, { useState, useEffect, Component} from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, ScrollView, Alert, TouchableWithoutFeedback, Keyboard, AppState } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./editProfilePage.style";
import UserPool from "../../util/UserPool";
import { AccountContext } from '../../util/Accounts';
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { render } from 'react-dom';

class EditProfilePage extends Component {
  static contextType = AccountContext
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      family_name: '',
      email: '',
      phone_number: '',
    }
    this.validateUser = this.validateUser.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    
  }
  componentDidMount() {
    const { getSession } = this.context;
    getSession()
      .then((data) => { 
        this.setState({ name: data.name })
        this.setState({ family_name: data.family_name })
        this.setState({ email: data.email })
        this.setState({ phone_number: data.phone_number })
      })
      .catch(err =>{
        console.log(err);
        alert("Error: No user found, please sign in again");
    });
  }
  
  createAlert(title, msg){
    Alert.alert(
      title,
      msg,
      [{ text: "OK"}],{ cancelable: false })
    }

    phoneCheck(num){
      //insert phone number checking here
      var regex = /^(\+1\d{3}\d{3}\d{4}$)/g
      return regex.test(num);
    };

    nameOnChange = (event) => {
      this.setState({name: event});
    }
    lastNameOnChange = (event) => {
      this.setState({family_name: event});
    }
    phoneOnChange = (event) => {
      this.setState({phone_number: event});
    }
    
    saveChanges(){
      const { getSession } = this.context;
      getSession().then(({ user }) => {
        const attributes = [];
        attributes.push(new CognitoUserAttribute({
          Name: 'name',
          Value: this.state.name
        }));
        attributes.push(new CognitoUserAttribute({
          Name: 'phone_number',
          Value: this.state.phone_number
        }));
        attributes.push(new CognitoUserAttribute({
          Name: 'family_name',
          Value: this.state.family_name
        }));
  
        user.updateAttributes(attributes, (err, result) => {
          if(err){
            console.error(err);
            this.createAlert("Error","Could Not Save Changes");
          } 
          this.props.navigation.navigate("ProfilePage");
          // console.log(result);
        });
      });
    }
    
    


    validateUser(){
      if(this.state.name === ""){
        this.createAlert("Saving Error", "Please Type First Name");
      }else if(this.state.family_name === ""){
        this.createAlert("Saving Error", "Please Type Last Name");
      }else if(!this.phoneCheck(this.state.phone_number)){
        this.createAlert("Saving Error", "Phone Number Must Be At Least 9 Numbers Long");
      }else{
        this.saveChanges();
      }
    }
    render(){
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
                    onPress={()=>this.props.navigation.goBack()}
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
                  onChangeText={this.nameOnChange}
                  value={this.state.name}
                />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688' }}>Last Name:</Text>
                <TextInput 
                  style={styles.TextInput}
                  placeholder='Last Name'
                  onChangeText={this.lastNameOnChange}
                  value={this.state.family_name}
                />
              </View>

              <View style={styles.child}>
                <Text style={{color: '#009688'}}>Phone Number:</Text>
                <TextInput   
                  type="number"
                  style={styles.TextInput}
                  placeholder='Phone Number'
                  onChangeText={this.phoneOnChange}
                  value={this.state.phone_number}
                />
              </View>

              <View style={styles.logo}>
                <TouchableOpacity
                  style={styles.appButtonContainer}
                  onPress={this.validateUser}
                >
                  <Text style={styles.appButtonText}>Save</Text>
                </TouchableOpacity>
              </View> 

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView> 
    );
  }
    
}

export default EditProfilePage;