import React, {useContext} from "react";
import { View, Text } from "react-native";
import { renderContext } from "../MainPage/mainPage";
import styles from "./archived.style";
import Items from "../ItemsScreen/Items";

const archived = ({navigation}) => {

  const data = useContext(renderContext);
  let archivedItems = [];

  for (let i = 0; i < data.items.length; i++) {
    if (data.items[i].itemArchived == 1) {
      archivedItems.push(data.items[i]);
    }
  }

  return (
    <Items itemsToRender = {archivedItems}/>
  );
}

export default archived;