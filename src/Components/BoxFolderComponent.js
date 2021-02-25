/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";



const BoxFolderComponent = props => {
    return (
      <View style={styles.Container}>
        <View style={styles.Box}>
          <Text style={{justifyContent:'center'}}>Box 1</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        width:"50%",
        height:"50%",
        padding: 10,
    }, 
    Box : {
        width:'100%',
        height:'50%',
        backgroundColor : '#009688',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:20,
    },  
});
export default BoxFolderComponent;