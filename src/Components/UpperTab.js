/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable no-use-before-define */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from '../util/colors';

const UpperTab = props => {
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
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.buttonRightStyle}>
          <TouchableOpacity
            onPress={props.profileNav}
          >
            <MaterialCommunityIcons name='magnify' size={30} color={colors.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:.1,
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