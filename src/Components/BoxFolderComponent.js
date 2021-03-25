/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BoxFolderComponent = props => {

  const type = props.boxType;

  if (type == 1) {
    return (
      <TouchableOpacity 
        style={{...styles.Box1, ...props.style}}
        onPress = {props.itemsNavigate}
      >
        <View style={{padding: "2%"}}>
          <TouchableOpacity
            onPress={props.addPageNavigate}
          >
            <AntDesign name='pluscircle' size={30} color="white"  />
          </TouchableOpacity>
        </View>
        <View style={styles.boxText1}>
          <Text style={styles.textStyle1}>{props.title}</Text>
        </View>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemsText}>
            Items:
            {props.numItems}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  else {
    return (
      <TouchableOpacity
        style = {styles.Box2}
      >
        <View style = {styles.boxText2}>
          <Text style = {styles.textStyle2}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    itemsText:{
      color:"white",
    },
    itemCountContainer:{
      flexDirection:'row-reverse',
      padding : "5%"
    }, 
    Box1 : {
      //flex:1,
      margin : '2%',
      height : '90%',
      width : '46%',
      backgroundColor : '#009688',
      padding:5,
      borderRadius:20,
    },
    Box2 : {
      margin : "2%",
      height : "90%",
      width : "96%",
      backgroundColor : '#009688',
      padding:"2%",
      borderRadius:20,
    }, 
    boxText1 :{
      flex:1,
      // justifyContent:'center',
      // alignItems:"center"
    },
    boxText2 :{
      flex:1,
      justifyContent : 'center',
      alignItems : "center"
    },
    textStyle1 :{
      fontSize:25,
      paddingTop: 9,
      color:"white",
    },
    textStyle2 : {
      fontSize : 30,
      color : "white",
    }
});
export default BoxFolderComponent;