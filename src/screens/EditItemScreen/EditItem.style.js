import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    Page:{
      flex:1,
      alignItems: 'stretch',
    },
    child: {
      
      alignItems: 'flex-start',
      justifyContent: 'center'
      
    },
    columnView: {
      
    },
    arrow: {
      alignItems:'flex-start',
      justifyContent: 'flex-end',
      paddingTop: 50,
      paddingStart: 30,
      backgroundColor: 'lightgray',
      
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
        
      },
      logo: {
        
       
        
      },

      Image:{
        height:70,
        width: 50,
      },
      ColTextInput:{
        borderWidth:0.5,
        borderColor: '#777',
        borderRadius:25,
        paddingHorizontal:16,
        padding: 8,
        margin: 10,
        width: 100,
        backgroundColor: '#7FFFD4'
      },
      TextInput:{
        borderWidth:1,
        borderColor: '#777',
        borderRadius:25,
        paddingHorizontal:16,
        padding: 8,
        margin: 10,
        width: 200,
        backgroundColor: '#7FFFD4'
      },
      
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      arrowButtonContainer: {
        elevation: 8,
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