import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import styles from "./styles";
import { Header, ClubItem } from "@components";
import { background, logo, success } from '@constants/images';


class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isReset: false,
      isSuccess: false
    };
  }

  setEmail(email) {
    if (email) {
      if (!this.validateEmail(email)) {
        this.setState({ isReset: false });
        // this.dropDownAlertRef.alertWithType('warn', `${i18n.translate(Strings.ST334)}`, `${i18n.translate(Strings.ST335)}`);
      } else {
        this.setState({ email });
        this.setState({ isReset: true });
      }
    } else {
      this.setState({ isReset: false });
    }
  }

  resetPassword() {
    if (this.state.isReset) {
      this.setState({ isSuccess: true });
    } else {
      this.setState({ isSuccess: false });
    }
  }

  validateEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      this.setState({ email: value });
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.container}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => this.clickLogo()}>
              <Image source={logo} style={{ width: wp('45.0%'), height: wp('45.0%'), marginTop: 20 }} />
            </TouchableOpacity>
          </View>
          {!this.state.isSuccess ?
            <View style={styles.loginView}>
              <Text style={styles.messageText}>Please enter your email address</Text>
              <View style={[styles.inputCard, this.state.isFailed ? { borderColor: '#FF2929', borderWidth: 1 } : { borderWidth: 0 }]}>
                <TextInput
                  style={styles.textfield}
                  placeholder={"Your email"}
                  placeholderTextColor="#DFDFDF"
                  keyboardType={"email-address"}
                  onChangeText={(email) => this.setEmail(email)}
                />
              </View>
              <TouchableOpacity style={[this.state.isReset == true ? { backgroundColor: "#151515" } : { backgroundColor: "#DFDFDF" }, styles.loginButton]} onPress={() => this.resetPassword()}>
                <Text style={styles.loginText}>Reset password</Text>
                <Icon name="lock-reset" type="material-community" color="#FFF" size={hp('2.8')} />
              </TouchableOpacity>
            </View> :
            <View style={styles.loginView}>
              <Text style={styles.message1Text}>Success! Password reset link was sent to your email address</Text>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginBottom: 36 }}>
                <Image source={success} style={{ width: 60, height: 50 }} />
              </View>
              <Text style={styles.message2Text}>Please follow the instructions from our message.</Text>
              <Text style={styles.message2Text}><Text style={{fontWeight: 'bold'}}>Note:</Text> If our message went to spam folder - make sure to mark it as "not spam".</Text>
            </View>
          }
          <TouchableOpacity style={[{ backgroundColor: "#FFF", position: 'absolute', bottom: 30, marginLeft: 14 }, styles.backButton]} onPress={() => this.props.navigation.goBack()}>
            <Text style={[styles.loginText, { color: "#DFDFDF" }]}>Back</Text>
            <Icon name="chevron-left" type="material-community" color="#DFDFDF" size={hp('2.8')} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default ResetPassword;