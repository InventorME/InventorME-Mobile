import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        alignSelf:'stretch',
        padding: 5,
    },
    boxFolderRow:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        maxHeight:150,
    },
    boxFolderColumn:{
        flexDirection:'column',
        alignItems:'center', 
        justifyContent:'space-between',
    },
});