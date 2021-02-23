import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./profilePage.style";
import LogInStyle from "../LogInScreen/LogIn.style";



const ProfilePageNav = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-/s.]{0,1}[0-9]{4}$/');
    
      return (
        <View style={styles.container}>
          <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
          <Text style={{color: '#009688'}}>FirstName LastName</Text>
          <Text style={{color: '#009688'}}>
            {LogInStyle.props.userName} 
          </Text>
          <TextInput
            label="Phone Number:"
            style={styles.TextInput}
            placeholder='123-456-7890'
            validations={{matchRegexp:phoneRegEx}}
          />
          <Text style={{color: '#009688'}}>Email: </Text>
          <TextInput
            label="Email:"
            style={styles.TextInput}
            placeholder='JohnDoe@email.com'
          />
          <Text style={{color: '#009688'}}>Creation Date: </Text>
          <TextInput
            label="Creation Date:"
            style={styles.TextInput}
            placeholder={Date}
          />

          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={()=>props.navigation.navigate("MainPage")}
          >
            <Text style={styles.appButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )
}
export default ProfilePageNav;