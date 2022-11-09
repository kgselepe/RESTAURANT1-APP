import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput,Image } from 'react-native';

import { Card } from 'react-native-paper';

function CompleteOrder({navigation}) {

   const nextpage = (()=>{
     navigation.navigate('Home')
  })
   const nextpage1 = (()=>{
     navigation.navigate('SignIn')
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



<TouchableOpacity style={styles.button2}>
<Text style={styles.order}  > COMPLETE ORDER</Text>
</TouchableOpacity>

<View style={styles.borders2}>

<View style={styles.borders1}>


<Image style={styles.img1} source={require('../assets/IMAGES/Ellipses.png')}/>  
<Image style={styles.img2} source={require('../assets/IMAGES/Tick.png')}/>  
<Text style={styles.text3}>THANK YOU! </Text>
<Text>Your order has been placed successfully </Text>


<TouchableOpacity style={styles.box1}onPress={nextpage} >
<Text style={styles.text1}>Back to home</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.box2}onPress={nextpage1} >

<Text style={styles.text2}> Done </Text>
</TouchableOpacity>

</View>
</View>

    </View>
  );
}
export default CompleteOrder
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


header: {
    width: 171,
    height: 34,
    marginLeft: 70,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: '#FF4301',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
  },
  logo2:{
    width:30,
    height:32,
    marginTop:-42,
    marginLeft:243,
  },
subHeader:{
  fontSize:20,
  fontWeight:'700',
  textAlign:'center',
  marginTop:80,
  color:'#FF4301C2'
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
  marginRight:150,

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
    marginTop:10,
    color:'#FFFF',
    fontFamily:'Inter',
    fontsize:14,
    fontWeight:'700',
  },
borders2:{
  height:880,
  width:330,
  backgroundColor:'#CCCCBFBf',
  marginTop:-650,

  },
borders1:{
  height:300,
  width:250,
  backgroundColor:'#A39292',
  marginTop:250,
 
  marginLeft:30,
  },

  box1:{
    width:107,
    height:40,
    marginTop:50,
    backgroundColor:'#ffff',
    borderRadius:10,
    marginLeft:10,
  },
box2:{
    width:107,
    height:40,
    marginTop:-40,
    backgroundColor:'#FF4301D8',
    borderRadius:10,
    marginLeft:130,
},
text1:{
  color:'#FF4301',
  fontFamily:'Inter',
  fontWeight:'700',
  fontSize:17,
  marginTop:10,
  textAlign:'center'
},
text2:{
  color:'#ffff',
  fontFamily:'Inter',
  fontWeight:'700',
  fontSize:17,
  marginTop:10,
  textAlign:'center',

},
text3:{
  color:'#FF4301',
  fontFamily:'Comic Neue',
  fontWeight:'700',
  marginTop:50,
  textAlign:'center',
 fontSize:20,
},
img1:{
  marginLeft:80,
},
img2:{
  marginLeft:110,
  marginTop:-70,
},

});
