import React, {Component} from "react";
import { Text, View, Image, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./LogIn.style";
import { AccountContext } from '../../util/Accounts';
import { User } from '../../util/User';



class HomeScreen extends Component{
  static contextType = AccountContext

  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
    this.validateUser = this.validateUser.bind(this);
    this.submit = this.submit.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    // this.setUsers = this.setUsers.bind(this);
    //  this.getUsers = this.getUsers.bind(this);
  }
  componentDidMount() {
    const { getSession } = this.context;
    getSession()
      .then(session => {
        console.log('Signed In:', "user found");
        this.props.navigation.navigate("MainPage");
      }).catch(err => {
        console.log('err:', "no user found");
        //  this.getUsers();
        
      })
      
      
  }

  createAlert = (title, msg) =>
    Alert.alert(
      title,
      msg,
      [
        { text: "OK"}
      ]
    );

  emailOnChange = (event) =>{ this.setState({email: event}); }
  passwordOnChange = (event) =>{ this.setState({password: event}); }




  validateUser = () =>{
    if(this.state.email == "")
      this.createAlert("Error", "Please Type Email");
    else if(this.state.password == "")
      this.createAlert("Error", "Please Type Password");
    else
      this.submit();

  };

  // async getUsers(){
  //   const us = new User();
  //   try{
  //         const user = await us.getUser();
  //         console.log(user);
  //         this.props.navigation.navigate("MainPage");
  //     } catch(error){
  //         console.log(error);
  //     }
  // }

  // setUsers(session){
  //   const us = new User();
  //   us.setUser(JSON.stringify(session));
  // }

  submit = ()=> {
    
    const { authenticate } = this.context;
    authenticate(this.state.email, this.state.password)
      .then(data =>{
        // console.log('Logged in!', data);
        this.props.navigation.navigate("MainPage");
        // this.setUsers(data);
      })
      .catch(err =>{
        this.createAlert("Error", "Email or Password Are Incorrect");
        // console.error('Failed to login!', err);
      })
  };

  render(){
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <View style={{flex:1,alignItems:'flex-end'}}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={()=>this.props.navigation.navigate("CreateAccountScreen")}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
            <TextInput 
              style={styles.TextInput}
              placeholder='Email'
              onChangeText={this.emailOnChange}
              value={this.email}
            />
            <TextInput
              secureTextEntry
              style={styles.TextInput}
              placeholder='Password'
              onChangeText={this.passwordOnChange}
              value={this.password}
            />
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={this.validateUser}
            >
              <Text style={styles.appButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default HomeScreen;