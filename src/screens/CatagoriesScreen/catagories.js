import React from "react";
import { View, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from "./catagories.style";
import photos from "../PhotosScreen/photos";
import completed from "../CompletedScreen/completed";
import date from "../DateScreen/date";
import settings from "../SettingsScreen/settings";

const catagoriesNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName = "catagories"
            drawerContentOptions = {{
                activeTintColor : "white",
                activeBackgroundColor : "#009688",
                inactiveBackgroundColor : "white",
                inactiveTintColor : "#009688"
            }}
        >
            <Drawer.Screen
                name = "catagories"
                component = {catagories}
            />
            <Drawer.Screen
                name = "photos"
                component = {photos}
            />
            <Drawer.Screen
                name = "completed"
                component = {completed}
            />
            <Drawer.Screen
                name = "date"
                component = {date}
            />
            <Drawer.Screen
                name = "settings"
                component = {settings}
            />
        </Drawer.Navigator>
    )
}

const catagories = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Button
                title = "Toggle Drawer"
                onPress = {() => {navigation.toggleDrawer()}}
            />
        </View>
    );
}

export default catagoriesNav;