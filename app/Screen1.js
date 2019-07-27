import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Screen1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go to Screen 2"
          onPress={() => this.props.navigation.navigate('Screen2')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
