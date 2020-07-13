import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: wp('100.0%'), height: hp('100.0%'), 
    },
    sidemenu: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('90.0%'), height: hp('100.0%'),
        right: 0
    },
    closeButton: {
        position: 'absolute',
        top: 10, right: 10
    },
    profileMenu: {
        position: 'absolute',
        top: 80, left: -wp('5.0%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        width: wp('90.0%'), height: 100,
        borderRadius: 50,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    photo: {
        width: 95, height: 95,
        borderRadius: 50
    },
    nameText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: "#151515",
        fontWeight: 'bold',
        textAlign: 'right'
    },
    userIdText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.6)",
        textAlign: 'right'
    },
    phonenumberText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: "#151515",
        textAlign: 'right',
        marginTop: 10
    },
    ordersMenu: {
        position: 'absolute',
        top: hp('40.0%'), left: -wp('5.0%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        width: wp('90.0%'), height: 50,
        // borderRadius: 50,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    ordersText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: "#151515",
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
    historyMenu: {
        position: 'absolute',
        top: hp('49.0%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        width: wp('80.0%'), height: 50,
        // borderRadius: 50,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    historyText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.6)",
        // fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
    settingsMenu: {
        position: 'absolute',
        top: hp('75.0%'), left: -wp('5.0%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        width: wp('90.0%'), height: 50,
        // borderRadius: 50,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    settingsText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: "#151515",
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
    logoutMenu: {
        position: 'absolute',
        top: hp('84.0%'),
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        width: wp('80.0%'), height: 50,
        // borderRadius: 50,
        backgroundColor: colors.header_color, 
        shadowColor: colors.header_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    logoutText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.6)",
        // fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
});