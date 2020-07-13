import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('92.0%'), height: 50,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 8,
    },
    image:{
        width: 48, height: 48,
        marginLeft: 1, marginRight: 1,
        borderRadius: 50,
        borderWidth: 1
    },
    title: {
        marginLeft: 5,
        marginRight: 5,
        textAlignVertical: 'top',
        color: colors.black_color, 
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
    },
    title2: {
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        textAlignVertical: 'top',
        color: colors.black_color, 
        fontFamily: "OpenSans-Regular",
        fontSize: 12, 
        color: 'rgba(0, 0, 0, 0.6)'
    },
    title3: {
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        textAlignVertical: 'top',
        color: colors.black_color, 
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
    },
});