import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { SideMenu, ClubItem } from "@components";
import { background, menuIcon, clubIcon, SearchIcon, BarcodeIcon } from '@constants/images';
const clubList = require('@dummy/clublist.json');


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSide: false,
      isSelect: false,
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
                <TouchableOpacity>
                  <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: "https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg" }} style={{ width: 33, height: 33, borderRadius: 50 }}></Image>
                    <Text style={styles.title}>{"Alex Shephield"}</Text>
                    <Icon name={this.state.isSelect ? "chevron-up" : "chevron-down"} type="material-community" size={hp('3.0')} />
                  </View>
                </TouchableOpacity>
                <View style={{ width: 50 }} >
                  <TouchableOpacity style={{ width: 40, marginRight: 16 }} onPress={() => this.setState({ isSide: true })}>
                    <Image source={menuIcon} style={{ width: 35, height: 35 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop: 80 }}>
                <ScrollView>
                  <TouchableOpacity style={styles.clubButton} onPress={() => this.setState({ languageVisible: true })}>
                    <Text style={styles.clubText}>Club member</Text>
                    <Image source={clubIcon} style={{ width: 20, height: 20, marginLeft: 5 }} />
                  </TouchableOpacity>
                  <View style={styles.searchCard}>
                    <TouchableOpacity style={{ left: 10, width: 30, height: 25 }}>
                      <Image source={SearchIcon} style={{ width: 30, height: 25 }} />
                    </TouchableOpacity>
                    <View>
                      <TextInput 
                        value={this.state.searchKeyword}
                        style={{ textAlign: 'right', width: 200, height: 45, fontSize: 16 }}
                        onChangeText={(searchKeyword) => this.setState({searchKeyword})} />
                    </View>
                    <TouchableOpacity style={{ right: 2, width: 60, height: 41, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }} onPress={() => alert("Barcode Scanner Button Click")}>
                      <Image source={BarcodeIcon} style={{ width: 30, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: "row-reverse", marginRight: 14, justifyContent: 'space-between', alignItems: 'center', marginTop: 25, width: wp('92.0%'), height: 16 }}>
                    <View style={{ flexDirection: "row-reverse", justifyContent: 'flex-end', alignItems: 'center', height: 16 }}>
                      <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12, fontWeight: 'bold' }}>7</Text>
                      <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12 }}> items </Text>
                    </View>
                    <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 12 }}>#0134234</Text>
                  </View>
                  <View style={{ width: wp('100.0%'), justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                    {clubList.map((item, key) => {
                      return (
                        <ClubItem
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          price2={item.price2}
                          price3={item.price3}
                          onPress={() => alert(key)} />
                      )
                    })}
                  </View>
                  <View style={{ justifyContent: 'flex-end', width: wp('100.0%'), alignItems: 'center', marginTop: 2 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end', alignItems: 'center', width: wp('92.0%') }}>
                      <Text style={[{ textAlign: "left" }, styles.price2]}>Discount : </Text>
                      <Text style={styles.price3}>10% (-$25.99)</Text>
                    </View>
                  </View>
                  <View style={{ width: wp('100.0%'), justifyContent: 'flex-end', alignItems: 'center', marginTop: 2 }}>
                    <View style={[{ flexDirection: 'row-reverse' }, { justifyContent: 'flex-end', alignItems: 'center', width: wp('92.0%') }]}>
                      <Text style={styles.price2}>Total : </Text>
                      <Text style={styles.price}>$1,300.00</Text>
                    </View>
                  </View>
                  <View style={{ width: wp('100.0%'), justifyContent: 'flex-end', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width: wp('92.0%') }}>
                      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('35.0%') }}>
                        <TouchableOpacity style={styles.whiteButton} onPress={() => alert("New Order Button Click")}><Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 'bold' }}>New order</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.whiteButton} onPress={() => alert("Cancel Order Button Click")}><Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14 }}>Cancel order</Text></TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: wp('55.0%') }}>
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => alert("Checkout Button Click")}>
                          <Text style={{ fontFamily: "OpenSans-Regular", color: '#FFF', fontSize: 20 }}>Checkout</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ScrollView>
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

export default Main;