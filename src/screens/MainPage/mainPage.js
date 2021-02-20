import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, FlatList, Text } from "react-native";

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

};

export default MainPageNav;