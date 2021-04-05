import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./addItem.style";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Database } from '../../util/Database';
import { colors } from '../../util/colors';


const addItemScreen = (props) => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');
  const db = new Database();

  var POSTitemFORMAT = {
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
    itemArchived: '0',
    itemFolder: "null"
}

  async function poster(){
    try{
        const item = await db.post(POSTitemFORMAT);
        console.log(item);
    } catch(error){
        console.log(error);
    }
}

  return (

    <View style={styles.container}>
      
      <View style={ styles.container }>
        <View style={styles.columnView}>
          <View style={styles.child}>
            <Text style={{ color: colors.label }}>Name:</Text>
            <TextInput
              style={styles.ColTextInput}
              placeholder='Name'
              onChangeText={(text) => { setName(text) }}
              value={name}
            />
          </View>

          <View style={styles.child}>
            <Text style={{ color: colors.label }}>Collection:</Text>
            <TextInput
              style={styles.ColTextInput}
              placeholder='Collection'
              onChangeText={(text) => { setCategory(text) }}
              value={category}
            />
          </View>

        </View>

        <View>
          <Text>Right</Text>
        </View>
      </View>

      <View style={styles.child}>
        <Text style={{ color: colors.label }}>Location:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Location'
          onChangeText={(text) => { setLocation(text) }}
          value={location}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: colors.label }}>Notes:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Notes'
          onChangeText={(text) => { setNotes(text) }}
          value={notes}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: colors.label }}>Tags:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Tags'
          onChangeText={(text) => { setTags(text) }}
          value={tags}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => { { console.log("I am pressed Cancel") };props.navigation.goBack() }}
        >
          <Text style={styles.appButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => { { console.log("I am pressed Save")};poster();props.navigation.goBack() }}
        >
          <Text style={styles.appButtonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => { { console.log("I am pressed Edit") }; props.navigation.navigate("EditItemScreen") }}
        >
          <Text style={styles.appButtonText}>Edit Item</Text>
        </TouchableOpacity>
      </View>


    </View>

  );
}

export default addItemScreen;