import React from "react";
import { View, Text } from "react-native";
import styles from "./addItem.style";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const addItemScreen = (props) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
                style={styles.arrowButtonContainer}
                onPress={()=>props.navigation.goBack()}
              >
                <FontAwesome name='arrow-left' color='#009688' size={45} />
        </TouchableOpacity>
        <Text>Add Item Just Got Here</Text>
      </View>
    );
}

export default addItemScreen;