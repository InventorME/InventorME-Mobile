import React, { useState, useEffect} from 'react'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, Image, StatusBar } from "react-native";
import { render } from 'react-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FontAwesome } from '@expo/vector-icons';
import styles from "./CreateAccountScreen.style";




const CreateAccountScreen = (props) => {

    const phoneRegEx = new RegExp('/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-/\s\.]{0,1}[0-9]{4}$/');
    
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [id, setID] = useState()
    const [users, setUsers] = useState([])
    

    

    useEffect(() => {
        const getUsers = async () => {
          const usersFromServer = await fetchUsers()
          setUsers(usersFromServer)
        }
    
        getUsers()
        
      }, [])

      // Fetch Users
      const fetchUsers = async () => {
          const res = await fetch('http://localhost:1234/users')
          const data = await res.json()
          return data
      }

    //   // Fetch User
    //   const fetchUser = async (id) => {
    //     const res = await fetch(`http://19af076a5754.ngrok.io/users/${id}`)
    //     const data = await res.json()
    //     return data
    // }
    // Add User
    const addUser = async (email,firstName,lastName,phoneNum,password) => {
        const tempID = Math.floor(Math.random() * 10000) +1;
        // setID(tempID);
        const updUsers = {email,firstName,lastName,phoneNum,password,id}
        const res = await fetch('http://localhost:1234/users',{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updUsers)

        })
        const data = await res.json()
        setUsers([...users, data])
    }
    // //Delete User
    // const deleteUser = async (id) => {
    //     await fetch(`http://19af076a5754.ngrok.io/isers/${id}`, {
    //         method: 'DELETE'
    //     })
    //     //setUsers(users.filter(user) => user.id != id)
    // }
    return (
      <View style={styles.Page}>
        <View style={styles.arrow}>
                
          <TouchableOpacity
            style={styles.arrowButtonContainer}
            onPress={()=>props.navigation.navigate("HomeScreen")}
          >
            <FontAwesome name='arrow-left' color='#009688' size={45} />
          </TouchableOpacity>
                
        </View>
        <View style={styles.container}>
                
            
          <View style={styles.logo}>
            <Image source={require('../../../assets/appImages/InventorMELogo.png')} />
          </View>
          <View style={styles.child}>
            <Text style={{color: '#009688'}}>Email:</Text>
            <TextInput 
              style={styles.TextInput}
              placeholder='Email'
              onChangeText={(text) => {setEmail(text)}}
              value={email}
            />
          </View>

          <View style={styles.child}>
            <Text style={{color: '#009688'}}>First Name:</Text>
            <TextInput
              style={styles.TextInput}
              placeholder='First Name'
              onChangeText={(text) => { setFirstName(text)}}
              value={firstName}
            />
          </View>

          <View style={styles.child}>
            <Text style={{color: '#009688' }}>Last Name:</Text>
            <TextInput 
              style={styles.TextInput}
              placeholder='Last Name'
              onChangeText={(text) => {setLastName(text)}}
              value={lastName}
            />
          </View>

          <View style={styles.child}>
            <Text style={{color: '#009688'}}>Phone Number:</Text>
            <TextInput   
              style={styles.TextInput}
              placeholder='Phone Number'
              validations={{matchRegexp:phoneRegEx}}
              onChangeText={(text) => {setPhoneNum(text)}}
              value={phoneNum}
            />
          </View>

          <View style={styles.child}>
            <Text style={{color: '#009688'}}>Password:</Text>
            <TextInput    
              secureTextEntry
              style={styles.TextInput}
              placeholder='Password'
              onChangeText={(text) => {setPassword(text)}}
              value={password}
            />
          </View>
          <View style={styles.logo}>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={()=>{{addUser(email,firstName,lastName,phoneNum,password)};props.navigation.navigate("MainPage")}}
            >
              <Text style={styles.appButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View> 

        </View>
      </View> 
    )
    
}

export default CreateAccountScreen;
