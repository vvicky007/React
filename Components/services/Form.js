import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableHighlight, Platform ,KeyboardAvoidingView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import Header from '../Header';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
export default function Form(props){
var [tex,settext] = useState('');
const assests = [
  'ABCDEFG','HGADAWR'
]
const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
return (
  
  <SafeAreaView style = {styles.safearea}>
  <Header visibility = {false} />
  <View style = {styles.container}>
  <View style = {{marginTop:10,flexDirection:'row'}}>
  <Text style = {{marginTop:10,fontSize:15}}>Assets</Text>
  <Picker
  style={styles.pickerstyle}
  >
  {assests.map((asset)=><Picker.Item label = {asset} value = {asset} key={asset}/>)}
 
</Picker>
</View>
<View style = {{marginTop:10,flexDirection:'row'}}>
  <Text style = {{marginTop:10,fontSize:15}}>Priority</Text>
  <Picker
  style={styles.pickerstyle}
  >
  <Picker.Item label="High" value="High" key = {1} />
  <Picker.Item label="Low" value="Low" key = {0}/>
 
</Picker>
</View>

  <TouchableHighlight style = {styles.attachmnet} onPress = {()=>pickImage()}><Text style = {styles.buttonText}>Add an attachment</Text></TouchableHighlight>
   
  
 
  <Text style = {{marginTop:10}}>Short Description </Text>
  <TextInput multiline = {true} 
              numberOfLines = {5} 
              onChangeText = {(text)=>settext(text)} value = {tex} 
              style={styles.description} />
  <View style = {styles.buttoncontainer}>
  <TouchableHighlight style = {[styles.requestbutton]} onPress = {()=>{props.navigation.navigate('Success')}}>
  <Text style= {styles.buttonText}>Create Request</Text>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.cancelbutton} onPress = {()=>{props.navigation.navigate('Menu',{screen:'Services'})}}>
  <Text style= {styles.buttonText}>Cancel</Text>
  </TouchableHighlight>
  </View>
  </View>
  </SafeAreaView>
  
)
}
const styles = StyleSheet.create({
  safearea:{
    flex:1
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    marginLeft:20,
    marginRight:20,
    marginBottom:'auto',
    marginTop:'auto'
  },
  description:{
    borderWidth:2,
    borderColor:'#333',
    borderRadius:5,
    padding:5,
    height:150, 
    marginTop:3,
    textAlignVertical: 'top'
  },
  requestbutton:{
    
    marginLeft:5,
    marginRight:'auto',
    height:50,
    backgroundColor:'#333',
    alignSelf:'stretch',
    marginBottom:30,
    borderRadius:5,
    justifyContent:'center',
    alignContent:'center',
    padding:10,
   
  },
  cancelbutton:{
   
    marginRight:5,
    marginLeft:'auto',
    height:50,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#333',
    alignSelf:'stretch',
    marginBottom:30,
    borderRadius:5,
    padding:20
  },
  buttoncontainer:{
    marginTop:'auto',
    flexDirection:'row',
    marginBottom:20
    
  },
  buttonText:{
   textAlign:'center',
   color:'#fff',
   fontSize:15
  },
  pickerstyle:{
    marginLeft:10,
    height:50,
    width:'50%',
    borderRadius:5,
    borderWidth:2
  },
  attachmnet:{
    backgroundColor:'#333',
    alignSelf:'stretch',
    height:50,
    marginBottom:10,
    marginTop:10,
    padding:10
  }
})