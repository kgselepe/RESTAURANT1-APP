import {useState, React} from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput,Image,ScrollView} from 'react-native';

function Menu ({ route, navigation}) {
   const nextpage = (()=>{
     navigation.navigate('Form',{title:route.params.title})
  })
 

return(
   <ScrollView>
<View style={styles.container}>
<View>
<Image style={styles.icon} source={require('../assets/IMAGES/cart1.png')} />

<Text style={styles.header}>AFROLICIOUS</Text>
<Image style={styles.logo2} source={require('../assets/IMAGES/logo.png')} />


<Image style={styles.icon1} source= {route.params.image} />

<Image style={styles.icon4} source={require('../assets/IMAGES/Ellipse.png')} />
<Image style={styles.icon4} source={require('../assets/IMAGES/Heart.png')} />


</View>

<View>
<Text style={styles.subtext} >{route.params.title}</Text>

<Text  style={styles.subtext1}>With two salads:</Text>


<Image style={styles.icon5} source={require('../assets/IMAGES/salad1.jpg')} />

<Text style={styles.subborder1} >Chakalaka</Text>

<Image style={styles.icon6} source={require('../assets/IMAGES/salad2.jpg')} />
<Text  style={styles.subborder2} >Spinach</Text>

<Image style={styles.icon7} source={require('../assets/IMAGES/clock.png')} />
<Text  style={styles.subborder3}  >15 mins</Text>

<Image style={styles.icon8} source={require('../assets/IMAGES/Star.png')} />
<Image style={styles.icon9} source={require('../assets/IMAGES/Star.png')} />
<Image style={styles.icon10} source={require('../assets/IMAGES/Star.png')} />
</View>

<View style={styles.borders1}>
<Image style={styles.icon11} source={require('../assets/IMAGES/Hot.png')} />
<Text style={styles.bordertext2} >HOT SPICY</Text>
<Image style={styles.icon12} source={require('../assets/IMAGES/Pepper.png')} />
<Text style={styles.bordertext3} >MILD</Text>

<Text style={styles.bordertext1}  > Our famous tradition delicious well cooked meal made with our family secrete sauce </Text>
</View>

<View>
<TouchableOpacity style={styles.btn1}><Text style={styles.plus} >+</Text>
</TouchableOpacity>

<Text style={styles.boxesText}>1</Text>
<TouchableOpacity style={styles.btn2}><Text style={styles.substruction}>-</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn3} onPress={nextpage}
>

<Image style={styles.icon13} source={require('../assets/IMAGES/Favorite.png')}/>
 
  <Text style={styles.add}  > ADD TO CART</Text>
</TouchableOpacity>

</View>
 </View> 
  </ScrollView>

 );
}
export default Menu
const styles = StyleSheet.create({
  container: {
flex:1,

  },
icon: {
    width: 20,
    height: 20,
    marginLeft: 310,
    marginTop: 20,

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
  logo2: {
    width: 30,
    height: 32,
    marginTop: -42,
    marginLeft: 243,
  },
  icon1:{
    width:350,
    height:300,
    marginTop:20,
    marginLeft:10,

  },
icon4:{
  width:30,
  height:30,
  marginLeft:300,
  marginTop:-30,
},
  subtext:{
    width:195,
    height:60,
    marginLeft:90,
    fontFamily:'Inter',
    fontWeight:'900', 
    marginTop:20,
    fontSize:20,
  },
  subtext1:{
    width:152,
    height:60,
    fontWeight:'500',
    fontSize:18,
    fontFamily:'Inter',
    marginLeft:100,
    marginTop:-25,
    },
 icon5:{
    width:80,
    height:80,
    borderRadius:100,
    marginLeft:70,
    marginTop:-30,
  },
 icon6:{
    width:80,
    height:80,
    borderRadius:100,
    marginLeft:180,
    marginTop:-110,
  }, 
 subborder1:{
    width:75,
    height:20,
    marginLeft:80,
    marginTop:10,
    fontFamily:'Inter',
    fontWeight:'700',
  },
  subborder2:{
    width:100,
    height:20,
    marginLeft:190,
    marginTop:10,
    fontFamily:'Inter',
    fontWeight:'700',
  },
  icon7:{
  width:40,
  height:30,
  marginLeft:10,
  marginTop:5,
  },
subborder3:{
    width:75,
    height:20,
    marginLeft:50,
    marginTop:-15,
    fontFamily:'Inter',
    fontWeight:'700',
  },
  icon8:{
  width:20,
  height:20,
  marginLeft:120,
  marginTop:-20,
  },
  icon9:{
  width:20,
  height:20,
  marginLeft:150,
  marginTop:-20,
  },
  icon10:{
  width:20,
  height:20,
  marginLeft:180,
  marginTop:-20,
  },
 borders1:{
    width:350,
    height:110,
    backgroundColor:'#FF4301C2',
    borderRadius:10,
    marginTop:5,
  },
  bordertext1:{
    textAlign:'center',
   color:'#ffff',
   fontFamily:'inter',
   marginTop:20,
  },

  icon11:{
  width:30,
  height:30,
  marginLeft:80,
   marginTop:10,
  },
icon12:{
  width:20,
  height:20,
  marginLeft:190,
  marginTop:-28,
  },
  bordertext2:{
   color:'#ffff',
   fontFamily:'inter',
   marginTop:-15,
   marginLeft:110,
  },
bordertext3:{
   color:'#ffff',
   fontFamily:'inter',
   marginTop:-10,
   marginLeft:220,
},
btn1:{
    width:30,
    height:30,
    backgroundColor:'#FF4301C2',
    borderRadius:10,
    marginTop:11,
    marginLeft:100,
 
},
btn2:{
  width:30,
    height:30,
    backgroundColor:'#FF4301C2',
    borderRadius:10,
    marginLeft:180,
    marginTop:-35,
},
boxesText:{
  marginLeft:150,
  marginTop:-30,
  fontWeight:'800',
  fontSize:25,
},
btn3:{
    width:130,
    height:30,
    backgroundColor:'#FF4301D8',
    borderRadius:10,
    marginLeft:100,
    marginTop:15,
},
icon13:{
  width:20,
  height:20,
  marginLeft:10,
  marginTop:5,
},
plus:{
  marginLeft:8,
  marginTop:-5,
  fontWeight:'800',
  fontSize:25,

},
substruction:{
  marginLeft:10,
  marginTop:-5,
  fontWeight:'800',
  fontSize:25,
},
add:{
  marginLeft:30,
  marginTop:-20,
  fontWeight:'700',
  fontSize:14,
  color:'#ffff',

},

  })

