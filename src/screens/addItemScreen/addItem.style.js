import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
    },
    arrow: {
        alignItems:'flex-start',
        justifyContent: 'flex-end',
        paddingTop: 50,
        paddingStart: 30,
        backgroundColor: 'lightgray',
        
      },
      arrowButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      }
});