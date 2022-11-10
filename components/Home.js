import { useState, React } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image,ScrollView} from 'react-native';

function Home({ navigation }) {
  const [menus, setMenus] = useState([
{
      title:'CHICKEN FEETS',
      salad:" two salads" ,
      image: require('../assets/IMAGES/food7.JPG'),
      price:"R60"

    },

    {
      title: 'BEEF TRIPE',
      salad:" two salads" ,
      image: require('../assets/IMAGES/food9.jpg'),
      price:"R80"

    },
    {
      title: 'COW FEETS',
      salad:" two salads" ,
      image: require('../assets/IMAGES/food5.jpg'),
      price:"R70",
    },
    {
      title: 'BRAAI MEAT',
      salad:" two salads" ,
      image: require('../assets/IMAGES/food155.jpg'),
      price:"R150",
    },
  ]);


  const [name, setName] = useState("")


  const nextpage = (menu) => {
    console.log(menu.title);
    navigation.navigate('Menu', {title:menu.title, image:menu.image});
  };

const test =  ((name)=>{
  navigation.navigate("Menu", {name:name})
})
 const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Signin")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ScrollView>
    <View style={styles.container} >
    
     <TouchableOpacity style={styles.logout} onPress={handleSignOut} >
   <Text style={styles.logouttext}>Logout</Text>
    </TouchableOpacity>  


      <Image
        style={styles.icon}
        source={require('../assets/IMAGES/cart1.png')}
      />

      <Text style={styles.header}>AFROLICIOUS</Text>
      <Image
        style={styles.logo2}
        source={require('../assets/IMAGES/logo.png')}
      />

      <Image
        style={styles.icon1}
        source={require('../assets/IMAGES/food15.jpg')}
      />

      <TouchableOpacity style={styles.border1}>
        <Text style={styles.subborder}> samp </Text>
      </TouchableOpacity>

      <Image
        style={styles.icon2}
        source={require('../assets/IMAGES/food14.jpg')}
      />
      <TouchableOpacity style={styles.border2}>
        <Text style={styles.subborder}> vetkoek </Text>
      </TouchableOpacity>

      <Image
        style={styles.icon3}
             source={require('../assets/IMAGES/food13.jpg')}/>

      <TouchableOpacity style={styles.border3}>
        <Text style={styles.subborder}> dumpling </Text>
      </TouchableOpacity>

      <Image
        style={styles.icon4}
        source={require('../assets/IMAGES/food19.jpg')}
      />

      <TouchableOpacity style={styles.border4}>
        <Text style={styles.subborder}> pap </Text>
      </TouchableOpacity>
      <Text style={styles.head}> Choose your dish:</Text>


{menus.map ((menu)=>(
<View style={styles.borders1} >
        <Image
          style={styles.meun1}
          source={menu.image}
        />

        <Text style={styles.subtext}> {menu.title}</Text>
        <Text style={styles.subtext1}>With{menu.salad}</Text>

        <TouchableOpacity style={styles.boxes1}    onPress={()=>nextpage(menu)} >
          <Text style={styles.subborder2} >
            {' '}
            {menu.price}
          </Text>
        </TouchableOpacity>
      </View>
))}
      
    </View>
    </ScrollView>
  );
}
export default Home
const styles = StyleSheet.create({
  container: {
flex:1,

  },
    logout:{
    width:50,
    height:20,
    backgroundColor:'#FF4301',
    marginTop:10,
    borderRadius:35,
  
  },
  logouttext:{
    color:'#FFFFFF',
    fontWeight: '500',
    textAlign:'center',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 310,
    marginTop: -20,
 
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
  icon1: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 5,
  },
  icon2: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -110,
    marginLeft: 100,
  },
  icon3: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -100,
    marginLeft: 190,
  },
  icon4: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -100,
    marginLeft: 280,
  },
  border1: {
    width: 65,
    height: 20,
    backgroundColor: '#FF4301D8',
    marginLeft: 10,
    margin: 10,
  },
  border2: {
    width: 65,
    height: 20,
    backgroundColor: '#FF4301D8',
    marginLeft: 100,
    marginTop: 10,
  },
  border3: {
    width: 65,
    height: 20,
    backgroundColor: '#FF4301D8',
    marginLeft: 190,
    marginTop: 10,
  },
  border4: {
    width: 65,
    height: 20,
    backgroundColor: '#FF4301D8',
    marginLeft: 280,
    marginTop: 10,
  },
  subborder: {
    color: '#ffff',
    fontWeight: '450',
  },
  head: {
    width: 177,
    height: 24,
    marginLeft: 100,
    marginTop: 10,
    fontFamily: 'inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
  },
  borders1: {
    width: 300,
    height: 100,
  },

  meun1: {
    width: 100,
    height: 100,
    backgroundColor: '#ffff',
    marginLeft: 10,
    marginTop: 10,
  },
  boxes1: {
    width: 65,
    height: 25,
    backgroundColor: '#FF4301D8',
    marginLeft: 280,
    marginTop: -50,
    borderRadius: 35,
  },
  subtext: {
    marginTop: -80,
    marginLeft: 118,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  subtext1: {
    width: 105,
    height: 20,
    marginTop: -0,
    marginLeft: 120,
  },
  subborder2: {
    color: '#ffff',
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: 5,
  },
});