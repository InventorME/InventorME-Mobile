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


const catagoriesNav = (props) => {
    const Drawer = createDrawerNavigator();
    const catagories = () => {

      return (
        <View style={styles.container}>
          <DrawBoxes props />
        </View>
      );  
  };
  const DrawBoxes = () => {
      return(
        <View style={styles.boxFolder}>
          <BoxFolderComponent 
            title="School" 
            numItems='3' 
            style={{backgroundColor:'#ffb5b9'}} 
            addPageNavigate={()=>{props.navigation.navigate("AddItemScreen")}}
          />
          <BoxFolderComponent title="Work" numItems='17' style={{backgroundColor:'#b3b5ff'}} />
          <BoxFolderComponent title="Groceries" numItems='20' style={{backgroundColor:'#47ff72'}} />
          <BoxFolderComponent title="Groceries" numItems='20' style={{backgroundColor:'#b3b5ff'}} />
          <BoxFolderComponent title="Items to buy in the future" numItems='35' style={{backgroundColor:'#aebffc'}} />
        </View>
      )};

    return (
      <Drawer.Navigator
        initialRouteName="catagories"
        screenOptions={{
                header : ({scene}) => {
                    return (
                      <UpperTab
                        title={scene.descriptor.options.title}
                        nav={() => {scene.descriptor.navigation.toggleDrawer()}}
                        profileNav={()=>{props.navigation.navigate("ProfilePage")}}
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