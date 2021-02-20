import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/LogInScreen/LogIn";
import MainPage from "./src/screens/MainPage/mainPage";

const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "HomeScreen"
        headerMode = "none"
      >
      
        <Stack.Screen
          name = "HomeScreen"
          component = {HomeScreen}
        />

        <Stack.Screen
          name = "MainPage"
          component = {MainPage}
       />

      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default myStack;