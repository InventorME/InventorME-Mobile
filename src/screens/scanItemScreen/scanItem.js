import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Alert, ActivityIndicator  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scanItem.style";

let upc ='';
let info='';

const ScanItem = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    upc = data;
    console.log(data);
    await getInfo();
    while(loading){
      console.log("Loading");
    }
    setLoading(false);
    console.log("##################################################");
    if(!loading){
      // If statement to determine wheter the item was succes or not
      // If succes then alert Item found else alert not found
      Alert.alert('Item Found',' ',
        [
          {
            text:'Cancel' ,
            onPress:()=>{
              console.log("###########CANCEL######################");
              console.log(`Info ${ info}`);
            },
          },
          {
            text:'Add Item' ,
            onPress:()=>{
              console.log("###########ADD Item######################");
              console.log(info);
            },
          },
        ],
        {
          calcelable:false,
        },
      );
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  const axios = require('axios');

  
  // set up the request parameters
  const params = {
    api_key: "199AB6BB6E824802A325E881BDFC6E66",
    type: "product",
    amazon_domain: "amazon.com",
    gtin: upc,
    device: "mobile"
  }
  // console.log(params);

  // make the http GET request to Rainforest API
  const getInfo= async () =>{
    setLoading(true);
      await axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        info =JSON.stringify(response.data, 0, 2);
        console.log(info)
      }).catch(error => {
        // catch and print the error
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && loading?<ActivityIndicator size="large" />:undefined}
      {scanned && !loading && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}

export default ScanItem;