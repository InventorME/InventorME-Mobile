import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
      },
      Image:{
        height:70,
        width: 50,
      },
      TextInput:{
        borderWidth:1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});