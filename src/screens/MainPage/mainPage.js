import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import addItem from "../addItemScreen/addItem";
import scanItem from "../scanItemScreen/scanItem";
import categoriesNav from "../CategoriesScreen/categories";
import { colors } from '../../util/colors';

const MainPageNav = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
  const Tab = createBottomTabNavigator();
  
    return (
      <Tab.Navigator
        initialRouteName="Categories"
        backBehavior="none"
        tabBarOptions={{
            activeTintColor : colors.buttonText,
            inactiveTintColor : colors.icon,
            activeBackgroundColor : colors.icon,
            inactiveBackgroundColor : colors.background,
            style : {
              borderTopColor : colors.background
            },
            showLabel : false
          }}
      >
       
        <Tab.Screen
          name="scanItem"
          component={scanItem}
          options={{
              tabBarIcon : ({color, size}) => {
                return (<MaterialCommunityIcons name="barcode" size={size} color={color} />)
              }
            }}
        />
        <Tab.Screen
          name="Categories"
          component={categoriesNav}
          options={{
              tabBarIcon : ({color, size}) => {
                return (<FontAwesome name="home" size={size} color={color} />);
              }
            }}
        />
         <Tab.Screen
          name="addItem"
          component={addItem}
          options={{
              tabBarIcon : ({color, size}) => {
                return (<AntDesign name="plus" size={size} color={color} />);
              } 
            }}
        />
  
        
      </Tab.Navigator>
    );
  };

export default MainPageNav;