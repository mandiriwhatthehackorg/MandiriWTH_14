import React, { Component } from 'react';
import { Container, Toast ,Content, Form, Item, Input, Button, Text,Label } from 'native-base';
import {StyleSheet, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class RegisterSuccess extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
          <View style={styles.viewImg}>
            <Text style={{textAlign: "center", fontSize: 20, color: "#003d79",
            marginTop: 88, marginBottom: 42, fontFamily: 'Myriad Pro Regular'}}>Yay, Akun anda berhasil di buat!</Text>
            <Image
              source={require('./img/success_checklist.png')}
              style={styles.successImg}
            />
            <Text style={{color:'#b6b8ba', lineHeight: 23, fontSize:14, marginTop: 42, marginLeft: 59, marginRight: 59, textAlign: "center", fontFamily: 'Myriad Pro Regular'}}>
              Silahkan login untuk melakukan aktifitas perbankan anda
            </Text>
            
          </View>
          <View style={{
            flex: 1, justifyContent: 'flex-end',
            marginBottom: 36,
            alignContent: "center",
            alignItems: 'center' }}>
            <Button block style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: 'center', 
              backgroundColor:"#67b2e8", 
              borderRadius: 4, 
              position: 'absolute',
              bottom:0, right: 20, left: 20}}
              onPress={() => {Actions.refresh({ key: Actions.Login() });}}
              >
                <Text style={{fontSize: 16, letterSpacing: 0.2, textAlign: "center",fontFamily: 'Myriad Pro Regular'}}>LOGIN</Text>
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