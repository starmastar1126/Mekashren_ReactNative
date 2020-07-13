import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { profile, menuIcon, underIcon } from "@constants/images";

class Header extends React.Component {
    render() {
        const { title, flag, isMenu, naviagtion, navigator, onPress } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ width: 50 }} />
                {flag ?
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                        <Text style={styles.title1}>{title}</Text>
                    </View>
                    :
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={profile} style={{ width: 33, height: 33, borderRadius: 50 }}></Image>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity style={{ width: 15, height: 10 }}>
                            <Image source={underIcon} style={{ width: 15, height: 10, borderRadius: 50 }}></Image>
                        </TouchableOpacity>
                    </View>
                }
                <View style={{ width: 50 }} >
                    {isMenu ? 
                    <TouchableOpacity style={{ width: 40, marginRight: 16 }} onPress={onPress}>
                        <Image source={menuIcon} style={{ width: 35, height: 35 }} />
                    </TouchableOpacity> : <View />}
                </View>
            </View>
        )
    }
}

export default Header;