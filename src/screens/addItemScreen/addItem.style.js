import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

export default StyleSheet.create({
    Page:{
      flex:1,
      alignItems: 'stretch',
      backgroundColor: colors.background
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
      backgroundColor: colors.icon,
      
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.background
      },

      Image:{
        height:70,
        width: 50,
      },
      ColTextInput:{
        borderWidth:0.5,
        borderColor: colors.text,
        borderRadius: 8,
        paddingHorizontal:16,
        padding: 8,
        margin: 10,
        width: 100,
        color: colors.text,
        backgroundColor: colors.background
      },
      TextInput:{
        borderWidth:1,
        borderColor: colors.text,
        borderRadius: 8,
        paddingHorizontal:16,
        padding: 8,
        margin: 10,
        width: 200,
        color: colors.text,
        backgroundColor: colors.background
      },
      
      appButtonContainer: {
        elevation: 8,
        backgroundColor: colors.button,
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
        color: colors.buttonText,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});