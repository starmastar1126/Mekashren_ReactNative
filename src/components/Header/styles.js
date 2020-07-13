import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: wp('100.0%'), height: 80, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        paddingBottom: 10,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: colors.black_color, 
        fontWeight: "bold"
    },
    title1: {
        marginLeft: 10,
        marginRight: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 18, 
        color: colors.black_color, 
        // fontWeight: "bold"
    },
});