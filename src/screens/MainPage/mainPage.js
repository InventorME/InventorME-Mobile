import React from "react";
import { TouchableOpacity,FlatList, Text } from "react-native";

const MainPage = () => {
  // Once the user is logged in we will have to get the information from the database using an array of titles just 
  // to have an Idea
  const titles = ['Hello','Hello','Hello', 'Hello', 'Hello'];
    return (
      <FlatList
        data={titles}
        renderItem={({item ,index}) => (
          <TouchableOpacity 
            key={index.toString()} 
            onPress={() => console.log("clicked")}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    );
};

export default MainPage;