/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";



const ProfilePage = props => {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#009688',
        alignItems : 'center',
        justifyContent : 'center',
    },
    textStyle:{
        color: 'black',
        fontSize:20,
        fontWeight:"bold",
    },
});
export default ProfilePage;