import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: '',
      places: []
  }
// this refers to the class if used the old syntax function()
  // this keyword would not apply to the class App
  placeNameChangedHandler = val => {
    this.setState({
        placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
        return;
    }
    this.setState(prevState => { // prevState as input
        return {
            places: prevState.places.concat(prevState.placeName)
        };
    })
  }

  render() {
      const placesOutput = this.state.places.map((place, i) => (
          <Text key={i}>{place}</Text>
      ));
    return (
      <View style={styles.container}>
          <View style={styles.inputContainer}>
        <TextInput
            placeholder="An Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
              style={styles.placeInput} />

            <Button
              title="Add"
              style={styles.placeButton}
                onPress={this.placeSubmitHandler}/>
          </View>
        <View>
            {placesOutput}
        </View>
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
    inputContainer: {
      width: "100%",
      //flex: 1, // takes full available space
        // this would have taken the entire container
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});
