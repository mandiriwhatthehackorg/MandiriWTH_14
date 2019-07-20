import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import {StyleSheet, View, Image, Alert,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CancelQueue extends Component {
  
  constructor(props) {
    super(props);
  }

  canceled() {
    Alert.alert(
      'Batalkan Antrian?',
      '',
      [
        {
          text: 'TIDAK',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'YA', onPress: () => {Actions.Home()}},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
          <View style={styles.viewImg}>
            <TouchableOpacity
            style={{
              position:"absolute",
              right: 30,
              top: 20,
              
            }}
            onPress={() => {Actions.Home()}}
            >
              <Image
                source={require('./img/ic_close.png')}
              />
            </TouchableOpacity>
            
            <Text style={{
              fontFamily: 'Myriad Pro Regular',
              fontWeight: "bold",
              textAlign: "center", 
              fontSize: 20, 
              color: "#003d79",
              marginTop: 50, 
              marginBottom: 42}}>ANTRIAN INI DIBATALKAN</Text>

            <View style={{
              marginBottom: 100
            }}>
              <Image
                source={require('./img/cancel.png')}
                style={styles.successImg}
              />
            </View>

            

            <Button block style={{
                backgroundColor:"#67b2e8", 
                borderRadius: 4,
                marginTop: 150,
                marginRight: 15,
                marginLeft: 15,
              }}
              onPress={() => {Actions.refresh({ key: Actions.Home() });}}
            >
              <Text style={{
                  fontWeight: "bold",
                  color: "#fff",
                  borderRadius: 4,
                    fontFamily: 'Myriad Pro Regular',fontSize: 16, letterSpacing: 0.2, textAlign: "center"}}>SELESAI</Text>
             </Button>
            
            

          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewImg:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',    
  },
  successImg:{
    height: 184,
    width: 184,
  }
});