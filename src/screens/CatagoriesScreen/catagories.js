import React, {useState} from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from "./catagories.style";
import photos from "../PhotosScreen/photos";
import completed from "../CompletedScreen/completed";
import date from "../DateScreen/date";
import settings from "../SettingsScreen/settings";
import UpperTab from "../../Components/UpperTab";
import BoxFolderComponent from "../../Components/BoxFolderComponent";

const DrawBoxes = () => {
    return(
        <View style={styles.boxFolderColumn}>
            <View style={styles.boxFolderRow}>
                <BoxFolderComponent />
                <BoxFolderComponent />
            </View>
            <View style={styles.boxFolderRow}>
                <BoxFolderComponent />
            </View>
            <View style={styles.boxFolderRow}>
                <BoxFolderComponent />
            </View>
        </View>
    )};

const catagoriesNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName = "catagories"
            screenOptions = {{
                header : ({scene}) => {
                    return (<UpperTab
                                title = "catagories"
                                nav = {scene.descriptor.navigation}
                            />
                            );
                },
                headerShown : true
            }}
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

const catagories = () => {

    return (
        <View style = {{flex : 1}}>
            <View style={styles.container}>
                <DrawBoxes />
            </View>
        </View>
    );  
};

export default catagoriesNav;