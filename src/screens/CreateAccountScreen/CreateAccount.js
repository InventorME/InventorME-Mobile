import React from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../LogInScreen/LogIn.style";
import { Text, View, Image, StatusBar } from "react-native";
import { render } from 'react-dom';


const CreateAccountScreen = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-/\s\.]{0,1}[0-9]{4}$/');
    
    return (
        
        <View style={styles.container}>
            
            
            <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
            <Text style={{color: '#009688'}}>Email:</Text>
            <TextInput 
                label="Email:"
                style={styles.TextInput}
                placeholder='Email'
            />
            <Text style={{color: '#009688'}} >First Name:</Text>
            <TextInput
                label="First Name:"
                style={styles.TextInput}
                placeholder='First Name'
                
            />
            <Text style={{color: '#009688', }}>Last Name:</Text>
            <TextInput 
                label="Last Name:"
                style={styles.TextInput}
                placeholder='Last Name'
            />
            <Text style={{color: '#009688'}}>Phone Number:</Text>
            <TextInput 
                label="Phone Number::"
                style={styles.TextInput}
                placeholder='Phone Number'
                validations={{matchRegexp:phoneRegEx}}
            />
            <Text style={{color: '#009688'}}>Password:</Text>
            <TextInput
                label="Password:"
                secureTextEntry
                style={styles.TextInput}
                placeholder='Password'
                
            />
            <TouchableOpacity
                style={styles.appButtonContainer} onPress={()=>props.navigation.navigate("MainPage")}>
                <Text style={styles.appButtonText}>Create Account</Text>
        </TouchableOpacity>

        </View>
    )
    
}

export default CreateAccountScreen;
