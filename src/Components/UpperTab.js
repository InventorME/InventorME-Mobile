/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { MaterialCommunityIcons, FontAwesome,FontAwesome5, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";



const ProfilePage = props => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonLeftStyle}>
          <TouchableOpacity>
            <FontAwesome5 name="hamburger" size={30} color='black' />
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.buttonRightStyle}>
          <TouchableOpacity>
            <MaterialCommunityIcons name='face-profile' size={30} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#009688',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    textStyle:{
        color: 'black',
        fontSize:20,
        fontWeight:"bold",
        height:30,
        alignItems:"stretch",
    },
    buttonLeftStyle:{
      alignItems:'flex-start',
      padding:5,
      left:10,
    },
    buttonRightStyle:{
      alignItems:'flex-start',
      padding:5,
      right:10,
    }      
});
export default ProfilePage;