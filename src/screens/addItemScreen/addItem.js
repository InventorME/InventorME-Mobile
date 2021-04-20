import React, { useState } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Avatar } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./addItem.style";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Database } from "../../util/Database";
import { colors } from "../../util/colors";
import { Photo } from "../../util/Photos";
import { Auth } from 'aws-amplify';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const addItemScreen = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [folder, setFolder] = useState("");
  const [location, setLocation] = useState("");
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState("");
  const [worth, setWorth] = useState("");
  const [tags, setTags] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [imageTaken, setImageTaken] = useState(false);
  const [imageState, setImageState] = useState(false);
  const [imageType, setImageType] = useState("image/jpg");
  const db = new Database();
  const photo = new Photo();

  let POSTitemFORMAT = {
    userEmail: `"${email}"`,
    itemCategory: `"${category}"`,
    itemName: `"${name}"`,
    itemPhotoURL: "null",
    itemSerialNum: "null",
    itemPurchaseAmount: "null",
    itemWorth: "null",
    itemReceiptPhotoUrl: "null",
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

  const clear = () => {
    setName("");
    setCategory("");
    setFolder("");
    setLocation("");
    setNotes("");
    setWorth("");
    setTags("");
    setPhotoUrl("");
    setImage("");
    setImageTaken(false);
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

    } else {
      const title = "No Photo Access";
      const msg = "Please Go Into Phone Settings & Grant App Access To Camera & Photos";
      alert(title, msg, [{ text: "OK" }], { cancelable: false });
    }
  }


  const uploadImage = async () => {
    try {
      const pName = await photo.generateNewItemName("jpg");

      // ******BUG HERE********
      // NOT SURE THAT photoUrl is getting SET

      setPhotoUrl(String(pName));
      // console.log("photoUrl:", photoUrl);
      // await photo.uploadFile(image, photoUrl, imageType);
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
      const item = await db.post(POSTitemFORMAT);
      clear();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <ScrollView style={styles.page}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => { clear(); props.navigation.navigate("Collections"); }}
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
                  <Ionicons name="camera-outline" size={75} color={colors.iconBackless} />
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
                  props.navigation.navigate("Collections");
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
                <Text style={styles.buttonText}>Add Info</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  poster();
                }}
              >
                <Text style={styles.buttonText}>New Item</Text>
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </ScrollView >
  );
};

export default addItemScreen;
