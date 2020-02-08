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
    };
  }
  searchStudentInput = async text => {
    await this.setState({
      student: text,
    });
    await this.executeSearchMethod();
  };
  executeSearchMethod = async () => {
    const student = await this.state.student;
    await data.map(item => {
      if (item.home_phone.includes(student)) {
        this.setState({
          data: item,
        });
        console.log(this.state.data);
        return;
      }
      if (item.father_mobile.includes(student)) {
        this.setState({
          data: item,
        });
        console.log(this.state.data);
        return;
      }
      if (item.mobile_phone.includes(student)) {
        this.setState({
          data: item,
        });
        console.log(this.state.data);
        return;
      }
      if (item.last_name.includes(student)) {
        this.setState({
          data: item,
        });
        console.log(this.state.data);
        return;
      }
      if (this.state.student === '') {
        this.setState({
          data: [],
        });
        console.log(this.state.data);
        return;
      }
    });
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

        {/* <FlatList
          data={data}
          renderItem={({item, index}) => {
            return <BasicItem item={item} index={index} />;
          }}
          refreshing
        /> */}
      </View>
    );
  }
}

export default Home;
