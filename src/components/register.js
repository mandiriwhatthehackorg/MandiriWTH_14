import React, { Component } from 'react';
import { Container, Toast ,Content, Form, Item, Input, Button, Text,Label } from 'native-base';
import {StyleSheet, Alert, View} from 'react-native';

export default class Register extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      phone: "",
      message: "",
      errors: {},
      show: true,
      showToast: false,
    };

  }

  onSubmit() {
    const user = {
      username: this.state.username,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
      phone: this.state.phone,
    };

    if(user.username == '' || user.password == '' 
    || user.repeatPassword == '' || user.phone == '' ){
      Alert.alert(
        'Oops Sorry!',
        'All Field Must Be Fill',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }else{
      this.props.navigation.navigate('RegisterSuccess');
    }
    
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item >
              <Input 
              placeholder="Username" 
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              />
            </Item>

            <Item>
              <Input 
              secureTextEntry={true} placeholder="Password" 
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              />
            </Item>

            <Item>
              <Input 
              secureTextEntry={true} placeholder="Repeat Password" 
              value={this.state.repeatPassword}
              onChangeText={(repeatPassword) => this.setState({repeatPassword})}
              />
            </Item>

            <Item last>
              <Label>+62</Label>
              <Input 
              keyboardType={'numeric'} placeholder="Nomor Telepon" 
              value={this.state.phone}
              onChangeText={(phone) => this.setState({phone})}
              />
            </Item>
            
            <Button 
              style={styles.lButton}
              onPress={() => this.onSubmit()}
              >
                <Text style={{fontSize: 16, letterSpacing: 0.2}}>REGISTER</Text>
              </Button>

          </Form>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  lButton: {
    flex:1,
    backgroundColor: '#67b2e8',
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
  }
});