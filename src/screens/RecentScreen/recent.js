import React, { useContext } from "react";
import { renderContext } from "../MainPage/mainPage";
import Items from "../ItemsScreen/Items";

const recent = () => {

  const data = useContext(renderContext);
  let dates = [];
  let recentItems = [];

  for (let i = 0; i < data.items.length; i++) {
      dates.push(data.items[i].itemCreationDate);
  }

  dates.sort((a, b) => a - b);
  dates.reverse();

  for (let i = 0; i < dates.length; i++) {
    for (let j = 0; j < data.items.length; j++) {
      if (data.items[j].itemCreationDate == dates[i]) {
        recentItems.push(data.items[j]);
      }
    }
  }

  console.log(recentItems);

  return (
    <Items itemsToRender = {recentItems}/>
  );
}

export default recent;