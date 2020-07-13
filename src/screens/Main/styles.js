import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100.0%'),
    },
    topBar: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        top: 0,
        width: wp('100.0%'), height:80, 
        paddingBottom: 10,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    topTitle: {
        marginLeft: 10, marginRight: 10,
        marginBottom: 5,
        fontFamily: "OpenSans-Regular",
        fontSize: 18, 
        color: colors.black_color, 
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: colors.black_color, 
        fontWeight: "bold"
    },

    clubButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16, marginLeft: 14,
        width: wp('92.0%'), height: 50,
        borderRadius:50,
        backgroundColor: '#28A745',
        shadowColor: '#28A745',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 3,
    },
    clubText: {
        marginLeft: 5,
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: colors.white_color,
        fontWeight: "bold"
    },
    searchCard: {
        flexDirection: 'row-reverse',  marginRight: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('92.0%'), height: 45,
        marginTop: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 10,
    },
    price: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18, 
        color: colors.black_color, 
        // marginRight: 10,
        fontWeight: "bold",
        width: 90
    },
    price2: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: "rgba(0, 0, 0, 0.6)", 
        // marginRight: 10,
        textAlign: "right",
        // fontWeight: "bold"
    },
    price3: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14, 
        color: "#FF2929", 
        // marginRight: 10,
        textAlign: "right",
        fontWeight: "bold",
        width: 90
    },
    whiteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('35.0%'),
        height: 50, marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 5,
    },
    checkoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('55.0%'),
        height: 110, marginBottom: 10,
        backgroundColor: '#002A5C',
        borderRadius: 3,
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 5,
    }
});
