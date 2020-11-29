import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput , TouchableHighlight} from 'react-native';


export default function Login(props) {
  var [user,setUserID] = useState("");
  var [pass,setPass] = useState("");
  
  return (
    <View style={styles.container}>
      
      <TextInput style = {styles.input} placeholder="User ID" onChange={(text)=>setUserID(text)} onChangeText = {(text)=>setUserID(text)}/>
      <TextInput  style = {styles.input} placeholder="Password" onChange={(text)=>setPass(text)} onChangeText = {(text)=>setPass(text)}  />
      <TouchableHighlight onPress = {()=>props.loginhandler()} style = {styles.button}><Text style = {styles.buttonText} >Login</Text></TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'stretch',
    
    
  },

  button:{
      alignSelf:'stretch',
      borderColor:"#333",
      borderRadius:5,
      marginTop:10,
      marginLeft:70,
      marginRight:70,
      borderWidth:2,
      alignItems:"center",
      justifyContent:'center',
      backgroundColor:'#333',
      padding:5

  },
  buttonText:{
      fontSize:20,
      fontWeight:'300',
      color:'#fff'
  },
  input:{
      marginLeft:70,
      marginRight:70,
      borderColor:"#333",
      marginTop:10,
    
      borderRadius:5,
      borderWidth:1,
      padding:5,
      
  }
});
