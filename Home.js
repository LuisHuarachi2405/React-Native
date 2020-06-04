import React from 'react';
import { Image,StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


const people = [
    {titulo: 'Neymar' ,imagen: 'https://www.fcbarcelonanoticias.com/uploads/s1/11/89/70/7/neymar-psg-celebration.jpeg',descripcion: 'descrpcion Neymajbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr'},
    {titulo: 'CR7' ,imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1E-IcFLhPrXTUViS7Y14rSItWYEDaT3bpbsW29fvHV6t0Qn44&usqp=CAU',descripcion: 'descrpcion CR7'},
    {titulo: 'Messi' ,imagen: 'https://reactnative.dev/img/tiny_logo.png',descripcion: 'descripcion Messi'},
    {titulo: 'Ronaldinho' ,imagen: 'https://reactnative.dev/img/tiny_logo.png',descripcion: 'descripcion Ronaldinho'},
    {titulo: 'Morata' ,imagen: 'https://reactnative.dev/img/tiny_logo.png',descripcion: 'decripcion Morata'},
    {titulo: 'Pogba' ,imagen: 'https://reactnative.dev/img/tiny_logo.png',descripcion: 'decripcion Pogba'},
    {titulo: 'Paolo' ,imagen: 'https://reactnative.dev/img/tiny_logo.png',descripcion: 'decripcion Paolo'},
  ]
  
  
  function HomeScreen({ navigation }) {
    state ={
      data: people,
      text: ''
    }

    renderSeparator = () =>{
        return (
            <View
            style={{height:1, width:'100%' , backgroundColor:'purple'}}>
            </View>
        )
    }
    
  
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        
        <FlatList 
            keyExtractor={(item,index) => index+''}
            data={this.state.data}
            renderItem={({item,index}) => {
              return (
                <TouchableOpacity style={{ flex:1, flexDirection:'row', marginBottom:3, backgroundColor:'#A649EF',borderRadius:13}} 
                onPress={() => navigation.navigate('Details',{
                    titulo: item.titulo,
                    imagen : item.imagen,
                    descripcion: item.descripcion
                })}>
                  
                    <Image
                        style={{ width:80, height: 80, margin:5,borderRadius:10}}
                        source={{
                        uri: item.imagen,
                        }}
                    />
                    <View style={{ flex:1, marginLeft:5 , overflow: 'hidden',}}>
                        <Text style={{fontSize:18, color: 'black', marginLeft:15,   }} >
                            {item.titulo}
                        </Text>
                        <Text style= {{fontSize:16, color:'white'}}>
                            {item.descripcion}
                        </Text>
                    </View>
                </TouchableOpacity>
              )
            }
        }
        // ItemSeparatorComponent={this.renderSeparator}
    
          />       
      </View>
    );
  
    
  }
  
  export default HomeScreen;
  