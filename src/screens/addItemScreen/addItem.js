/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Avatar } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./addItem.style";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Database } from "../../util/Database";
import { colors } from "../../util/colors";

const addItemScreen = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [folder, setFolder] = useState('');
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [worth, setWorth] = useState('');
  const [tags, setTags] = useState("");
  const db = new Database();

  let POSTitemFORMAT = {
    userEmail: "'lukelmiller@icloud.com'",
    itemCategory: `"${category}"`,
    itemName: `"${name}"`,
    itemPhotoURL: "null",
    itemSerialNum: "null",
    itemPurchaseAmount: "null",
    itemWorth: "null",
    itemReceiptPhotoURL: "null",
    itemManualURL: "null",
    itemSellDate: "null",
    itemBuyDate: "null",
    itemLocation: `"${location}"`,
    itemNotes: `"${notes}"`,
    itemSellAmount: "null",
    itemRecurringPaymentAmount: "null",
    itemEbayURL: "null",
    itemTags: `"${tags}"`,
    itemArchived: "0",
    itemFolder: "null",
  };

  async function poster() {
    try {
      const item = await db.post(POSTitemFORMAT);
      // console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
         {/* <KeyboardAwareScrollView 
       resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  */}
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => { props.navigation.goBack() }}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.child1}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Name'
            onChangeText={(text) => { setName(text) }}
            value={name}
          />
        </View>

        <View style={styles.image}>
          <Avatar.Image

            source={{
              uri: "https://api.adorable.io/avatars/285/10@adorable.png",
            }}
            size={140}
          />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Collection:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Collection'
            onChangeText={(text) => { setCategory(text) }}
            value={category}
          />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Worth:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Worth'
            onChangeText={(text) => { setWorth(text) }}
            value={worth}
          />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Folder:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Folder'
            onChangeText={(text) => { setFolder(text) }}
            value={folder}
          />
        </View>


        <View style={styles.child}>
          <Text style={styles.label}>Location:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Location'
            onChangeText={(text) => { setLocation(text) }}
            value={location}
          />
        </View>


        <View style={styles.child}>
          <Text style={styles.label}>Notes:</Text>
          <TextInput
            style={styles.notesInput}
            placeholder='Notes'
            maxLength={200}
            multiline={true}
            onChangeText={(text) => { setNotes(text) }}
            value={notes}
          />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Tags:</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Tags'
            onChangeText={(text) => { setTags(text) }}
            value={tags}
          />
        </View>



        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              poster();
              props.navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("EditItemScreen");
            }}
          >
            <Text style={styles.buttonText}>Edit Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              poster();
              props.navigation.navigate("addItemScreen");
            }}
          >
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>

      </View>
         {/* </TouchableWithoutFeedback>
       </KeyboardAwareScrollView> */}
     </ScrollView >
  );
};

export default addItemScreen;
