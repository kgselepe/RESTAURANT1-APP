import {useState,React} from 'react';
import { Text, View,StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';


 function SignIn({navigation} ) {

const [email , setEmail] =useState('');
const [password , setPassword] =useState('');

const nextpage = (()=>{
     navigation.navigate('Home')
  })
  const nextpage1 = (()=>{
     navigation.navigate('SignUp')
  })




  return (
    <View style={styles.container} >

   <Card style={styles.box3}>
   <Image style={styles.logo}source={require('../assets/IMAGES/food1.jpg')}/>

    </Card>  
  
  <Card style={styles.box2}>
  <Text style={styles.header}>AFROLICIOUS</Text>
  <Image style={styles.logo2} source={require('../assets/IMAGES/logo.png')} />

<Text style={styles.signinHeader}>SIGN IN</Text>

<Text  style={styles.text}  > Email:</Text>
<TextInput placeholder="Enter Email"style = {styles.input}  onChangeText={(email =>setEmail(email))} />

<Text  style={styles.text}   > Password:</Text>
<TextInput placeholder="Enter Password"style = {styles.input} onChangeText={(password =>setPassword(password))} />
  


<TouchableOpacity style={styles.signin}
onPress={nextpage}
>
<Text style={styles.signinText}   > SIGN IN </Text>

</TouchableOpacity>

<TouchableOpacity style={styles.signup}
 onPress={nextpage1}
>
<Text  style={styles.signupText}> SIGN UP </Text>

</TouchableOpacity>



<Image style={styles.icon1} source={require('../assets/IMAGES/icon1.jpg')} />
<Image style={styles.icon2} source={require('../assets/IMAGES/icon5.jpg')} />
<Image style={styles.icon3} source={require('../assets/IMAGES/icon3.png')} />
  
  
  
  </Card>
    





</View>




    
  );
}
export default SignIn
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,

  },
box3:{
  width:345,
  height:229,
  borderRadius:15,
  backgroundColor:'#FF4301'
  },
 box2: {
    width:300,
    height: 460,
    marginLeft: 25,
    marginTop: -100,
    borderRadius:15,
    backgroundColor:'#FFFFFF',
    shadowColor:' 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);'
  },
   logo:{
    width:171,
    height:121,
    borderRadius:190,
    marginTop:5,
    marginLeft:80,
  },
 header:{
  width: 171,
  height: 34,
  marginLeft: 70,
  marginTop: 21,
  fontFamily:'Comic Neue',
  fontWeight: '700',
  fontSize: 24,
  textAlign:'center',
  color:'#FF4301',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  },
 logo2:{
    width:30,
    height:32,
    marginTop:-45,
    marginLeft:243,
  },
signinHeader:{
  fontSize:15,
  fontWeight:'700',
  textAlign:'center',
  marginTop:20,
  color:'#FF4301C2'
  },
text:{
    marginLeft:19,
    marginTop:20,
    fontWeight:'500',
    fontSize:15,
  },
    input: {
    height: 44,
    width:227,
    margin: 20,
    borderWidth: 1,
    borderColor:'#FF4301C2',
    color:'gray'
  },
  signin:{
    width:100,
    height:40,
    borderRadius:20,
backgroundColor:'#FF4301D8',
    marginTop:30,
    marginLeft:30,
  },
  signinText:{
    textAlign:'center',
    marginTop:10,
    color:'#fff',
    fontWeight:'500',
  },
  signup:{
    width:100,
    height:40,
    borderRadius:20,
    backgroundColor:'#FF4301D8',
    marginLeft:150,
    marginTop:-40,
  },
  signupText:{
    textAlign:'center',
    marginTop:10,
    color:'#fff',
    fontWeight:'500',
  },
  icon1:{
    width:26,
    height:25,
    borderRadius:100,
    marginTop:18,
    marginLeft:90,
  },
  icon2:{
    width:26,
    height:25,
    borderRadius:100,
    marginTop:-25,
    marginLeft:140,
  },
  icon3:{
    width:26,
    height:25,
    borderRadius:100,
    marginTop:-25,
    marginLeft:190,
  },


}); 


