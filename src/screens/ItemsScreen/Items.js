import React from "react";
import { View, Text } from "react-native";
import styles from "./Items.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Items = (props) => {
    return (
      <View style={styles.container}>
        <Text>Items</Text>
        <TouchableOpacity
                style={styles.addItemContainer}
                onPress={()=>{props.navigation.navigate("AddItemScreen")}}>
            <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Items;