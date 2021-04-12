import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./collections.style";
import BoxFolderComponent from "../../Components/BoxFolderComponent";
import { renderContext } from "../MainPage/mainPage";
import { colors } from '../../util/colors';
import Items from "../ItemsScreen/Items";

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
      let itemsToRender = [];
      let object = { name: categoriesList[i], count: 0, itemsToRender: itemsToRender, key: categoriesList[i], colorNum: 0 };

      for (let j = 0; j < data.items.length; j++) {
        if (data.items[j].itemCategory == categoriesList[i]) {
          object.count += 1;
          object.itemsToRender.push(data.items[j]);
        }
      }
      object.colorNum = (i%7);

      countList.push(object);
    }
  }
  
  if (data == null) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  
  else {
  return (
    <View style={styles.container}>
      <FlatList
        data={countList}
        renderItem={({ item }) => (
              <BoxFolderComponent
                boxType={1}
                title={item.name}
                numItems={item.count}
                style={{ backgroundColor: colors.objects[item.colorNum] }}
                addPageNavigate={() => { props.navigation.navigate("AddItemScreen") }}
                itemsNavigate={() => { props.navigation.navigate("ItemsScreen", {itemsToRender : item.itemsToRender})}}
              />
        )}
        numColumns={2}
        keyExtractor = {(item, index) => item.name}
      />
    </View>
  );
}  
};

export default collections;
