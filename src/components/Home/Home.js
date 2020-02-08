import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import data from '../../data/data';
import {Item, Input, Card, CardItem, Button} from 'native-base';

class BasicItem extends Component {
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
          elevation:5
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
              borderRadius:20
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: '',
      data: [],
    };
  }
  _listEmptyComponent = () => {
    return <View></View>;
  };
  searchStudentInput = async text => {
    await this.setState({
      student: text,
    });
    //console.log(this.state.student);
    if (this.state.student.length > 3) {
      var testdata = await data.filter(student => {
        //console.log(student)
        if (student.mobile_phone.includes(this.state.student)) {
          return student.mobile_phone.includes(this.state.student);
        }
        if (student.home_phone.includes(this.state.student)) {
          return student.home_phone.includes(this.state.student);
        }
        if (student.father_mobile.includes(this.state.student)) {
          return student.father_mobile.includes(this.state.student);
        }
        if (student.last_name.includes(this.state.student)) {
          return student.last_name.includes(this.state.student);
        }
      });
      await this.setState({
        data: testdata,
      });
    }
    if (this.state.student.length <= 3) {
      this.setState({
        data: [],
      });
    }

    //console.log(testdata);
  };
  renderData = item => {
    const {id} = item;
    for (let i = 0; i < this.state.data.length; i++) {
      return (
        <View style={{margin: 10}}>
          <Text> {id} </Text>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#232F34'}}>
        <View style={{margin: 20}}>
          <Item>
            <Input
              onChangeText={this.searchStudentInput}
              placeholderTextColor="white"
              placeholder="جست و جو"
              style={{fontFamily: 'IRANSansMobile', color: 'white'}}
            />
          </Item>
        </View>
        <FlatList
          data={this.state.data}
          ListEmptyComponent={this._listEmptyComponent}
          renderItem={({item, index}) => {
            return <BasicItem item={item} index={index} />;
          }}
          refreshing
        />
      </View>
    );
  }
}

export default Home;
