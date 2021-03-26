import {StyleSheet} from 'react-native';

export default StyleSheet.create({
      mainContainer: {
        flex:2,
        backgroundColor:'#fff',
        justifyContent:'center',
      },
      container:{
        flex:3,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        bottom:'10%',
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
        paddingHorizontal: 12,
        marginTop:'25%',
        margin : 5
      },
      signUpButton:{
        margin : 15,
        alignSelf:'flex-end',
        position:'relative',
        top:25,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      signUpText: {
        fontSize: 20,
        color: "#009688",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        textDecorationLine: 'underline',
      }
});