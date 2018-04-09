import React, {Component} from 'react'
import { StyleSheet, View,Text, TextInput, Button} from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: '',
  };
  placeNameChangedHandler = value=> {
    this.setState({
      placeName: value
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }
    this.props.onPlaceAdded(this.state.placeName)
  };
  render(){
    return (
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome project"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
        <Button title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
    </View>
  );

  }

}
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});

export default PlaceInput;
