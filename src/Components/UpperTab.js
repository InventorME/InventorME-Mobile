/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { colors } from '../util/colors';


const UpperTab = props => {
  const [showSearchBar,setshowSearchBar]=useState(false);
  const [search,setSearch]=useState("");


  const searching=(text)=>{
    setSearch(text);
  }
  const submitData=()=>{
    console.log(`DOOONEEE${search}` );
  }
    return (
      <View style={styles.container}>
        <View style={styles.buttonLeftStyle}>
          <TouchableOpacity
            onPress={props.nav}
          >
            <Ionicons name="menu" size={30} color={colors.icon} />
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
          {!showSearchBar?<Text style={styles.textStyle}>{props.title}</Text>:undefined}
        </View>
        <View style={styles.buttonRightStyle}>
          <TouchableOpacity
            onPress={() => {
              setshowSearchBar(!showSearchBar);
                }}
          >
            {showSearchBar? (
              <View style={styles.Searchbar}>
                <Searchbar 
                  style={styles.search} 
                  onChangeText={(text)=>searching(text)} 
                  onSubmitEditing={submitData}
                  value={search}
                />
              </View>
          ) 
            :<MaterialCommunityIcons name='magnify' size={30} color={colors.icon} />}
            
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    Searchbar : {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
    },
    search : {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      maxWidth:'90%',
      margin:'2%',
      },
    container : {
        // flex:.1,
        height : "13%",
        backgroundColor : colors.theme,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    textStyle:{
        color: colors.text,
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
export default UpperTab;