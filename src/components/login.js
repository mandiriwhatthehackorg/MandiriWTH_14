import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import {StyleSheet, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postLogin,setLogin} from '../actions/auth';

class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
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
    };

    if(user.username == '' || user.password == ''){
      Alert.alert(
        'Oops.. Something Wrong?',
        'Username or Password must be fill!',
        [
          {text: 'OK', onPress: () => console.log("ERR")},
        ]
      );
    }else{
      Actions.Home()
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
            <Item last>
              <Input 
              secureTextEntry={true} placeholder="Password" 
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button full 
            style={styles.lButton}
            onPress={() => this.onSubmit()}
            >
              <Text style={{fontSize: 16, letterSpacing: 0.2}}>LOGIN</Text>
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
    paddingBottom: 10
  }
});


function mapStateToProps(state){
  return{
    users : state.users
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    postLogin:postLogin,
    setLogin:setLogin,
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);