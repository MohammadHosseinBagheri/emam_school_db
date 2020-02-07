import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Item, Input, Button} from 'native-base';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  changePassword = text => {
    this.setState({
      password: text,
    });
  };
  login = () => {
    if (this.state.password != 4640) {
      alert('رمز عبور اشتباه است');
      return;
    } else {
      this.props.navigation.replace('HomeScreen');
    }
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#232F34'}}>
        <Text
          style={{
            fontFamily: 'IRANSansMobile_Bold',
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            margin: '15%',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderBottomColor: '#F9AA33',
          }}>
          مدیریت دبیرستان امام
        </Text>

        <View
          style={{
            margin: 20,
            flex: 1,
          }}>
          <Item
            style={{
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderRadius: 10,
              paddingRight: 5,
              borderColor: this.state.password === '' ? 'red' : '#00E676',
            }}>
            <Input
              secureTextEntry={true}
              keyboardType={'numeric'}
              onChangeText={this.changePassword}
              style={{
                fontFamily: 'IRANSansMobile',
                color: 'white',
                textAlign: 'right',
              }}
              placeholderTextColor={'white'}
              placeholder="رمز عبور"
              defaultValue={this.state.password}
            />
          </Item>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Button
              onPress={this.login}
              style={{
                justifyContent: 'center',
                width: 150,
                backgroundColor: '#F9AA33',
                borderRadius: 10,
                elevation: 5,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile_Bold'}}>ورود</Text>
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column-reverse',
              alignItems: 'center',
            }}>
            <Button
              full
              disabled
              style={{
                backgroundColor: '#4a6572',
                borderRadius: 5,
                elevation: 5,
              }}>
              <Text style={{color: 'white'}}>@Amir7amiri</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
