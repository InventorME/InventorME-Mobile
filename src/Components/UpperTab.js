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
        justifyContent : 'flex-end',
    },
    textStyle:{
        color: 'black',
        fontSize:20,
        fontWeight:"bold",
        height:35,
    },
});
export default ProfilePage;