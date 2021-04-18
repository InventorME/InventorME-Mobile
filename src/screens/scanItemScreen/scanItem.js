import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, ActivityIndicator} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scanItem.style";

const axios = require('axios');

let upc = '';
let info;

const ScanItem = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [info, setInfo]=useState()


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = async ({ type, data }) => {
    console.log("getter called")
    setScanned(true);
    upc = data;
    console.log("data", data);
    await getter();
    console.log(info.request_info.success);
    if(info.request_info.success){
      Alert.alert('Item Found',' ',
          [
            {
              text:'Cancel' ,
              onPress:()=>{
                console.log("###########CANCEL######################");
                console.log(`Info ${ info.request_info.success }`);
              },
            },
            {
              text:'Add Item' ,
              onPress:()=>{
                const description=info.product.description;
                const title=info.product.title;
                const category= info.product.categories[0].name;
                const price= info.product.buybox_winner.price.value;
                console.log(description);
                console.log(title);
                console.log(category);
                console.log(price);
                props.navigation.navigate("AddItemScreen",{description,title,category,price});
              },
            },
          ],
          {
            calcelable:false,
          },
        );
      }else{
        Alert.alert('The Item Was not found ',' ',
          [
            {
              text:'Retry' ,
              onPress:()=>{
                console.log("###########CANCEL######################");
                console.log(`Info ${ info.request_info.success }`);
              },
            },
            {
              text:'Add Item Manually' ,
              onPress:()=>{
                props.navigation.navigate("addItem");
              },
            },
          ],  
          {
            cancelable:false,
          }
        );    
      }  
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  // set up the request parameters
  const params = {
    api_key: "06216450BA1844B4A86EC6E8C8D8DE05",
    type: "product",
    amazon_domain: "amazon.com",
    gtin: upc,
    device: "mobile"
  }


  const getter = async () => {
    setLoading(true);
    const queryURL = `${"https://api.rainforestapi.com/request" + "?api_key="}${  params.api_key  }&type=product&amazon_domain=amazon.com&gtin=${  upc}`;
    
     await axios.get(queryURL)
    .then(response => {
      // print the JSON response from Rainforest API
      //console.log(response.data,0,2);
      info = response.data,0,2;
      console.log(JSON.stringify(info));
    }).catch(error => {
      console.log(error);
    })
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && loading?<ActivityIndicator size="large" />:undefined}
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}

export default ScanItem;