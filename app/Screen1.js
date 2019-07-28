import React from 'react';
import { StyleSheet, Button, View,Image  } from 'react-native';
import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
];

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
  renderItem = ({ item, index }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
      // <View style={styles.container}>
      //   <Button
      //     title="Go to Screen 2"
      //     onPress={() => this.props.navigation.navigate('Screen2')
      //     }
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
