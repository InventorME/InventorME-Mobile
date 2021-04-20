import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from "react-native-paper";
import { Auth } from 'aws-amplify';
import styles from "./EditItem.style";
import { Database } from "../../util/Database";
import { colors } from "../../util/colors";
import { Photo } from "../../util/Photos";
import { set } from "react-native-reanimated";

const EditItemScreen = (props) => {

  let item;
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("");
  const [serialNum, setSerialNum] = useState("");
  const [purchaseAmt, setPurchaseAmt] = useState("");
  const [worth, setWorth] = useState("");
  const [receiptPhoto, setReceiptPhoto] = useState("");
  const [itemManualURL, setItemManualURL] = useState("");
  const [sellDate, setSellDate] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [sellAmt, setSellAmt] = useState("");
  const [recurrPayAmt, setRecurrPayAmt] = useState("");
  const [ebayURL, setEbayURL] = useState("");
  const [archived, setArchived] = useState('0');
  const [folder, setFolder] = useState("");
  const [image, setImage] = useState("");
  const [imageTaken, setImageTaken] = useState(false);
  const [imageState, setImageState] = useState(false);
  const [imageType, setImageType] = useState("image/jpg");
  const db = new Database();
  const photo = new Photo();
  const [createItem, setCreateItem] = useState(props.route.params.itemCreated);
  const [scannedItem, setScannedItem] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log("enter");
        const data = await Auth.currentUserInfo();
        setEmail(data.attributes.email);
      }
      catch {
        console.log('could not find user :(', error);
      }
    })();
  }, [email])

  //console.log(props.route.params);
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
  
  if(createItem){
    
    setName(JSON.stringify(props.route.params.title).replace(/['"]+/g, ''));
    setCategory(JSON.stringify(props.route.params.category).replace(/['"]+/g, ''));
    setPurchaseAmt(JSON.stringify(props.route.params.price).replace(/['"]+/g, ''));
    setNotes(JSON.stringify(props.route.params.description).replace(/['"]+/g, ''));
    setSerialNum(JSON.stringify(props.route.params.serialNumber).replace(/['"]+/g, ''));
    setCreateItem(false);
    setScannedItem(true);
    
  
}
//  else{
//    console.log("4")
//     setName(props.route.params.itemName);
//     setEmail(props.route.params.userEmail);
//     setCategory(props.route.params.itemCategory);
//     setPhotoURL(props.route.params.itemPhotoURL);
//     setLocation(props.route.params.itemLocation);
//     setNotes(props.route.params.itemNotes);
//     setTags(props.route.params.itemTags);
//     setSerialNum(props.route.params.itemSerialNum);
//     setPurchaseAmt(props.route.params.itemPurchaseAmount);
//     setWorth(props.route.params.itemWorth);
//     setReceiptPhoto(props.route.params.itemReceiptPhotoURL);
//     setItemManualURL(props.route.params.itemManualURL);
//     setSellDate(props.route.params.itemSellDate);
//     setBuyDate(props.route.params.itemBuyDate);
//     setSellAmt(props.route.params.itemSellDate);
//     setRecurrPayAmt(props.route.params.itemRecurringPaymentAmount);
//     setEbayURL(props.route.params.itemEbayURL);
//     setArchived(props.route.params.itemArchived);
//     setFolder(props.route.params.itemFolder);
//   }

  const quotes = (value) =>{
    if(!value || value === "null" || value.length < 1){
      
      return null;
    }
    if(!isNaN(value)){
      
      return value;
    }
    return "'" + value + "'";
  };

  const POSTitemFORMAT = {
    userEmail: quotes(email),
    itemCategory: quotes(category),
    itemName: quotes(name),
    itemPhotoURL: quotes(photoURL),
    itemSerialNum: quotes(serialNum),
    itemPurchaseAmount: quotes(purchaseAmt),
    itemWorth: quotes(worth),
    itemReceiptPhotoURL: quotes(receiptPhoto),
    itemManualURL: quotes(itemManualURL),
    itemSellDate: quotes(sellDate),
    itemBuyDate: quotes(buyDate),
    itemLocation: quotes(location),
    itemNotes: quotes(notes),
    itemSellAmount: quotes(sellAmt),
    itemRecurringPaymentAmount: quotes(recurrPayAmt),
    itemEbayURL: quotes(ebayURL),
    itemTags: quotes(tags),
    itemArchived: quotes(archived),
    itemFolder: quotes(folder)
  }

  useEffect(() => {
    console.log("useEffect is running");
    (async () => {
      if(photoURL != ""){
        try {
          console.log("photoURL:", photoURL);
          const itemPhoto = await photo.get(photoURL);
          // console.log("itemPhoto:",itemPhoto);
          setImage(itemPhoto);
          setImageState(true);
          console.log("image found", imageState);
        } catch {
          console.log("photo not found");
        }
      }
      

    })();
  }, [photoURL]);


  var PUTitemFORMAT = {
    userEmail: `"${email}"`,
    itemID: "9",
    itemCategory: `"${category}"`,
    itemName: `"${name}"`,
    itemPhotoURL: `"${[photoURL]}"`,
    itemSerialNum: `"${serialNum}"`,
    itemPurchaseAmount: `"${purchaseAmt}"`,
    itemWorth: `"${worth}"`,
    itemReceiptPhotoURL: `"${receiptPhoto}"`,
    itemManualURL: `"${itemManualURL}"`,
    itemSellDate: `"${sellDate}"`,
    itemBuyDate: `"${buyDate}"`,
    itemLocation: `"${location}"`,
    itemNotes: `"${notes}"`,
    itemSellAmount: `"${sellAmt}"`,
    itemRecurringPaymentAmount: `${recurrPayAmt}`,
    itemEbayURL: `${ebayURL}`,
    itemTags: `"${tags}"`,
    itemArchived: `${archived}`,
    itemFolder: "null"
  }
  const validateNonNullData= (name, category) =>{
    console.log("8")
    let goodValid = true;
    if(name === null || name === ''){
      console.log(name);
      Alert.alert("Error: Please Type and Item Name");
      goodValid = false;
      return goodValid;

    }
    if (category === null || category === ''){
      console.log(category);
      Alert.alert("Error: Please Type and Item Collection");
      goodValid = false;
      return goodValid;
    }
    if(goodValid){
      console.log("I came inside this one name: " + name + " cat: " + category );
      scannedItem ? poster() : putter();
      props.navigation.goBack()
    }
  }




  const takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.2
      });

      if (!pickerResult.cancelled) {
        setImage(pickerResult.base64);
        setImageTaken(true);
      }
    } else{
      const title = "No Photo Access";
      const msg =  "Please Go Into Phone Settings & Grant App Access To Camera & Photos";
      alert(title, msg, [{ text: "OK" }], { cancelable: false });
    }
  }

  const uploadImage = async () => {
    try {
      const pName = await photo.generateNewItemName("jpg");

      // ******BUG HERE********
      // NOT SURE THAT photoUrl is getting SET
      setPhotoURL(pName);

      // console.log(photoURL);
      await photo.uploadFile(image, pName, imageType);
    } catch (error) {
      console.log("upload error", error);
    }
  }

  async function poster() {
    try {
      const data = await Auth.currentUserInfo();
      if (imageTaken) {
        await uploadImage();
      }
      const item = await db.post(POSTitemFORMAT);
      console.log("Posted to database")
      console.log(POSTitemFORMAT);
    } catch (error) {
      console.log(error);
    }

  }

  async function putter() {
    try {
      const data = await Auth.currentUserInfo();
      if (imageTaken) {
        await uploadImage();
      }
      // const item = await db.post(PUTitemFORMAT);
      // console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.page}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.Page}
        scrollEnabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => { props.navigation.goBack() }} >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.child1}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(text) => { setName(text) }}
            value={name} />
        </View>

        {imageState ? <View style={styles.uploadContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={takePhoto}>
              <Avatar.Image source={{uri: `data:${this.state.imageType};base64,${this.state.image}`}} size={90}/>
            </TouchableOpacity>
          </View>
          : <View style={styles.uploadContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={takePhoto}>
              <Ionicons name="camera-outline" size={75} color={colors.iconBackless} />
            </TouchableOpacity>
          </View>}

        <View style={styles.child}>
          <Text style={styles.label}>Collection:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Collection"
            onChangeText={(text) => { setCategory(text) }}
            value={category} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Serial Number:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Serial Number"
            onChangeText={(text) => { setSerialNum(text) }}
            value={serialNum} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Purchase Amount:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Purchase Amount"
            onChangeText={(text) => { setPurchaseAmt(text) }}
            value={purchaseAmt} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Worth:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Worth"
            onChangeText={(text) => { setWorth(text) }}
            value={worth} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Receipt Photo:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Receipt Photo"
            onChangeText={(text) => { setReceiptPhoto(text) }}
            value={receiptPhoto} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Item Manual URL:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Item Manual"
            onChangeText={(text) => { setItemManualURL(text) }}
            value={itemManualURL} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Sell Date:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Sell Date"
            onChangeText={(text) => { setSellDate(text) }}
            value={sellDate} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Buy Date:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Buy Date"
            onChangeText={(text) => { setBuyDate(text) }}
            value={buyDate} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Sell Amount:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Sell Amount"
            onChangeText={(text) => { setSellAmt(text) }}
            value={sellAmt} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Recurring Payment:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Recurring Payment"
            onChangeText={(text) => { setRecurrPayAmt(text) }}
            value={recurrPayAmt} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Shopping URL:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Shopping URL"
            onChangeText={(text) => { setEbayURL(text) }}
            value={ebayURL} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Archived:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Archived"
            onChangeText={(text) => { setArchived(text) }}
            value={archived} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Folder:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Folder"
            onChangeText={(text) => { setFolder(text) }}
            value={folder} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Location:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            onChangeText={(text) => { setLocation(text) }}
            value={location} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Notes:</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Notes"
            maxLength={200}
            multiline={true}
            onChangeText={(text) => { setNotes(text) }}
            value={notes} />
        </View>

        <View style={styles.child}>
          <Text style={styles.label}>Tags:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tags"
            onChangeText={(text) => { setTags(text) }}
            value={tags} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { poster(); props.navigation.goBack() }}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>

      </View>

      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </ScrollView>

  );
}

export default EditItemScreen;