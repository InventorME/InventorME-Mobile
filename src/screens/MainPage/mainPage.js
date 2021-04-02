import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import addItem from "../addItemScreen/addItem";
import scanItem from "../scanItemScreen/scanItem";
import categoriesNav from "../CategoriesScreen/categories";
import { colors } from '../../util/colors';
import { Database } from "../../util/Database";
import { useRoute } from '@react-navigation/native';

export const renderContext = React.createContext();

const MainPageNav = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
  const Tab = createBottomTabNavigator();

  const db = new Database();

  const [data, setData] = useState(null);
  const route = useRoute();

  async function getter() {
    try{
      setData(await db.get("lukelmiller@icloud.com"));
      //console.log(items.items);
      //console.log(global.data);
    } 
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getter();
  }, [route]);
  
    return (
      <renderContext.Provider value = {data}>
        <Tab.Navigator
          initialRouteName="Categories"
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
      </renderContext.Provider>
    );
  };

export default MainPageNav;