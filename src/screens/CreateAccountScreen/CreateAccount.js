import React from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, StatusBar } from "react-native";
import { render } from 'react-dom';
import styles from "./CreateAccountScreen.style";


const CreateAccountScreen = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-/\s\.]{0,1}[0-9]{4}$/');
    
    return (
        
      <View style={styles.container}>
        <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
        <TextInput 
          label="Email:"
          style={styles.TextInput}
          placeholder='Email'
        />
        <TextInput
          label="First Name:"
          style={styles.TextInput}
          placeholder='First Name'
        />
        <TextInput 
          label="Last Name:"
          style={styles.TextInput}
          placeholder='Last Name'
        />
        <TextInput 
          label="Phone Number::"
          style={styles.TextInput}
          placeholder='Phone Number'
          validations={{matchRegexp:phoneRegEx}}
        />
        <TextInput
          label="Password:"
          secureTextEntry
          style={styles.TextInput}
          placeholder='Password'
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={()=>props.navigation.navigate("MainPage")}
        >
          <Text style={styles.appButtonText}>Create Account</Text>
        </TouchableOpacity>

      </View>
    )
    
}

export default CreateAccountScreen;
