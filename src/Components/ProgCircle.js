import React from "react";
import ProgressCircle from 'react-native-progress-circle';
import { View, Text } from "react-native";;
 
const ProgCircle = (props) =>  {
    
    return(
        <ProgressCircle
            percent={props.percent}
            radius={90}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{props.text}</Text>
        </ProgressCircle>
    );
   

}
export default ProgCircle;