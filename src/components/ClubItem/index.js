import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { emptyImage} from "@constants/images";

class ClubItem extends React.Component {
    render() {
        const { image, title, price, price2, price3, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
            <View style={[{flexDirection: 'row-reverse'} , styles.container]}>
                <Image source={image == "" ? emptyImage : {uri: image}} style={styles.image} />
                <View style={{width: 180}}>
                    <Text style={[{textAlign: "right"}, styles.title]}>{title}</Text>
                </View>
                <View style={{ width: 100 }}>                    
                    <Text style={[{textAlign: "left",marginLeft: 10}, styles.price]}>{price}</Text>  
                    <Text style={[{textAlign: "left",marginLeft: 10}, styles.price2]}>{price2}</Text>  
                    <Text style={[{textAlign: "left",marginLeft: 10}, styles.price3]}>{price3}</Text>  
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default ClubItem;