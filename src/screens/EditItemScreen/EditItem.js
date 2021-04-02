import React, { useState } from "react";
import { View, Text, ScrollView,TouchableWithoutFeedback, Keyboard  } from "react-native";
import styles from "./EditItem.style";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Image } from 'react-native'
import { Database } from '../../util/Database';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const EditItemScreen = (props) => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');
  const [serialNum, setSerialNum] = useState('');
  const [purchaseAmt, setPurchaseAmt] = useState('');
  const [worth, setWorth] = useState('');
  const [receiptPhoto, setReceiptPhoto] = useState('');
  const [itemManualUrl, setItemManualUrl] = useState('');
  const [sellDate, setSellDate] = useState('');
  const [buyDate, setBuyDate] = useState('');
  const [sellAmt, setSellAmt] = useState('');
  const [recurrPayAmt, setRecurrPayAmt] = useState('');
  const [EbayUrl, setEbayUrl] = useState('');
  const [archived, setArchived] = useState('');
  const [folder, setFolder] = useState('');
  const db = new Database();

  var PUTitemFORMAT = {
    userEmail: "'lukelmiller@icloud.com'",
    itemID: "9",
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

//   async function putter(){
//     try{
//         const item = await db.post(POSTitemFORMAT);
//         console.log(item);
//     } catch(error){
//         console.log(error);
//     }
// }

  return (
<ScrollView contentContainerStyle={styles.Page}>
    <KeyboardAwareScrollView 
        resetScrollToCoords = {{x : 0, y : 0}}
        contentContainerStyle = {styles.Page}
        scrollEnabled = {true}  
      >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
          
    <View style={styles.page}>
      
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={styles.columnView}>
          <View style={styles.child}>
            <Text style={{ color: '#009688' }}>Name:</Text>
            <TextInput
              style={styles.ColTextInput}
              placeholder='Name'
              onChangeText={(text) => { setName(text) }}
              value={name}
            />
          </View>

          <View style={styles.child}>
            <Text style={{ color: '#009688' }}>Category:</Text>
            <TextInput
              style={styles.ColTextInput}
              placeholder='Category'
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
        <Text style={{ color: '#009688' }}>Serial Number:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Serial Number'
          onChangeText={(text) => { setSerialNum(text) }}
          value={serialNum}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Purchase Amount:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Purchase Amount'
          onChangeText={(text) => { setPurchaseAmt(text) }}
          value={purchaseAmt}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Worth:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Worth'
          onChangeText={(text) => { setWorth(text) }}
          value={worth}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Receipt Photo:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Receipt Photo'
          onChangeText={(text) => { setReceiptPhoto(text) }}
          value={receiptPhoto}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Item Manual:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Item Manual'
          onChangeText={(text) => { setItemManualUrl(text) }}
          value={itemManualUrl}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Sell Date:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Sell Date'
          onChangeText={(text) => { setSellDate(text) }}
          value={sellDate}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Buy Date:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Buy Date'
          onChangeText={(text) => { setBuyDate(text) }}
          value={buyDate}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Sell Amount:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Sell Amount'
          onChangeText={(text) => { setSellAmt(text) }}
          value={sellAmt}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Recurring Payment:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Recurring Payment'
          onChangeText={(text) => { setRecurrPayAmt(text) }}
          value={recurrPayAmt}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Ebay Url:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Ebay Url'
          onChangeText={(text) => { setEbayUrl(text) }}
          value={EbayUrl}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Archived:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Archived'
          onChangeText={(text) => { setArchived(text) }}
          value={archived}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Folder:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Folder'
          onChangeText={(text) => { setFolder(text) }}
          value={folder}
        />
      </View>


      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Location:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Location'
          onChangeText={(text) => { setLocation(text) }}
          value={location}
        />
      </View>
      

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Notes:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Notes'
          onChangeText={(text) => { setNotes(text) }}
          value={notes}
        />
      </View>

      <View style={styles.child}>
        <Text style={{ color: '#009688' }}>Tags:</Text>
        <TextInput
          style={styles.TextInput}
          placeholder='Tags'
          onChangeText={(text) => { setTags(text) }}
          value={tags}
        />
      </View>
      


      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

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
      </View>


    </View>
    
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
    </ScrollView>

  );
}

export default EditItemScreen;