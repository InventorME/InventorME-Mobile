import React, { useState, useContext, Component } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./collections.style";
import BoxFolderComponent from "../../Components/BoxFolderComponent";
import { renderContext } from "../MainPage/mainPage";
import { colors } from '../../util/colors';
import addItemScreen from '../addItemScreen/addItem';
import EditProfilePage from "../EditProfilePage/editProfilePage";

const collections = (props) => {

  const data = useContext(renderContext);
  let categoriesList = [];
  let countList = [];
 

  if (data != null) {
    for (let i = 0; i < data.items.length; i++) {
      if (!categoriesList.includes(data.items[i].itemCategory)) {
        categoriesList.push(data.items[i].itemCategory);
      }
    }

    for (let i = 0; i < categoriesList.length; i++) {
      let object = { name: categoriesList[i], count: 0, key: categoriesList[i], colorNum: 0 };

      for (let j = 0; j < data.items.length; j++) {
        if (data.items[j].itemCategory == categoriesList[i]) {
          object.count += 1;
        }
      }
      object.colorNum = (i%7);

      countList.push(object);
    }
  }

  // console.log(countList);
  
  
  if (data == null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  
  else {
  return (
    <FlatList
      data={countList}
      renderItem={({ item }) => (
            <BoxFolderComponent
              boxType={1}
              title={item.name}
              numItems={item.count}
              style={{ backgroundColor: colors.objects[item.colorNum] }}
              addPageNavigate={() => { props.navigation.navigate("AddItemScreen") }}
              itemsNavigate={() => { props.navigation.navigate("ItemsScreen") }}
            />
      )}
      numColumns={2}
    />
  );
}  
};

export default collections;
