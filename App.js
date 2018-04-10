import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
// import placeImage from './src/assets/14.jpeg'

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {

    this.setState(prevState => {
      return {
        places:prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://cdn0-techbang.pixfs.net/system/excerpt_images/7191/inpage/123c75d334a959384f782977bfba3c4c.png?1317865368"
          }

        })
      };
    });
  };

  placeSelectHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place =>{
          return place.key === key;
        })
      };
    });


  };
  placeDeletedHandler = ()=> {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place=>{
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };
  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectHandler} />
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
});
