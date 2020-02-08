import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import { Card, CardItem, Button} from 'native-base';

export default class BasicItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#344955',
          margin: 20,
          borderRadius: 20,
          elevation: 5,
        }}>
        <Card
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#4a6572',
            elevation: 5,
            borderRadius: 20,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          }}>
          <CardItem
            cardBody
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              margin: 10,
              backgroundColor: '#4a6572',
            }}>
            <Text
              style={{
                fontFamily: 'IRANSansMobile_Bold',
                fontSize: 16,
                color: 'white',
              }}>
              نام : {item.first_name}
              {'\n'}
              نام خانوادگی : {item.last_name}
            </Text>
          </CardItem>
          <CardItem
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              backgroundColor: '#4a6572',
            }}>
            <Button
              style={{
                backgroundColor: '#00E676',
                width: 50,
                margin: 10,
                justifyContent: 'center',
                borderRadius: 10,
                elevation: 5,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile_Medium'}}>تماس</Text>
            </Button>
            <Text
              style={{
                textAlign: 'right',
                fontFamily: 'IRANSansMobile',
                fontSize: 16,
                color: 'white',
              }}>
              شماره موبایل : {item.mobile_phone}
            </Text>
          </CardItem>
          <CardItem
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              backgroundColor: '#4a6572',
            }}>
            <Button
              style={{
                backgroundColor: '#ff1744',
                width: 50,
                margin: 10,
                justifyContent: 'center',
                borderRadius: 10,
                elevation: 5,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile_Medium'}}>تماس</Text>
            </Button>
            <Text
              style={{
                textAlign: 'right',
                fontFamily: 'IRANSansMobile',
                fontSize: 16,
                color: 'white',
              }}>
              شماره خانه : {item.home_phone}
            </Text>
          </CardItem>
          <CardItem
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              backgroundColor: '#4a6572',
              borderRadius: 20,
            }}>
            <Button
              style={{
                backgroundColor: '#F9AA33',
                width: 50,
                margin: 10,
                justifyContent: 'center',
                borderRadius: 10,
                elevation: 5,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile_Medium'}}>تماس</Text>
            </Button>
            <Text
              style={{
                textAlign: 'right',
                fontFamily: 'IRANSansMobile',
                fontSize: 16,
                color: 'white',
              }}>
              شماره موبایل پدر : {item.father_mobile}
            </Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}