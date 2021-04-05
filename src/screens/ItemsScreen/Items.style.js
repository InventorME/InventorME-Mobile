import {StyleSheet} from 'react-native';
import { colors } from '../../util/colors';

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.background,
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    },
    boxRow : {
        flex : .2,
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    addItemContainer: {
        elevation: 8,
        backgroundColor: colors.background,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      }
});