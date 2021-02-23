import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/LogInScreen/LogIn";
import MainPageNav from "./src/screens/MainPage/mainPage";
import CreateAccountScreen from "./src/screens/CreateAccountScreen/CreateAccount";


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
          component = {MainPageNav}
       />
        <Stack.Screen
          name = "CreateAccountScreen"
          component = {CreateAccountScreen}
       />
       

      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default myStack;