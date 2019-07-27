import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class TextArea extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable={true}
        maxLength={40}
      />
    );
  }
}

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Type here',
    };
  }
  render() {
    return (
      <View style={{
        backgroundColor: this.state.text,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
      }}
      >
        <TextArea
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
