import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { Header, ClubItem } from "@components";
import { background, logo, clubIcon } from '@constants/images';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageVisible: false,
      remember: false,
      isLogin: false,
      username: '',
      password: '',
      server: 'Server',
      isServer: false,
      isFailed: false,
    };
  }

  clickLogo(){
    if (this.state.isFailed == true) {
      this.setState({ isFailed: false });
    } else {
      this.setState({ isFailed: true });
    }
  }
  remember() {
    if (this.state.remember == true) {
      this.setState({ remember: false });
    } else {
      this.setState({ remember: true });
    }
  }

  setUsername(username) {
    this.setState({ username });
    this.setState({ isFailed: false });
    if (this.state.username != "" && this.state.password != "" && this.state.server != "Server") {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }

  setPassword(password) {
    this.setState({ password });
    this.setState({ isFailed: false });
    if (this.state.username != "" && this.state.password != "" && this.state.server != "Server") {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }

  setServer(server) {
    this.setState({ isServer: false });
    this.setState({ server: server });
    this.setState({ isFailed: false });
    if (this.state.username != "" && this.state.password != "") {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }

  login() {
    // if (this.state.username != "Silas" || this.state.password != "123456" || this.state.server == "Server") {
    //   this.setState({ isFailed: true })
    // } else {
      if(this.state.isLogin == true){
        this.props.navigation.navigate("Store");
      }      
    // }
  }

  resetPassword() {
    this.props.navigation.navigate("ResetPassword");
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isServer == false ?
        <ImageBackground source={background} style={styles.container}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => this.clickLogo()}>
              <Image source={logo} style={{ width: wp('45.0%'), height: wp('45.0%'), marginTop: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.loginView}>
            {!this.state.isFailed ?
              <Text style={styles.messageText}>Please input your login credentials down below</Text>
              :
              <View style={{ width: '100%' }}>
                <Text style={styles.failedText}>No such combination of credentials found</Text>
                <TouchableOpacity onPress={() => this.resetPassword()}>
                  <Text style={styles.resetText}>Reset your password?</Text>
                </TouchableOpacity>
              </View>
            }
            <View style={[styles.inputCard, this.state.isFailed ? { borderColor: '#FF2929', borderWidth: 1 } : { borderWidth: 0 }]}>
              <TextInput
                value={this.state.username}
                style={styles.textfield}
                placeholder={"Your username"}
                placeholderTextColor="#DFDFDF"
                keyboardType={"default"}
                onChangeText={(username) => this.setUsername(username)}
              />
            </View>
            <View style={[styles.inputCard, this.state.isFailed ? { borderColor: '#FF2929', borderWidth: 1 } : { borderWidth: 0 }]}>
              <TextInput
                value={this.state.password}
                style={styles.textfield}
                placeholder={"Your password"}
                placeholderTextColor="#DFDFDF"
                secureTextEntry={true}
                keyboardType={"default"}
                onChangeText={(password) => this.setPassword(password)} />
            </View>
            <View style={{ justifyContent: 'flex-end', width: '100%' }}>
              <TouchableOpacity onPress={() => this.remember()}>
                <View style={{ flexDirection: "row-reverse", justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Icon name={this.state.remember == true ? "check-box-outline" : "checkbox-blank-outline"} type="material-community" size={hp('3.0%')} />
                  <Text style={styles.rememberButton}>Remember your login credentials</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'flex-end', width: '100%', borderBottomColor: "#D5D5D5", borderBottomWidth: 1, marginTop: 20, marginBottom: 20 }} />
            <TouchableOpacity onPress={() => this.setState({ isServer: true })}>
              <View style={[styles.serverSelectCard, this.state.isFailed ? { borderColor: '#FF2929', borderWidth: 1 } : { borderWidth: 0 }]}>
                <Text style={[styles.serverText, this.state.server == "Server" ? { color: "#DFDFDF" } : { color: "#000" }]} >{this.state.server}</Text>
                {this.state.isFailed && this.state.server != "Server" ? <Text style={styles.unabailabelText}>Unavailabel</Text> : <View />}
                {this.state.server == "Server" ? <View /> : <Icon name="refresh" type="material-community" />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[this.state.isLogin == true ? { backgroundColor: "#151515" } : { backgroundColor: "#DFDFDF" }, styles.loginButton]} onPress={() => this.login()}>
              <Text style={styles.loginText}>Login</Text>
              <Icon name="account-box" type="material-community" color="#FFF" size={hp('2.8')} />
            </TouchableOpacity>
          </View>
        </ImageBackground> :
        <View style={{position: 'absolute', justifyContent: "center", alignItems: "center", width: wp('100.0%'), height: hp('100.0%') }}>
          <View style={{ width: wp('100.0%'), height: hp('100.0%'), backgroundColor: "#000000F0" }} />
          <View style={{ position: 'absolute', width: wp('90.0%'), height: hp('35.0%'), backgroundColor: "#F5F5F5", borderRadius: 3 }}>
            <View style={{ flexDirection: "row-reverse", justifyContent: 'space-between', padding: 10, width: '100%' }}>
              <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 18 }} >Pick recnet server</Text>
              <TouchableOpacity onPress={() => this.setState({ isServer: false })}>
                <Icon name="close" type="material-community" size={hp('3.5')} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", paddingLeft: 10, paddingRight: 10, paddingBottom: 10, paddingTop: 10, width: '100%' }}>
              <TouchableOpacity onPress={() => this.setServer('182.168.0.255:1212')}>
                <View style={styles.serverCard}>
                  <Text style={styles.serverItemText} >{"182.168.0.255:1212"}</Text>
                  <Icon name="chevron-right" type="material-community" size={hp('3.5')} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", paddingLeft: 10, paddingRight: 10, paddingBottom: 10, width: '100%' }}>
              <TouchableOpacity onPress={() => this.setServer('182.128.0.255:9988')}>
                <View style={styles.serverCard}>
                  <Text style={styles.serverItemText} >{"182.128.0.255:9988"}</Text>
                  <Icon name="chevron-right" type="material-community" size={hp('3.5')} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", paddingLeft: 10, paddingRight: 10, width: '100%' }}>
              <TouchableOpacity onPress={() => this.setServer('182.168.1.255:8888')}>
                <View style={styles.serverCard}>
                  <Text style={styles.serverItemText} >{"182.168.1.255:8888"}</Text>
                  <Icon name="chevron-right" type="material-community" size={hp('3.5')} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>}
      </View>
    );
  }
}

export default Login;