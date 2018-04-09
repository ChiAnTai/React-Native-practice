import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import List from './src/components/List/List'
import PlaceInput from './src/components/Input/Input'

export default class App extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {

    this.setState(prevState => {
      return {
        places:prevState.places.concat(placeName)
      };
    });
  };
  render() {
    // const placeOutput = this.state.places.map((place, i) => (
    //   <ListItem key={i} placeName={place} />
    // ));
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <List places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: "100%"
  }
});
