import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons'


export default function MeusPets() {
  return (
    <View style={styles.container}>
<ScrollView>
      <View style={styles.box}>

        <Image style={styles.img} source={require('../../../img/dog.jpg')}/>
          <View>
            <Text style={styles.nome}>Bethoveen</Text>
            <Text style={styles.raça}>Raça: Husk Siberiano</Text>
          </View>
          <View style={styles.icon}> 
          <Feather name="eye" size={25}/>
            
      </View>

      </View>

      <View style={styles.box}>

        <Image style={styles.img} source={require('../../../img/gato.jpg')}/>
          <View>
            <Text style={styles.nome}>Bethoveen</Text>
            <Text style={styles.raça}>Raça: Husk Siberiano</Text>
          </View>
          <View style={styles.icon}> 
            <Feather name="eye" size={25}/>
          </View>
          
      </View>

     </ScrollView> 

     <TouchableOpacity onPress={() => handleAddPet()}>
                <View style={styles.addPet}>
                  <Text style={styles.addText}> + </Text>
                </View>
      </TouchableOpacity>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  box:{
    margin:10,
    borderRadius:20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  img:{
    width:80,
    height:80,
    borderRadius:50,
    margin:10,  
  },
    nome:{
      paddingTop:20,
      paddingLeft:15,
      fontWeight:'bold',
      fontSize:17,
      color:'#363F5F',
      flexDirection: 'column',
    }, 
    raça:{
      padding:15,
      fontWeight:'bold',
      color:'#969CB3',
    },
    icon:{
      paddingLeft:70,
      paddingTop:35,
    },
    addPet:{
      width:60,
      height:60,
      backgroundColor:'#fff',
      borderRadius:60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#c0c0c0',
      borderWidth:1,
      bottom:10,
      marginHorizontal:340,
    },
    addText:{
      fontWeight:'bold',
      fontSize:25
    },
});
