import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ConfigPages from './src/pages/ConfigPages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ConfigPages />;
  }
}

export default App;
