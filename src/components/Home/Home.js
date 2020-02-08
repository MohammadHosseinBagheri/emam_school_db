import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import data from '../../data/data';
import {Item, Input} from 'native-base';

class BasicItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#4a6572', margin: 5}}>
        <Text>{item.id}</Text>
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
      load: null,
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
