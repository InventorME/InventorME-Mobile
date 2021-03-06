import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Account } from './src/util/Accounts';
import HomeScreen from "./src/screens/LogInScreen/LogIn";
import MainPageNav from "./src/screens/MainPage/mainPage";
import CreateAccountScreen from "./src/screens/CreateAccountScreen/CreateAccount";
import ProfilePageNav from "./src/screens/ProfilePage/profilePage";
import addItemScreen from './src/screens/addItemScreen/addItem';



const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Account>
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
            name="CreateAccountScreen"
            component={CreateAccountScreen}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfilePageNav}
          />
          <Stack.Screen
            name="AddItemScreen"
            component={addItemScreen}
          />
        

      </Stack.Navigator>
      </Account>
    </NavigationContainer>  
  );
}

export default myStack;