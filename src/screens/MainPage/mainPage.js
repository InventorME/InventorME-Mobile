import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "./mainPage.style";
import addItem from "../addItemScreen/addItem";
import scanItem from "../scanItemScreen/scanItem";
import catagoriesNav from "../CatagoriesScreen/catagories";

const MainPageNav = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
  const Tab = createBottomTabNavigator();
  const MainPage = () => {
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
      </View>
    );  
  };
  return (
    <Tab.Navigator
      initialRouteName="MainPage"
      backBehavior="none"
      tabBarOptions={{
          activeTintColor : "white",
          inactiveTintColor : "#009688",
          activeBackgroundColor : "#009688",
          inactiveBackgroundColor : "white",
          style : {
            borderTopColor : "white"
          },
          showLabel : false
        }}
    >
      <Tab.Screen
        name="addItem"
        component={addItem}
        options={{
            tabBarIcon : ({color, size}) => {
              return (<AntDesign name="pluscircle" size={size} color={color} />);
            } 
          }}
      />

        <Tab.Screen
          name = "MainPage"
          component = {catagoriesNav}
          options = {{
            tabBarIcon : ({color, size}) => {
              return (<FontAwesome name="home" size={size} color={color} />);
            }
          }}
      />

      <Tab.Screen
        name="scanItem"
        component={scanItem}
        options={{
            tabBarIcon : ({color, size}) => {
              return (<Entypo name="camera" size={size} color={color} />)
            }
          }}
      />
    </Tab.Navigator>
  );
};

export default MainPageNav;