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
    searchCard: {
        flexDirection: 'row-reverse',  marginRight: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('92.0%'), height: 45,
        marginTop: 16, marginBottom: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 10,
    },
    bottomBar: {

    },
    backButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: wp('92.0%'), height: 45,
        shadowColor: '#28A745',
        shadowOpacity: 0.8,
        shadowOffset: { height: 10, width: 10},
        shadowRadius: 20,
        elevation: 3,
    },
    loginText: {
        marginLeft: 10, marginRight: 10,
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white_color
    }    
});
