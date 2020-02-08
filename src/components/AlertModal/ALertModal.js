import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modalbox';
import {Button} from 'native-base';
class ALertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  open = () => {
    this.refs.alert.open();
  };
  render() {
    return (
      <Modal
        ref={'alert'}
        position={'center'}
        backdrop={true}
        style={{
          height: '20%',
          width: '80%',
          zIndex: 0,
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 0,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'IRANSansMobile_Medium',
              marginTop: '5%',
            }}>
            رمز عبور اشتباه است
          </Text>
          <Button
            onPress={() => this.refs.alert.close()}
            style={{
              justifyContent: 'center',
              borderBottomEndRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: '#00E676',
            }}>
            <Text style={{fontFamily: 'IRANSansMobile_Bold'}}>باشه</Text>
          </Button>
        </View>
      </Modal>
    );
  }
}

export default ALertModal;
