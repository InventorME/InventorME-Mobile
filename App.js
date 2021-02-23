import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/LogInScreen/LogIn";
import MainPageNav from "./src/screens/MainPage/mainPage";
import ProfilePageNav from "./src/screens/ProfilePage/profilePage";

const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomeScreen"
        headerMode="none"
      >
      
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="MainPage"
          component={MainPageNav}
        />

        <Stack.Screen
          name="ProfilePage"
          component={ProfilePageNav}
        />

      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default myStack;