import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100.0%'),
        // width: hp('100.0%'),
    },
    logoView: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        width: wp('100.0%'),
        height: hp('48.0%')
    },
    loginView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // borderWidth: 1,
        width: wp('100.0%'),
        height: hp('52.0%'),
        paddingLeft: 16,
        paddingRight: 16
    },
    messageText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        marginBottom: 10,
        width: '100%',
        textAlign: 'right'
    },
    failedText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: "#FF2929",
        width: '100%',
        textAlign: 'right'
    },
    unabailabelText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: "#FF2929",
        textAlign: 'right'
    },
    resetText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        color: "#FF2929",
        textDecorationLine: 'underline',
        marginBottom: 10,
        width: '100%',
        textAlign: 'right'
    },
    rememberButton: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        textAlign: 'right'
    },
    inputCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: wp('92.0%'), height: 45,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10 },
        shadowRadius: 20,
        elevation: 10,
    },
    serverSelectCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingRight: 10, paddingLeft: 10,
        width: wp('92.0%'), height: 45,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10 },
        shadowRadius: 20,
        elevation: 10,
    },
    textfield: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        textAlign: 'right', width: "96%", height: 45
    },
    serverText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
        // color: "#DFDFDF",
        textAlign: 'right', textAlignVertical: 'center',
        width: "60%", height: 45
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: "100%", height: 45,
        // borderRadius:50,
        // backgroundColor: '#DFDFDF',
        shadowColor: '#28A745',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 3,
    },
    loginText: {
        marginLeft: 10,
        marginRight: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        color: colors.white_color,
        fontWeight: "bold"
    },
    serverCard: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10,
        width: '100%', height: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10 },
        shadowRadius: 20,
        elevation: 10,
    },
    serverItemText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 14,
        marginRight: 10,
        marginLeft: 10,
        textAlign: 'right', textAlignVertical: 'center',
        height: 45
    },
});
