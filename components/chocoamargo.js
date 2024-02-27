import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default function Amargo (props) {
    return (
        <ScrollView>
      <View style = {styles.container}>
   <Text style = {styles.paragraph}>Chocolate amargo</Text>
       
       
       <View style = {styles.container}>
         
         <View style = {styles.cxfoto}>
           
           <Image style = {styles.img} resizeMethod='auto' source = {require("../assets/doces/amargo.jpg")}/>
           <Text style = {styles.texto}>O chocolate amargo é produzido a partir da seleção e torrefação dos grãos de cacau. Os grãos são moídos em uma pasta chamada licor de cacau, que é combinada com uma quantidade menor de açúcar. Após a conchagem para refinar a textura, o chocolate é temperado, moldado, resfriado e embalado. O resultado é um chocolate intenso, com menos doçura e apreciado por seu sabor rico e sofisticado.</Text>
         </View>
   
         <TouchableOpacity onPress={()=>{props.navigation.navigate('Home')}}>
             <View style={styles.botao}>
                <Text style={styles.txtbotao}>Home</Text>
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
      fontSize: 50,
      textAlign: 'center'
     },
     img: {
       justifyContent:'center',
       width: 200,
       height:200,
       borderRadius: 80
     },
     cxfoto: {
       backgroundColor: '#FFB0CE',
       margin: 20,
       marginBottom: 25, 
       padding: 50,
       borderRadius: 100
       
     },
   texto: {
    marginTop: 25,
     fontSize: 20,
     color: '#319EFA',
     backgroundColor: '#FFB0CE',
     textAlign: 'center',
     fontWeight: 'bold'
   },

   botao: {
    padding: 20,
    backgroundColor: '#ffb0ce',
    borderRadius: 70,
    margin: 25
   },

   txtbotao: {
    color: '#6e4afc',
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold'
   }
   });