import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
function App() {

  const buttonClicked = (msg) => {
    alert("Msg: " + msg);
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
          <Image style={{width:100, height:100, }} source={require('./assets/pic.png')}/>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >First Name: </Text>
        <Text style = {styles.text} >Afaq</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Last Name: </Text>
        <Text style = {styles.text} >Malik</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Email: </Text>
        <Text style = {styles.text} >afaqhabib49@gmail.com</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Gender: </Text>
        <Text style = {styles.text} >Male</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Age: </Text>
        <Text style = {styles.text} >21</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Phone no: </Text>
        <Text style = {styles.text} >+923419069819</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Address: </Text>
        <Text style = {styles.text} >Islamabad</Text>
      </View>
      <View style={styles.innerView}>
        <Text style = {styles.text} >Education: </Text>
        <Text style = {styles.text} >BCS Comsats Islamabad</Text>
      </View>
      <View style={styles.innerView}>
        <Button title="Submit" onPress={buttonClicked.bind(this, "Submitted! Wait for our call")}></Button>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20
  },
  innerView: {
    padding: 10,
    flexDirection: 'row'
  },
  text: {
    fontSize : 14,
  },
  image: {
    alignSelf: 'flex-start',
    margin: 10
  }
});
export default App;