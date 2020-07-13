import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { background } from "@constants/images";

class SideMenu extends React.Component {
    render() {
        const { isSide, photo, name, userId, phonenumber, naviagtion, navigator, onPress, onClose, onSettings, onLogout } = this.props;
        return (
            <View style={styles.container}>
                <View style={[isSide == true ? { display: 'flex', position: 'absolute' } : { display: 'none' }, { justifyContent: "center", alignItems: "center", width: wp('100.0%'), height: hp('100.0%') }]}>
                    <TouchableOpacity onPress={onClose}>
                        <View style={{ width: wp('100.0%'), height: hp('100.0%'), backgroundColor: "rgba(0, 42, 92, 0.6)" }} />
                    </TouchableOpacity>
                    <ImageBackground source={background} style={styles.sidemenu}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Icon name="window-close" type="material-community" size={hp('5.0')} />
                        </TouchableOpacity>
                        <View style={styles.profileMenu}>
                            <Image source={{ uri: photo }} style={styles.photo} />
                            <View style={{ width: 180 }}>
                                <Text style={styles.nameText}>{name}</Text>
                                <Text style={styles.userIdText}>User ID: <Text style={{ fontWeight: 'bold' }}>{userId}</Text></Text>
                                <Text style={styles.phonenumberText}>{phonenumber}</Text>
                            </View>
                            <TouchableOpacity style={{ right: 10 }} onPress={onClose}>
                                <Icon name="external-link" type="font-awesome" size={hp('3.0')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.ordersMenu} onPress={onClose}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
                                <View style={{flexDirection: 'row-reverse', padding: 10}}>
                                    <Icon name="cart" type="material-community" size={hp('3.5')} />
                                    <Text style={styles.ordersText}>{"Manage orders"}</Text>
                                </View>
                                <Icon name="chevron-right" type="material-community" size={hp('2.5')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.historyMenu} onPress={onClose}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width: "100%", padding: 10 }}>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <Icon name="cart-remove" type="material-community" color="rgba(0, 0, 0, 0.5)" size={hp('3.5')} />
                                    <Text style={styles.historyText}>{"Manage orders"}</Text>
                                </View>
                                <Icon name="external-link" type="font-awesome" color="rgba(0, 0, 0, 0.5)" size={hp('3.0')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingsMenu} onPress={onSettings}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
                                <View style={{flexDirection: 'row-reverse', padding: 10}}>
                                    <Icon name="settings" type="material-community" size={hp('3.5')} />
                                    <Text style={styles.ordersText}>{"Settings"}</Text>
                                </View>
                                <Icon name="chevron-right" type="material-community" size={hp('2.5')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoutMenu} onPress={onLogout}>
                            <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', width: "100%", padding: 10 }}>
                                    <Icon name="logout" type="material-community" color="rgba(0, 0, 0, 0.5)" size={hp('3.0')} />
                                    <Text style={styles.historyText}>{"Log out"}</Text>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default SideMenu;