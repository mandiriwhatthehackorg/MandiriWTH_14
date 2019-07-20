import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Auth extends Component {
  
  render() {

    return (
      <Fragment>
        <View style={styles.body}>
          <Text style={styles.title}>mandiri <Text style={styles.title2}>antrian</Text> </Text>
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Image
              source={require('./img/people.png')}
              style={styles.imgLogin}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <ImageBackground
            source={require('./img/batik.png')}
            style={styles.backgroundImage}
          >
              <Text style={styles.desc1}>Selamat Datang di<Text style={{fontWeight: "bold"}}> mandiri</Text> antrian! </Text>
              <Text style={styles.desc2}>Terdepan dan terpercaya. Tumbuh bersama anda.</Text>

              <View style={styles.vBContainer}>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress = {() => {Actions.Login()}}>
                    <View style = {{backgroundColor: '#67b2e8', 
                    color:'#fff',alignItems: 'center', width:156, height: 44, justifyContent: 'center', borderRadius: 4, marginRight: -20}}
                          >
                        <Text style = {{color: 'white', fontSize: 16, letterSpacing: 0.2,
                        fontFamily: 'Myriad Pro Regular'}}>LOGIN</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress = {() => {Actions.Register()}}>
                    <View style = {{backgroundColor: '#67b2e8', 
                    color:'#fff',alignItems: 'center', width:156, height: 44, justifyContent: 'center', borderRadius: 4, marginLeft: -20}}
                          >
                        <Text style = {{color: 'white', fontSize: 16, letterSpacing: 0.2,fontFamily: 'Myriad Pro Regular'}}>REGISTER</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>

          </ImageBackground>

          

        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#003d79',
    paddingTop: 20,
  },
  title:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Myriad Pro Regular'
  },
  title2:{
    color: '#fff',
    fontSize: 32,
    fontWeight: "normal",
    textAlign: 'center',
    fontFamily: 'Myriad Pro Regular'
  },
  imgLogin:{
    height: 255,
    width: 300,
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 30,
    marginRight: 30,
  },
  body2: {
    flex:1,
    backgroundColor: '#fff',
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },
  desc1: {
    fontSize: 20,
    color: '#003d79',
    fontWeight: "normal",
    textAlign: 'center',
    paddingTop: 30,
    fontFamily: 'Myriad Pro Regular',
  },
  desc2: {
    fontSize: 14,
    color: '#003d79',
    fontWeight: "normal",
    textAlign: 'center',
    paddingTop: 0,
    fontFamily: 'Myriad Pro Regular'
  },
  vBContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute', bottom: 20
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});