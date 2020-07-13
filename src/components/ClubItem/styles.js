import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('92.0%'), height: 80,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 8,
    },
    image:{
        width: 45, height: 75,
        marginLeft: 5, marginRight: 5,
        borderRadius: 5,
        borderWidth: 1
    },
    title: {
        height: 60,
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
        textAlignVertical: 'top',
        color: colors.black_color, 
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        lineHeight: 19,
        // borderWidth: 1
        // fontWeight: "bold"
    },
    price: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18, 
        color: colors.black_color, 
        fontWeight: "bold",
        // borderWidth: 1
    },
    price2: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: "rgba(0, 0, 0, 0.6)", 
        // borderWidth: 1
        // fontWeight: "bold"
    },
    price3: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: "#FF2929", 
        // borderWidth: 1
        // fontWeight: "bold"
    },
});