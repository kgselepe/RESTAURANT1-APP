import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput,Image } from 'react-native';

import { Card } from 'react-native-paper';

function Payment ({navigation}) {

   const nextpage = (()=>{
     navigation.navigate('CompleteOrder')
  })  
   
   

  return (
    <View style={styles.container}>
    
<Text style={styles.header}>AFROLICIOUS</Text>
<Image style={styles.logo2} source={require('../assets/IMAGES/logo.png')} />



<Text style={styles.subHeader}>PAYMENT</Text>

<View style={styles.borders} > 

<Text style={styles.subHeader2}>Order details:</Text>
</View>

<Text style={styles.totals}> TOTAL:</Text>

<TouchableOpacity style={styles.button1}>
<TextInput/>
</TouchableOpacity>



<TouchableOpacity style={styles.button2}
onPress={nextpage}>

<Image style={styles.icon13} source={require('../assets/IMAGES/Favorite.png')}/>
<Text style={styles.order}  > COMPLETE ORDER</Text>
</TouchableOpacity>




    </View>
  );
}
export default Payment
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
header:{
  width: 171,
  height: 34,
  marginLeft: 70,
  marginTop:30,
  fontFamily:'Comic Neue',
  fontWeight: '700',
  fontSize: 24,
  textAlign:'center',
  color:'#FF4301',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  },
  logo2:{
    width: 30,
    height:32,
    marginTop:-45,
    marginLeft:243,
  },
subHeader:{
  fontSize:20,
  fontWeight:'700',
  textAlign:'center',
  marginTop:80,
  color:'#FF4301C2',
  marginRight:80,
  }, 
borders:{
  height:250,
  width:250,
  backgroundColor:'#FF430153',
  marginTop:10,
  marginLeft:30,
},
subHeader2:{
  fontSize:15,
  fontWeight:'700',
  textAlign:'center',
  marginTop:10,
  color:'#FF4301C2'

  },

totals:{
  fontSize:20,
  fontWeight:'700',
  textAlign:'center',
  marginTop:50,
  color:'#FF4301C2',
  marginRight:220,

  },
  button1:{
    width:135,
    height:40,
    marginTop:-40,
    backgroundColor:'#FF430153',
    borderRadius:10,
    marginLeft:140,
  
  },
  button2:{
    width:185,
    height:40,
    marginTop:40,
    backgroundColor:'#FF4301C2',
    borderRadius:10,
    marginLeft:70,
  },
  order:{
    marginLeft:30,
    marginTop:-15,
    color:'#FFFF',
    fontFamily:'Inter',
    fontsize:14,
    fontWeight:'700',
  },
  icon13:{
  width:20,
  height:20,
  marginLeft:10,
  marginTop:10,
},

});
