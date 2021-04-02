import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

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
      backgroundColor: colors.background
      
    },
    signOutBtn: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      paddingTop: 55,
      paddingEnd: 100,
      paddingLeft: 190,
      backgroundColor: colors.background

  },
    container1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
      },
      logo: {
        
       
        
      },

      Image:{
        height:70,
        width: 50,
      },
      TextInput:{
        borderWidth:1,
        borderColor: colors.label,
        borderRadius:25,
        paddingHorizontal:16,
        padding: 8,
        margin: 10,
        width: 200,
        backgroundColor: colors.background
      },
      
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        // marginLeft: 135,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
      arrowButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      signOutButtonContainer: {
        elevation: 8,
        backgroundColor: colors.background,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        
        
      },
      appButtonText: {
        fontSize: 18,
        color: colors.buttonText,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
    container2: {
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.background
    }
      
});