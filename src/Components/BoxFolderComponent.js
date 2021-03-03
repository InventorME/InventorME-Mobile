/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";



const BoxFolderComponent = props => {
    return (
      <View style={styles.Container}>
        <View style={styles.Box}>
          <View style={{padding:5}}>
            <AntDesign name='pluscircle' size={30} color="white"  />
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
      </View>
    );
}
const styles = StyleSheet.create({
    itemsText:{
      color:"white",
    },
    Container:{
      flex:1,
      padding: 5,
    },
    itemCountContainer:{
      flexDirection:'row-reverse',
      paddingLeft:5,
      paddingBottom:5,
    }, 
    Box : {
      flex:1,
      maxWidth:175,
      backgroundColor : '#009688',
      flexDirection:'column',
      padding:5,
      borderRadius:20,
    }, 
    boxText :{
      flex:1,
      justifyContent:'center',
    },
    textStyle:{
      fontSize:25,
      color:"white",
    },
});
export default BoxFolderComponent;