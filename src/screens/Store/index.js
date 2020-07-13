import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { SideMenu, StoreItem } from "@components";
import { background, menuIcon, SearchIcon } from '@constants/images';
const storelist = require('@dummy/storelist.json');


class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSide: false,
      searchKeyword: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isSide ?
          <View>
            <ImageBackground source={background} style={styles.container}>

              <View style={styles.topBar}>
                <View style={{ width: 50 }} />
                <Text style={styles.topTitle}>{"Select Store"}</Text>
                <View style={{ width: 50 }} >
                  <TouchableOpacity style={{ width: 40, marginRight: 16 }} onPress={() => this.setState({ isSide: true })}>
                    <Image source={menuIcon} style={{ width: 35, height: 35 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop: 80 }}>
                <View style={styles.searchCard}>
                  <TouchableOpacity style={{ left: 10, width: 30, height: 25 }}>
                    <Image source={SearchIcon} style={{ width: 30, height: 25, transform: [{ scaleX: 1 }] }} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      value={this.state.searchKeyword}
                      style={{ textAlign: 'right', width: 290, height: 45, fontSize: 16 }}
                      onChangeText={(searchKeyword) => this.setState({searchKeyword})} />
                  </View>
                </View>

                <ScrollView>
                  <View style={{ width: wp('100.0%'), justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                    {storelist.map((item, key) => {
                      return (
                        <StoreItem
                          image={item.image}
                          title={item.title}
                          location={item.location}
                          onPress={() => this.props.navigation.navigate("User")} />
                      )
                    })}
                  </View>
                </ScrollView>

                <View style={styles.bottomBar}>
                  <TouchableOpacity style={[{ backgroundColor: "#FFF", marginTop: 5, marginBottom: 10, marginLeft: 14 }, styles.backButton]} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={[styles.loginText, { color: "#DFDFDF" }]}>Log out</Text>
                    <Icon name="logout" type="material-community" color="#DFDFDF" size={hp('2.8')} />
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

export default Store;