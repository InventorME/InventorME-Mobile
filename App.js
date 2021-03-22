/* eslint-disable react/jsx-indent */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Account } from './src/util/Accounts';
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./src/screens/LogInScreen/LogIn";
import MainPageNav from "./src/screens/MainPage/mainPage";
import CreateAccountScreen from "./src/screens/CreateAccountScreen/CreateAccount";
import ProfilePageNav from "./src/screens/ProfilePage/profilePage";
import addItemScreen from './src/screens/addItemScreen/addItem';
import EditProfilePage from "./src/screens/EditProfilePage/editProfilePage";
import Items from "./src/screens/ItemsScreen/Items";



const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Account>
      <Stack.Navigator 
        initialRouteName="HomeScreen"
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPageNav}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePageNav}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name="AddItemScreen"
          component={addItemScreen}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name="EditProfilePage"
          component={EditProfilePage}
          options = {{
            headerShown : false
          }}
        />
        <Stack.Screen
          name = "ItemsScreen"
          component = {Items}
          options = {{
            headerStyle : {backgroundColor : "#009688"},
            headerBackImage : () => {return <FontAwesome name="arrow-left" color="white" size={25}/>},
            headerBackTitleVisible : false,
            headerLeftContainerStyle : {marginLeft : "2%"}
          }}
        />
      </Stack.Navigator>
      </Account>
    </NavigationContainer>  
  );
}

export default myStack;