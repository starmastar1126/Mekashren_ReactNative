import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";

import {
    English, Arabic, Chinese, Hebrew,
    // Filipino, French, Bosnian,  Dutch, German, Italian, Japanese, Korean, Polish, PortugueseBrazil, Russian, Slovenian, Spanish, Swedish, Ukrainian, Vietnamese 
} from "@constants/images";

import i18n from "@utils/i18n";
const languageData = require("@languages/languages.json")

class Language extends React.Component {

    constructor(props) {
        super(props);
    }

    changeLanguage = item => {
        i18n.setLocale(item.code)
        this.props.onPress();
        return true;
    }

    render() {
        const { visible, onPress } = this.props;
        return (
            <View style={visible ? styles.contentView : { display: 'none' }}>
                <View style={visible ? { display: 'flex', width: wp('100.0%'), height: hp('100.0%'), backgroundColor: '#00000098', zIndex: 100 } : { display: 'none' }} />
                <View style={styles.languageDialog}>
                    <FlatList
                        data={languageData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.changeLanguage(item)}>
                                <View style={styles.languageItem}>
                                    <Image source={
                                        item.language == "English" ? English :
                                        item.language == "Arabic" ? Arabic :
                                        item.language == "Chinese" ? Chinese :
                                        item.language == "Hebrew" ? Hebrew :
                                        // item.language == "Filipino" ? Filipino :
                                        // item.language == "French" ? French :
                                        // item.language == "Bosnian" ? Bosnian :
                                        // item.language == "Dutch" ? Dutch :
                                        // item.language == "German" ? German :
                                        // item.language == "Italian" ? Italian :
                                        // item.language == "Japanese" ? Japanese :
                                        // item.language == "Korean" ? Korean :
                                        // item.language == "Polish" ? Polish :
                                        // item.language == "Portuguese-Brazil" ? PortugueseBrazil :
                                        // item.language == "Russian" ? Russian :
                                        // item.language == "Slovenian" ? Slovenian :
                                        // item.language == "Spanish" ? Spanish :
                                        // item.language == "Swedish" ? Swedish :
                                        // item.language == "Ukrainian" ? Ukrainian :
                                        // item.language == "Vietnamese" ? Vietnamese :
                                        English
                                    } style={{ width: 30, height: 20, marginRight: 5 }} />
                                    <Text>{item.nativeName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.code}
                    />
                </View>
            </View>
        )
    }
}

export default Language;