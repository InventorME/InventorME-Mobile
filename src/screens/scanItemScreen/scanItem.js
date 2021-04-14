import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scanItem.style";
import { param } from 'jquery';

let upc ='';

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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
  axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {

      // print the JSON response from Rainforest API
      // console.log(JSON.stringify(response.data, 0, 2));

    }).catch(error => {
      // catch and print the error
      // console.log(error);
    })

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