import React, { useContext, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { renderContext } from "../MainPage/mainPage";
import { colors } from '../../util/colors';
import { List } from "react-native-paper";

// const head = (item, index, isExpanded) => {

//     return (
//         <View style = {styles.headerView}>
//             <Text style = {{fontSize : 30}}>{item.name}</Text>
//         </View>
//     );
// }

// const body = (item) => {
    
//     return (
//         <FlatList
//             data = {item.itemsToRender}
//             renderItem = {({ item }) => (
//                 <View style = {styles.bodyView}>
//                     <TouchableOpacity style = {styles.bodyTouchable}>
//                         <Text style = {{fontSize : 30, color : "white"}} numberOfLines = {1}>{item.itemName}</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//             listKey = {(item, index) => item.name}
//             keyExtractor = {(item, index) => item.name}
//         />
//     );
// }

// const Folder = () => {

//     const data = useContext(renderContext);
//     let foldersList = [];
//     let renderList = [];

//     for (let i = 0; i < data.items.length; i++) {
//         if (!foldersList.includes(data.items[i].itemFolder) && data.items[i].itemFolder != null) {
//             foldersList.push(data.items[i].itemFolder);
//         }
//     }

//     for (let i = 0; i < foldersList.length; i++) {
//         let itemsToRender = [];
//         let object = { name : foldersList[i], itemsToRender : itemsToRender, key : foldersList[i]};

//         for (let j = 0; j < data.items.length; j++) {
//             if (data.items[j].itemFolder == foldersList[i]) {
//                 object.itemsToRender.push(data.items[j]);
//             }
//         }

//         renderList.push(object);
//     }

//     return (
//         <AccordionList
//             list = {renderList}
//             header = {head}
//             body = {body}
//             keyExtractor = {item => {item.name}}
//         />
//     );
// }

// const styles = StyleSheet.create({
//     headerView : {
//         height : 100,
//         justifyContent : "center",
//         alignItems : "center",
//         borderBottomWidth : 2,
//         borderBottomColor : "black",
//         borderTopWidth : 2,
//         borderTopColor : "black"
//     },
//     bodyView : {
//         height : 50,
//         justifyContent : "center",
//         borderBottomWidth : 1,
//         borderBottomColor : "white",
//         backgroundColor : "black"
//     },
//     bodyTouchable : {
//         alignItems : "center", 
//     }
// })

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
    // <View>
    //   <List.Accordion
    //     title="Uncontrolled Accordion"
    //     left={props => <List.Icon {...props} icon="folder" />}>
    //     <List.Item title="First item" />
    //     <List.Item title="Second item" />
    //   </List.Accordion>

    //   <List.Accordion
    //     title="Controlled Accordion"
    //     left={props => <List.Icon {...props} icon="folder" />}
    //     expanded={expanded}
    //     onPress={handlePress}>
    //     <List.Item title="First item" />
    //     <List.Item title="Second item" />
    //   </List.Accordion>
    //   </View>
  );
};

export default Folder;