import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text, List, ListItem, Thumbnail, Tab, Tabs } from 'native-base';
import {StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HeaderTextExample extends Component {

  goToChooseBank = () =>{
    this.props.navigation.navigate('ChooseBank');
  }

  render() {
    
    return (
      <Container style={{backgroundColor: '#f8f8f8'}}>
        <Header style={styles.containerHeader} >
          <Text style={styles.header}><Text style={styles.headerBold}>mandiri</Text> antrian</Text>
        </Header>

        <View style={{backgroundColor: '#f8f8f8'}}>

          <View style={styles.heading}>

            <View style={{flex: 1, flexDirection: 'row',
          justifyContent:'space-around'}}>
            <View style={styles.box}>
              <Image
                  source={require('./img/pelayanan.png')}
                  style={styles.currency}
                />
              <Text style={{color: "#fff", marginTop: 10,fontFamily: 'Myriad Pro Regular'}}>
                Pelayanan
              </Text>
            </View>

            <View style={styles.box}>
              <Image
                  source={require('./img/kesehatan.png')}
                  style={styles.currency}
                />
              <Text style={{color: "#fff", marginTop: 10, opacity: 0.24,fontFamily: 'Myriad Pro Regular'}}>
                Kesehatan
              </Text>
            </View>

            <View style={styles.box}>
              <Image
                  source={require('./img/kecantikan.png')}
                  style={styles.currency}
                />
              <Text style={{color: "#fff", marginTop: 10, opacity: 0.24,fontFamily: 'Myriad Pro Regular'}}>
                Kecantikan
              </Text>
            </View>

            <View style={styles.box}>
              <Image
                  source={require('./img/restoran.png')}
                  style={styles.currency}
                />
              <Text style={{color: "#fff", marginTop: 10, opacity: 0.24,fontFamily: 'Myriad Pro Regular'}}>
                Restoran
              </Text>
            </View>

            </View>

          </View>
        </View>

        <Tabs>
          <Tab heading="Akan Datang" 
          tabStyle={{backgroundColor:"#003d79"}}
          activeTabStyle={{backgroundColor: "#003d79", color: "#000"}}
          textStyle={{color:"#67b2e8", fontSize:14, fontWeight:'bold',fontFamily: 'Myriad Pro Regular'}}
          activeTextStyle={{color:"#67b2e8", fontSize:14,fontFamily: 'Myriad Pro Regular'}}
          >
              <View style={{marginTop: 20}}>
                  <TouchableOpacity block onPress={() => {this.goToChooseBank()}} style={{marginLeft: 15, marginRight: 15, backgroundColor: '#f8f8f8', justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: "#67b2e8",
                  borderStyle: "dashed"}}>
                    <Text style={{fontFamily: 'Myriad Pro Regular',color: '#67b2e8', textAlign:'center', fontSize: 16, letterSpacing: 0.2, paddingTop: 10, paddingBottom: 10}}>BUAT ANTRIAN BARU</Text>
                  </TouchableOpacity>
                </View>
          </Tab>
          <Tab heading="Berjalan" 
          tabStyle={{backgroundColor:"#003d79"}}
          activeTabStyle={{backgroundColor: "#003d79", color: "#000"}}
          textStyle={{fontFamily: 'Myriad Pro Regular',color:"#67b2e8", fontSize:14, fontWeight:'bold'}}
          activeTextStyle={{fontFamily: 'Myriad Pro Regular',color:"#67b2e8", fontSize:14}}
          >
                <ScrollView style={{marginTop:15}}>
                  <List>
                    <ListItem avatar
                    onPress={() => {Actions.OngoingQueue()}}
                    >
                      <Left>
                        <Thumbnail  source={require('./img/ic_circle_queue_12.png')} />
                      </Left>
                      <Body>
                        <Text>Bank Mandiri Cabang BSD</Text>
                        <Text note>Teller</Text>
                        <Text style={{fontSize:14, color:"#007aff"}}>BERLANGSUNG</Text>
                      </Body>
                    </ListItem>
                  </List>
                </ScrollView>
          </Tab>
          <Tab heading="Selesai" 
          tabStyle={{backgroundColor:"#003d79"}}
          activeTabStyle={{backgroundColor: "#003d79", color: "#000"}}
          textStyle={{color:"#67b2e8", fontSize:14, fontWeight:'bold'}}
          activeTextStyle={{color:"#67b2e8", fontSize:14}}
          >
            <ScrollView style={{marginTop:15}}>
                  <List>

                    <ListItem avatar
                    onPress={() => {Actions.CancelQueue()}}
                    >
                      <Left>
                        <Thumbnail  source={require('./img/ic_circle_queue_12.png')} />
                      </Left>
                      <Body>
                        <Text>Bank Mandiri Cabang BSD</Text>
                        <Text note>Teller</Text>
                        <Text style={{fontFamily: 'Myriad Pro Regular',position: 'relative', bottom: 0, left: 100, fontSize:14, color:"#ff3b30"}}>DIBATALKAN</Text>
                      </Body>

                      <Right style={{position: 'absolute', bottom: 0, left: 75}}>
                       <Text style={{color:"#333333",fontSize:14} }>21 JULI 2019</Text>
                      </Right>
                    </ListItem>
                    
                    <ListItem avatar
                    onPress={() => {Actions.AfterQueue()}}
                    >
                          <Left>
                            <Thumbnail  source={require('./img/ic_circle_queue_6.png')} />
                          </Left>
                          <Body>
                            <Text>Bank Mandiri Cabang Bekasi Timur</Text>
                            <Text note>Teller</Text>
                            <Text style={{fontFamily: 'Myriad Pro Regular',position: 'relative', bottom: 0, left: 100, fontSize:14, color:"#4cd964"}}>SELESAI</Text>
                          </Body>

                          <Right style={{position: 'absolute', bottom: 0, left: 75}}>
                          <Text style={{fontFamily: 'Myriad Pro Regular',color:"#333333",fontSize:14} }>24 JULI 2019</Text>
                          </Right>                      
                      </ListItem>
                  </List>
                </ScrollView>
          </Tab>
        </Tabs>
    

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#003d79',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header:{
    color: "#ffffff",
    fontSize: 24,
    paddingTop: 12,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 'normal',
    fontFamily: 'Myriad Pro Regular'
  },
  headerBold:{
    color: "#ffffff",
    fontSize: 24,
    paddingTop: 12,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 'bold',
    fontFamily: 'Myriad Pro Regular'
  },
  heading:{
    backgroundColor: "#003d79",
    height: 139
  },
  box:{
    height: 82, 
    marginLeft: 5,
    marginRight: 5,
    marginTop: 22,
    alignItems: "center",
  },
  currency:{
    width: 51,
    height: 51,
  },
  btnBox:{
    backgroundColor: "#fff",
    borderWidth: 0,
  },
  bTxtBox:{
    color: '#003d79'
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  },
});