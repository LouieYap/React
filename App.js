/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Week2/>
      </View>

    );
  }


}

class Week2 extends Component {

 constructor(props) {
    super(props);
    this.state = {text: 'Louie', isHidden: true};
  }

  onButtonPress = () => {
    this.setState({
      isHidden: false
           });
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="TextBox"
          onChangeText={(text) => this.setState({text})}/>
            { !this.state.isHidden &&
            <Text style={{padding: 10, fontSize: 42}}>
                            {this.state.text}
            </Text>
            }
          <Button onPress={this.onButtonPress} title="Show Text" color="#841584"/>
      </View>

    );
  }
}





const styles = StyleSheet.create({

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
