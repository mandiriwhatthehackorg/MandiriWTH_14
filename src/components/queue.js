import React, { Component} from 'react';
import { Container, Header, Content, Left, Right, Text, Title, Form, Item, Picker, Icon, Label, Input, Button} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Queue extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bank: "",
      message: "",
      selected2: undefined,
      errors: {},
      show: true,
    };

  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {      
    return (
      <Container>
        <Header style={{justifyContent: "center",backgroundColor: '#ffffff'}}>
          <Title style={{fontFamily: 'Myriad Pro Regular', color: '#333333', fontSize:15, position:'absolute',left: 16, top: 18, bottom: 14}}>{(this.props.bank != '')? this.props.bank: "Empty"}</Title>
        </Header>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined,
                  marginLeft: 16,
                  marginRight: 5,
                  marginUp: 16,
                  marginDown: 16,
                }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Customer Service" value="key0"/>
                <Picker.Item label="Teller" value="key1" />
                <Picker.Item label="Complain" value="key2" />
              </Picker>
            </Item>

            <Item>
              <Left>
                <Text style={{
                  fontFamily: 'Myriad Pro Regular',
                  fontSize: 15, 
                  color: "#333333",
                  paddingLeft: 10,
                  paddingTop: 21,
                  paddingBottom: 21,}}>Jam Buka</Text>
              </Left>
              
              <Right>
                <Text style={
                  {
                    fontFamily: 'Myriad Pro Regular',
                    color: "#333333",
                    paddingRight: 15,
                    paddingTop: 21,
                    paddingBottom: 21,
                    fontWeight: "bold"
                  }
                }>08:00 - 15:00</Text>
              </Right>
            </Item>

            <Item>
              <Left>
                <Text style={{
                  fontFamily: 'Myriad Pro Regular',
                  fontSize: 15, 
                  color: "#333333",
                  paddingLeft: 10,
                  paddingTop: 21,
                  paddingBottom: 21,}}>Nomor mengantri saat ini</Text>
              </Left>
              
              <Right>
                  <Image
                  source={require('./img/0.png')}
                  style={{position:"relative",
                  right: 10, bottom: 0,
                  }}
                />
              </Right>
            </Item>

            <Item>
              <Left>
                <Text style={{
                  fontFamily: 'Myriad Pro Regular',
                  fontSize: 15, 
                  color: "#333333",
                  paddingLeft: 10,
                  paddingTop: 21,
                  paddingBottom: 21,}}>Nomor Antrian Tersedia</Text>
              </Left>
              
              <Right>
                <Text style={
                  {
                    fontFamily: 'Myriad Pro Regular',
                    color: "#333333",
                    paddingRight: 15,
                    paddingTop: 21,
                    paddingBottom: 21,
                    fontWeight: "bold"
                  }
                }>11 Slot</Text>
              </Right>
            </Item>

            <Item>
              <Left>
                <Text style={{
                  fontFamily: 'Myriad Pro Regular',
                  fontSize: 15, 
                  color: "#333333",
                  paddingLeft: 10,
                  paddingTop: 21,
                  paddingBottom: 21,}}>Rata - rata lama per antrian</Text>
              </Left>
              
              <Right>
                <Text style={
                  {
                    fontFamily: 'Myriad Pro Regular',
                    color: "#333333",
                    paddingRight: 15,
                    paddingTop: 21,
                    paddingBottom: 21,
                    fontWeight: "bold"
                  }
                }>30 Min</Text>
              </Right>
            </Item>
            <Button 
              block 
              onPress={() => {Actions.QueueSuccess()}}
              style={{backgroundColor:"#67b2e8", 
              borderRadius: 4,
              marginTop: 26,
              marginLeft: 16,
              marginRight: 16,}}>
                  <Text style={{fontFamily: 'Myriad Pro Regular', fontSize:16}}>BUAT</Text>
                </Button>
          </Form>

        </Content>
        
      </Container>
    );
  }
}