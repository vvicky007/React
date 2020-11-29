
import React from 'react';
import { StyleSheet, Text, View , FlatList,TouchableHighlight} from 'react-native';



export default function ComputerFreezes (props) {
  return (
    
    <View style={styles.container}>
     <Text style = {styles.header}>
         Things that might help you
     </Text>
      <Text style = {styles.text}>
          1.Disconnect Your Computer from main power. Wait till 60 sec and reconnect and turn on 
          main power. If it's a laptop take out the battery
      </Text>
      <Text style = {styles.text}>
          2.If it is a desktop computer , Ensure that power switch on back of the computer is in on position
      </Text>

      <TouchableHighlight style = {styles.button} onPress = {()=>props.navigation.navigate('Form')}><Text style={styles.buttontext}
      >Raise a Request</Text></TouchableHighlight>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  
    flex:1,
    backgroundColor:'#FFF',
    padding:10,
    margin:10,
    
  },
  header:{
      fontSize:20,
      fontWeight:'300',
      marginTop:10

  },
  button:{
   alignSelf:'center',
   backgroundColor:'#333',
   borderRadius:5,
   borderWidth:2,
   marginTop:'auto',
   height:45,
   width:'50%',
   
   justifyContent:'center'

  },
  buttontext:{
    fontSize:15,
    color:'#FFF',
    alignSelf:'center'
  },
  text:{
      
      fontSize:15,
      padding:10,
      color:'#333',
      marginLeft:20,
      marginTop:10,
      alignContent:'center',
      justifyContent:'center',
      
  }
});
