import React from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../CreateAccountScreen/CreateAccountScreen.style";
import { Text, View, Image, StatusBar } from "react-native";
import { render } from 'react-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FontAwesome } from '@expo/vector-icons';



const CreateAccountScreen = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-/\s\.]{0,1}[0-9]{4}$/');
    
    return (
        <View style={styles.Page}>
            <View style={styles.arrow}>
                
                <TouchableOpacity
                    style={styles.arrowButtonContainer} onPress={()=>props.navigation.navigate("HomeScreen")}>
                    <FontAwesome name='arrow-left' color='#009688' size={45}>
                    </FontAwesome>
                </TouchableOpacity>
                
            </View>
        <View style={styles.container}>
                
            
            <View style={styles.logo}>
                <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
            </View>
            <View style={styles.child}>
                <Text style={{color: '#009688'}}>Email:</Text>
                <TextInput 
                    style={styles.TextInput}
                    placeholder='Email'
                />
            </View>

            <View style={styles.child}>
                <Text style={{color: '#009688'}} >First Name:</Text>
                <TextInput
                    label="First Name:"
                    style={styles.TextInput}
                    placeholder='First Name'
                    
                />
            </View>

            <View style={styles.child}>
                <Text style={{color: '#009688', }}>Last Name:</Text>
                <TextInput 
                    label="Last Name:"
                    style={styles.TextInput}
                    placeholder='Last Name'
                />
            </View>

            <View style={styles.child}>
                <Text style={{color: '#009688'}}>Phone Number:</Text>
                <TextInput 
                    label="Phone Number::"
                    style={styles.TextInput}
                    placeholder='Phone Number'
                    validations={{matchRegexp:phoneRegEx}}
                />
            </View>

            <View style={styles.child}>
                <Text style={{color: '#009688'}}>Password:</Text>
                <TextInput
                    label="Password:"
                    secureTextEntry
                    style={styles.TextInput}
                    placeholder='Password'
                    
                />
            </View>
            <View style={styles.logo}>
                <TouchableOpacity
                    style={styles.appButtonContainer} onPress={()=>props.navigation.navigate("MainPage")}>
                    <Text style={styles.appButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View> 

        </View>
        </View> 
    )
    
}

export default CreateAccountScreen;
