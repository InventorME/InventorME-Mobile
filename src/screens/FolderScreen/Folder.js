import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { renderContext } from "../MainPage/mainPage";
import { colors } from '../../util/colors';
import { List } from "react-native-paper";

const Folder = () => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    const data = useContext(renderContext);
    let foldersList = [];
    let renderList = [];

    for (let i = 0; i < data.items.length; i++) {
        if (!foldersList.includes(data.items[i].itemFolder) && data.items[i].itemFolder != null) {
            foldersList.push(data.items[i].itemFolder);
        }
    }

    for (let i = 0; i < foldersList.length; i++) {
        let itemsToRender = [];
        let object = { name : foldersList[i], itemsToRender : itemsToRender, key : foldersList[i]};

        for (let j = 0; j < data.items.length; j++) {
            if (data.items[j].itemFolder == foldersList[i]) {
                object.itemsToRender.push(data.items[j]);
            }
        }

        renderList.push(object);
    }

    return (
        <FlatList
            data = {renderList}
            renderItem = {({item}) => (
                <List.Accordion
                    title = {item.name}
                    left = {props => <List.Icon {...props} icon = "folder" />}
                >
                    <FlatList
                        data = {item.itemsToRender}
                        renderItem = {({item}) => (
                            <TouchableOpacity>
                                <List.Item title = {item.itemName} />
                            </TouchableOpacity>
                        )}
                        keyExtractor = {(item, index) => item.itemName}
                    />         
                </List.Accordion>
            )}
        />
    );
};

export default Folder;