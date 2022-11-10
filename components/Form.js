import { Image, StyleSheet, Text, View,TouchableOpacity,TextInput ,Card} from 'react-native';
import * as React from 'react';
import {db} from '../assets/Firebase';
import { collection, addDoc } from "firebase/firestore"; 

function Form ({navigation , route}){
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [suburb, setSuburb] = React.useState('');

     const Payment =  async () => {
       
        try {
            const docRef = await addDoc(collection(db, "Orders"), {
              name:name,
              number:number,
              street:street,
              suburb:suburb,
              menu:route.params.title,
           
             
            });
            navigation.navigate('CompleteOrder')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
     
      };

    return(
        
        <View style={styles.container}>

<Text style={styles.header1}>AFROLICIOUS</Text>
      <Image
        style={styles.logo2}
        source={require('../assets/IMAGES/logo.png')}
      />

<Text  style={styles.header}>PERSONAL DETAILS</Text>

 <TextInput    placeholder="  enter your fullname " style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          marginLeft: 12,
          margin: 10,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#FF4301D8', borderWidth: 1
        }} onChangeText={text => setName(text)}
        value={name}/>
         
         <TextInput    placeholder="  enter your number" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
        
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#FF4301D8', borderWidth: 1
        }}  onChangeText={text => setNumber(text)}
        value={number}/>
          
         <TextInput    placeholder="  enter your Street" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#FF4301D8', borderWidth: 1
        }} onChangeText={text => setStreet(text)}
        value={street}
          />
       
        <TextInput    placeholder="  enter your Suburb" style={{
          width: 300,
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginLeft: 12,
          overflow: 'hidden',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderColor: '#FF4301D8', borderWidth: 1
        }} onChangeText={text => setSuburb(text)}
        value={suburb}/>

<TouchableOpacity style={styles.btn} onPress={Payment}>

<Text style={styles.btntext}>Add</Text >


</TouchableOpacity>
        </View>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
        backgroundColor:'#fff',
      },
      header1: {
        width: 171,
        height: 34,
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
        marginLeft: 213,
      },

    lable: {
        margin: 15,
        fontSize: 15,
        fontWeight: '500',
      },
      header:{
        width: 300,
        textAlign: 'center',
        fontSize:27,
        fontWeight:'500',
        color:'#FF4301D8',
        margin:20,
      },
      btn: {
        marginTop: 12,
        backgroundColor: '#FF4301D8',
        width: 150,
        height: 40,
        marginLeft: 15,
        paddingTop: 20,
        borderRadius: 50,
        color: 'white'
      },
      btntext: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: -15,
        lineHeight: 29,
        color: '#ffff'
      }
    });