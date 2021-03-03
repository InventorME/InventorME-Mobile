/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";



const BoxFolderComponent = props => {
    return (
      <View style={styles.Container}>
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