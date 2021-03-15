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
    arrow: {
      alignItems:'flex-start',
      justifyContent: 'flex-end',
      paddingTop: 50,
      paddingStart: 30,
      backgroundColor: '#fff',
      
    },
    deleteBtn: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingTop: 65,
        paddingEnd: 100,
        paddingLeft: 200,
        backgroundColor: '#fff',

    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
        
      },
      logo: {
        
       
        
      },

      Image:{
        height:70,
        width: 50,
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
      deleteButtonContainer: {
        elevation: 8,
        backgroundColor: "#e01f0d",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        
        
      },
      deleteButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase"
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        textTransform: "uppercase"
      }
});