import React, { useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./EditItem.style";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from "react-native-paper";
import { Auth } from 'aws-amplify';
import { Database } from "../../util/Database";
import { colors } from "../../util/colors";
import { Photo } from "../../util/Photos";

const EditItemScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');
  const [serialNum, setSerialNum] = useState('');
  const [purchaseAmt, setPurchaseAmt] = useState('');
  const [worth, setWorth] = useState('');
  const [receiptPhoto, setReceiptPhoto] = useState('');
  const [itemManualURL, setItemManualURL] = useState('');
  const [sellDate, setSellDate] = useState('');
  const [buyDate, setBuyDate] = useState('');
  const [sellAmt, setSellAmt] = useState('');
  const [recurrPayAmt, setRecurrPayAmt] = useState('');
  const [ebayURL, setEbayURL] = useState('');
  const [archived, setArchived] = useState('');
  const [folder, setFolder] = useState('');
  const [image, setImage] = useState("");
  const [imageTaken, setImageTaken] = useState(false);
  const [imageState, setImageState] = useState(false);
  const [imageType, setImageType] = useState("image/jpg");
  const db = new Database();
  const photo = new Photo();

  var PUTitemFORMAT = {
    userEmail: `"${email}"`,
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


  const takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.2
      });

      if (!pickerResult.cancelled) {
        setImage(pickerResult.base64);
        setImageTaken(true);
      }
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
      setEmail(data.attributes.email);
      // const item = await db.post(PUTitemFORMAT);
      // console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.Page}
        scrollEnabled={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            {imageState ? ""
              : <View style={styles.uploadContainer}>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={takePhoto}
                >
                  <Ionicons name="camera-outline" size={75} color={colors.label} />
                </TouchableOpacity>
              </View>}

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
              <Text style={styles.label}>Serial Number:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Serial Number'
                onChangeText={(text) => { setSerialNum(text) }}
                value={serialNum}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Purchase Amount:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Purchase Amount'
                onChangeText={(text) => { setPurchaseAmt(text) }}
                value={purchaseAmt}
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
              <Text style={styles.label}>Receipt Photo:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Receipt Photo'
                onChangeText={(text) => { setReceiptPhoto(text) }}
                value={receiptPhoto}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Item Manual URL:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Item Manual'
                onChangeText={(text) => { setItemManualURL(text) }}
                value={itemManualURL}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Sell Date:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Sell Date'
                onChangeText={(text) => { setSellDate(text) }}
                value={sellDate}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Buy Date:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Buy Date'
                onChangeText={(text) => { setBuyDate(text) }}
                value={buyDate}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Sell Amount:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Sell Amount'
                onChangeText={(text) => { setSellAmt(text) }}
                value={sellAmt}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Recurring Payment:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Recurring Payment'
                onChangeText={(text) => { setRecurrPayAmt(text) }}
                value={recurrPayAmt}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Shopping URL:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Shopping URL'
                onChangeText={(text) => { setEbayURL(text) }}
                value={ebayURL}
              />
            </View>

            <View style={styles.child}>
              <Text style={styles.label}>Archived:</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Archived'
                onChangeText={(text) => { setArchived(text) }}
                value={archived}
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
                onPress={() => { poster(); props.navigation.goBack() }}
              >
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