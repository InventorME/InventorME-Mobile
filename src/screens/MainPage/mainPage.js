import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./mainPage.style";
import addItem from "../addItemScreen/addItem";
import scanItem from "../scanItemScreen/scanItem";
import UpperTab from "../../Components/UpperTab";

const MainPageNav = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
    return (
      <View style={{flex:1}}>
        <View style={{flex:0.1}}>
          <UpperTab title="MainPage" />
        </View>
        <View style={styles.container}>
          <Text>Main Page</Text>
        </View>
      </View>
    );  
  };

export default MainPageNav;