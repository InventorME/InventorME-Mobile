import React from "react";
import { View, FlatList } from "react-native";
import styles from "./Items.style";
import BoxFolderComponent from "../../Components/BoxFolderComponent";

const Items = (props) => {

  const itemsToRender = props.itemsToRender;

    return (
      <FlatList
        data = {itemsToRender}
        renderItem = {({item}) => (
          <View style={styles.container}>
            <View style = {styles.boxRow}>
              <BoxFolderComponent
                title = {item.itemName}
              />
            </View>
          </View>
        )}
      />
    );
}

export default Items;