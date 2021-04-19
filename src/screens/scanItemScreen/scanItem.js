import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scanItem.style";
const fetch = require('node-fetch');
const axios = require('axios');

let upc = '';

const ScanItem = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    upc = data;
    console.log("data", data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getter();
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
    let queryURL = "https://api.rainforestapi.com/request" + "?api_key=" + params.api_key + "&type=product&amazon_domain=amazon.com&gtin=" + upc;
    
     axios.get(queryURL)
    .then(response => {
      // print the JSON response from Rainforest API
      console.log(JSON.stringify(response.data, 0,2));
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}

export default ScanItem;