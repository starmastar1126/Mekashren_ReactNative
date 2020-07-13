import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { UserItem } from "@components";
import { background, SearchIcon } from '@constants/images';
const userlist = require('@dummy/userlist.json');


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground source={background} style={styles.container}>

            <View style={styles.topBar}>
              <View style={{ width: 50 }} />
              <Text style={styles.topTitle}>{"Select User"}</Text>
              <View style={{ width: 50 }} />
            </View>

            <View style={{ marginTop: 80 }}>
              <View style={styles.searchCard}>
                <TouchableOpacity style={{ left: 10, width: 30, height: 25 }}>
                  <Image source={SearchIcon} style={{ width: 30, height: 25, transform: [{ scaleX: 1 }] }} />
                </TouchableOpacity>
                <View>
                  <TextInput style={{ textAlign: 'right', width: 290, height: 45, fontSize: 16 }} />
                </View>
              </View>

              <ScrollView>
                <View style={{ width: wp('100.0%'), justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                  {userlist.map((item, key) => {
                    return (
                      <UserItem
                        image={item.image}
                        name={item.name}
                        userId={item.userId}
                        phonenumber={item.phonenumber}
                        isBusiness={true}
                        onPress={() => this.props.navigation.navigate("Main")} />
                    )
                  })}
                </View>
              </ScrollView>

              <View style={styles.bottomBar}>
                <TouchableOpacity style={[{ backgroundColor: "#FFF", marginTop: 5, marginBottom: 10, marginLeft: 16 }, styles.backButton]} onPress={() => this.props.navigation.goBack()}>
                  <Text style={[styles.loginText, { color: "#DFDFDF" }]}>Back</Text>
                  <Icon name="chevron-left" type="material-community" color="#DFDFDF" size={hp('2.8')} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default User;