import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { SideMenu } from "@components";
import { background, menuIcon, US, RU, HE, SettingsIcon } from '@constants/images';


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSide: false,
      isSelect: false,
      language: 1
    };
  }

  onLanguage() {
    if (this.state.isSelect) {
      this.setState({ isSelect: false });
    } else {
      this.setState({ isSelect: true });
    }
  }
  selectLanguage(value) {
    this.setState({ language: value });
    this.setState({ isSelect: false });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isSide ?
          <View>
            <ImageBackground source={background} style={styles.container}>

              <View style={styles.topBar}>
                <View style={{ width: 50 }} />
                <Text style={styles.topTitle}>{"Settings"}</Text>
                <View style={{ width: 50 }} >
                  <TouchableOpacity style={{ width: 40, marginRight: 16 }} onPress={() => this.setState({ isSide: true })}>
                    <Image source={menuIcon} style={{ width: 35, height: 35 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop: 80 }}>
                <View style={{ flexDirection: "row-reverse", marginRight: 14, justifyContent: 'space-between', alignItems: 'center', marginTop: 25, width: wp('92.0%'), height: 16 }}>
                  <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, color: '#151515' }}>Choose interface language</Text>
                </View>
                <TouchableOpacity style={styles.languageButton} onPress={() => this.onLanguage()}>
                  <View style={styles.languageCard}>
                    <Icon name={this.state.isSelect ? "chevron-up" : "chevron-down"} type="material-community" size={hp('3.0')} />
                    <View style={{ flexDirection: 'row-reverse' }}>
                      <Image source={this.state.language == 1 ? US : this.state.language == 2 ? HE : RU} style={{ width: 25, height: 20 }} />
                      <Text style={{ marginRight: 10 }}>{this.state.language == 1 ? "English" : this.state.language == 2 ? "Hebrew" : "Russian"}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={this.state.isSelect ? { display: 'flex' } : { display: 'none' }}>
                  <TouchableOpacity style={styles.languageItem} onPress={() => this.selectLanguage(1)}>
                    <View style={styles.languageCard}>
                      <View />
                      <View style={{ flexDirection: 'row-reverse' }}>
                        <Image source={US} style={{ width: 25, height: 20 }} />
                        <Text style={this.state.language == 1 ? { fontWeight: 'bold', marginRight: 10 } : { marginRight: 10 }}>English</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.languageItem} onPress={() => this.selectLanguage(2)}>
                    <View style={styles.languageCard}>
                      <View />
                      <View style={{ flexDirection: 'row-reverse' }}>
                        <Image source={HE} style={{ width: 25, height: 20 }} />
                        <Text style={this.state.language == 2 ? { fontWeight: 'bold', marginRight: 10 } : { marginRight: 10 }}>Hebrew</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.languageItem} onPress={() => this.selectLanguage(3)}>
                    <View style={styles.languageCard}>
                      <View />
                      <View style={{ flexDirection: 'row-reverse' }}>
                        <Image source={RU} style={{ width: 25, height: 20 }} />
                        <Text style={this.state.language == 3 ? { fontWeight: 'bold', marginRight: 10 } : { marginRight: 10 }}>Russian</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                {this.state.isSelect ? <View /> :
                  <TouchableOpacity style={[{ backgroundColor: "#DFDFDF", marginBottom: 10, marginLeft: 14 }, styles.backButton]} onPress={() => alert("Apply")}>
                    <Text style={[styles.loginText, { color: "#FFF" }]}>Apply</Text>
                    <Icon name="check" type="material-community" color="#FFF" size={hp('3.0')} />
                  </TouchableOpacity>
                }
                <ScrollView>
                  <View style={{ width: wp('100.0%'), justifyContent: 'center', alignItems: 'center', marginTop: 2, height: 350 }}>

                  </View>
                </ScrollView>
                <Image source={SettingsIcon} style={{ position: 'absolute', top: 280, left: 130, width: 100, height: 100 }} />
                <View style={styles.bottomBar}>
                  <TouchableOpacity style={[{ backgroundColor: "#FFF", marginTop: 5, marginBottom: 10, marginLeft: 14 }, styles.backButton]} onPress={() => this.props.navigation.goBack()}>
                    <Text style={[styles.loginText, { color: "#DFDFDF" }]}>Back</Text>
                    <Icon name="chevron-left" type="material-community" color="#DFDFDF" size={hp('2.8')} />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View> :
          <SideMenu
            isSide={this.state.isSide}
            photo="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg"
            name={"Johnissimus Van-Doe"}
            userId={"97566"}
            phonenumber={"+8 034 452 54 33"}
            onClose={() => this.setState({ isSide: false })}
            onSettings={() => this.props.navigation.navigate("Settings")}
            onLogout={() => this.props.navigation.navigate("Login")}
          />}
      </View>
    );
  }
}

export default Settings;