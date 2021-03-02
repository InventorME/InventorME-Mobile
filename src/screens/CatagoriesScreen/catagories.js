import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from "./catagories.style";
import photos from "../PhotosScreen/photos";
import completed from "../CompletedScreen/completed";
import date from "../DateScreen/date";
import settings from "../SettingsScreen/settings";
import UpperTab from "../../Components/UpperTab";
import BoxFolderComponent from "../../Components/BoxFolderComponent";


const catagories = () => {

    return (
      <View style={{flex : 1}}>
        <View style={styles.container}>
          <DrawBoxes />
        </View>
      </View>
    );  
};

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
        initialRouteName="catagories"
        screenOptions={{
                header : ({scene}) => {
                    return (
                      <UpperTab
                        title={scene.descriptor.options.title}
                        nav={() => {scene.descriptor.navigation.toggleDrawer()}}
                      />
                            );
                },
                headerShown : true
            }}
        drawerContentOptions={{
                activeTintColor : "white",
                activeBackgroundColor : "#009688",
                inactiveBackgroundColor : "white",
                inactiveTintColor : "#009688"
            }}
      >
        <Drawer.Screen
          options={{
                    title : "Catagories"
                }}
          name="Catagories"
          component={catagories}
        />
        <Drawer.Screen
          options={{
                    title : "Photos"
                }}
          name="Photos"
          component={photos}
        />
        <Drawer.Screen
          options={{
                    title : "Completed"
                }}
          name="Completed"
          component={completed}
        />
        <Drawer.Screen
          options={{
                    title : "Date"
                }}
          name="Date"
          component={date}
        />
        <Drawer.Screen
          options={{
                    title : "Settings"
                }}
          name="Settings"
          component={settings}
        />
      </Drawer.Navigator>
    )
}

export default catagoriesNav;