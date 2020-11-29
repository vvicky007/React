import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Service from "../Service";
export default function ITServices(props) {
    const menuitems = [
        {
            id:'1',
            name:'Hardware and Devices'
        },
        {
            id:'2',
            name:'Software'
        },
        {
            id:'3',
            name:'Access Permissions'
        },
        {
            id:'4',
            name:'Communication'
        },
        {
            id:'5',
            name:'Chat'
        }
    ]
    function onClickService(text){
       console.log(text)
       props.navigation.navigate(text)
    }
  return (
    
    <View style={styles.container}>
   
     <FlatList style={styles.list} numColumns = {2} data= {menuitems} renderItem={({item})=>{return <Service onclick={onClickService} service = {item} />}}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  
    flex:1,
    alignItems:'center'
    
  },
  button:{
   
  },
  list:{
      alignSelf:'stretch'
  }
});
