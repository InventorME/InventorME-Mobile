import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import styles from "./mainPage.style";
import addItem from "../addItemScreen/addItem";
import scanItem from "../scanItemScreen/scanItem";

const MainPageNav = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName = "MainPage"
        backBehavior = "none"
      >
        <Tab.Screen
          name = "addItem"
          component = {addItem}
        />

        <Tab.Screen
          name = "MainPage"
          component = {MainPage}
        />

        <Tab.Screen
          name = "scanItem"
          component = {scanItem}
        />
      </Tab.Navigator>
  );
};

const MainPage = () => {
  return (
    <View style = {styles.container}>
      <Text>Main Page</Text>
    </View>
  );  
};

export default MainPageNav;