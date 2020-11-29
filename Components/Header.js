
import React, {useEffect} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login'
import Menu from '../Menu'
import Icon from 'react-native-vector-icons/FontAwesome';


  export default function Header(props) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Bosch</Text>
     {props.visibility?<TouchableHighlight onPress = {()=>navigation.openDrawer()}><Icon reverse name="bars" size={20} color="#FFF" style = {styles.icon} /></TouchableHighlight>:<Text></Text>}
    </View>
  );
}
// export default function Header() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Login} />
      
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#333',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf:'stretch',
    
  },
  text:{
      height:60,
      fontSize:40,
      fontWeight:'600',
      color:'#FFF',
      marginLeft:10,
      marginRight:'auto',
     
      
  },
  
  menu:{
      height:30,
      marginLeft:'auto',
      marginRight:10,
      padding:5
    
  },
  icon:{
    marginRight:20
  }
});
