
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Header from './Header'
export default function Service(props) {
    
    return (
    
    <View style={styles.container}>
    <TouchableHighlight style = {styles.button} onPress={()=>props.onclick(props.service.name)}>
     <Text style={styles.text}>{props.service.name}</Text>
     </TouchableHighlight>
     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  
    flex:1,
    backgroundColor:'#333',
    padding:10,
    margin:10,
  },
  button:{
   
  },
  text:{
      
      fontSize:13,
      padding:10,
      color:'#FFF',
      marginLeft:20,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'flex-start'
      
  }
});
