import React, { useContext } from "react";
import { renderContext } from "../MainPage/mainPage";
import Items from "../ItemsScreen/Items";

const recent = ({navigation}) => {

  const data = useContext(renderContext);
  let recentItems = [];

  for (let i = 0; i < data.items.length; i++) {
      recentItems.push(data.items[i].itemCreationDate);
  }

  recentItems.sort((a, b) => a - b);
  recentItems.reverse;

  console.log(recentItems);

  return (
    <Items itemsToRender = {recentItems}/>
  );
}

export default recent;