import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Home (props) {

  return (
     <ScrollView>
   <View style = {styles.container}>
<Text style = {styles.paragraph}>ChocoKat</Text>
    
    
    <View style = {styles.container}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Leite')}}>
      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}>Chocolate ao leite </Text>
        <Image style = {styles.img} resizeMethod='auto' source = {require("../assets/doces/leite.jpg")}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('Branco')}}>
      <View style = {styles.cxfoto}>
        <Text style = {styles.texto}>Chocolate Branco</Text>
        <Image style = {styles.img} resizeMethod = 'auto' source = {require("../assets/doces/branco.jpg")}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('Amargo')}}>
      <View style = {styles.cxfoto}>
      <Text style = {styles.texto}>Chocolate Amargo</Text>
        <Image style = {styles.img} resizeMethod = 'auto' source = {require("../assets/doces/amargo.jpg")}/>
      </View>
      </TouchableOpacity>
    </View>
    </View>
  </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#FAE4B5',
    flex: 1,
    padding: 8,
    fontcolor: '#ffb0ce'
    
  },
  paragraph: {
    
    fontWeight: 'bold',
   justifyContent:'center',
   color: '#fc4a8e',
   fontSize: 50
  },
  img: {
    justifyContent:'center',
    width: 200,
    height:200,
    borderRadius: 80
  },
  cxfoto: {
    backgroundColor: '#FFB0CE',
    margin: 25, 
    padding: 50,
    borderRadius: 100
    
  },
texto: {
  fontSize: 30,
  color: '#319EFA',
  backgroundColor: '#FFB0CE',
  textAlign: 'center',
  fontWeight: 'bold'
  
}
});