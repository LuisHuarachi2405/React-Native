
  
import React from 'react';
import {  Text, View, Image } from 'react-native';


function DetailsScreen({ route, navigation }) {

    const { titulo } = route.params;
    const { imagen } = route.params;
    const { descripcion } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center' , backgroundColor:'#A649EF' }}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>{titulo}</Text>
        <Image
            style={{ width:280, height: 280, margin:5, borderRadius:18, borderColor:'blue'}}
            source={{
                uri: imagen
            }}
        />  
        <Text style={{color:'white',alignContent:'center',alignItems:'center'}}>{descripcion}</Text>
        
      </View>
    );
  }

export default DetailsScreen;