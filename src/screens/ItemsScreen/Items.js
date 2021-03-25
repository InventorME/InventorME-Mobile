import React from "react";
import { View, Text } from "react-native";
import styles from "./Items.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import BoxFolderComponent from "../../Components/BoxFolderComponent";

const Items = (props) => {
    return (
      <View style={styles.container}>
        <View style = {styles.boxRow}>
          <BoxFolderComponent
            title = "Item 1"
          />
          
          <BoxFolderComponent
            title = "Item 2"
          />
        </View>
      </View>
    );
}

export default Items;