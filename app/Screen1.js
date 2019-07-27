import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._initBoard(props);
  }
  _initBoard = (props) => {
    console.log('M1 initboard');
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyWq23fOlwHHwYYA' }).base('appeczd30RiFQVm5h');
    base('Table 1').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  }

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
