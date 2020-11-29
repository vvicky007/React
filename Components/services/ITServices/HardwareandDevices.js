
import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Service from '../../Service'
const menuitems = [
    {
        id:'1',
        name:'Computer Freezes'
    },
    {
        id:'2',
        name:'Computer does not start'
    },
    {
        id:'3',
        name:'Blue Screen Error'
    },
    {
        id:'4',
        name:'Unlock Computer Issue'
    },
    {
        id:'5',
        name:'Other Issues'
    }
]

export default function HardwareandDevices (props) {
  function servicehandler(text){
    props.navigation.navigate(text)
  }
  return (
    
    <View style={styles.container}>
   
     <FlatList data = {menuitems} renderItem = {({item})=><Service onclick = {servicehandler} service = {item}/>} />
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
  button:{
   
  },
  text:{
      
      fontSize:15,
      padding:10,
      color:'#333',
      marginLeft:20,
      alignContent:'center',
      justifyContent:'center',
      
  }
});
