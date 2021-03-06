/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";



const BoxFolderComponent = props => {
    return (
      <View {...props} style={{...styles.Box, ...props.style}}>
        <View style={{padding:5}}>
          <TouchableOpacity
            onPress={props.addPageNavigate}
          >
            <AntDesign name='pluscircle' size={30} color="white"  />
          </TouchableOpacity>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemsText}>
            Items:
            {props.numItems}
          </Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    itemsText:{
      color:"white",
    },
    itemCountContainer:{
      flexDirection:'row-reverse',
      padding : "5%"
    }, 
    Box : {
      //flex:1,
      margin : '2%',
      height : '70%',
      width : '46%',
      backgroundColor : '#009688',
      padding:5,
      borderRadius:20,
    }, 
    boxText :{
      flex:1,
      // justifyContent:'center',
      // alignItems:"center"
    },
    textStyle:{
      fontSize:25,
      paddingTop: 9,
      color:"white",
    },
});
export default BoxFolderComponent;