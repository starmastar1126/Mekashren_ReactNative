import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "@constants/colors";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000F8',
        width: wp('100.0%'),
        height: hp('100.0%'),
        display: 'flex',
        zIndex: 100,
    },
    languageDialog: {
        position: 'absolute',
        width: wp('50.0%'),
        height: hp('40.0%'),
        marginTop: hp('30.0%'), marginLeft: hp('13.0%'),
        // borderRadius: 10,
        shadowColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
        zIndex: 101
    },
    languageItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: wp('60.0%'),
        height: 30,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        zIndex: 102
    }
});