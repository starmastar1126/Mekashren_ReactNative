import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { emptyImage } from "@constants/images";

class UserItem extends React.Component {
    render() {
        const { image, name, userId, phonenumber, isBusiness, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[{ flexDirection: 'row-reverse' }, styles.container]}>
                    <Image source={image == "" ? emptyImage : { uri: image }} style={styles.image} />
                    <View style={{ width: 250, flexDirection: 'column' }}>
                        <Text style={[{ textAlign: "right", fontWeight: 'bold' }, styles.title]}>{name}</Text>
                        {isBusiness ?
                            <Text style={[{ textAlign: "right", }, styles.title3]}>{phonenumber}</Text> :
                            <Text style={[{ textAlign: "right", }, styles.title2]}>User ID: <Text style={{ fontWeight: 'bold' }}>{userId}</Text></Text>
                        }
                    </View>
                    <View style={{ width: 30 }}>
                        <Icon name="chevron-right" type="material-community" color="#DFDFDF" size={hp('2.8')} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default UserItem;