import React from "react";
import { View, FlatList } from "react-native";
import BoxFolderComponent from "../../Components/BoxFolderComponent";

const Items = (props) => {

  let itemsToRender = [];

  if (props.hasOwnProperty("itemsToRender")) {
    itemsToRender = props.itemsToRender;
  }
  else {
    itemsToRender = props.route.params.itemsToRender;
  }

    return (
      <FlatList
        data = {itemsToRender}
        renderItem = {({item}) => (
              <BoxFolderComponent
                title = {item.itemName}
                itemsNavigate={() => {props.navigation.navigate("EditItemScreen", { itemCreated:false})}}

              />
        )}
        keyExtractor = {(item, index) => item.itemName}
      />
    );
}

export default Items;