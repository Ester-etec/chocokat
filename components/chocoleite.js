import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

 export default function Leite (props) {
    return (
        <ScrollView>
      <View style = {styles.container}>
   <Text style = {styles.paragraph}>Chocolate ao leite</Text>
       
       
       <View style = {styles.container}>
         
         <View style = {styles.cxfoto}>
           
           <Image style = {styles.img} resizeMethod='auto' source = {require("../assets/doces/leite.jpg")}/>
           <Text style = {styles.texto}>O chocolate ao leite é produzido a partir da seleção e torrefação dos grãos de cacau. Os grãos são moídos até se transformarem em uma pasta chamada licor de cacau, que é combinada com açúcar e leite em pó. Essa mistura passa por um processo de conchagem para refinar a textura e o sabor. Após a temperagem, o chocolate é moldado, resfriado e embalado. O resultado é um chocolate suave, cremoso e delicioso, pronto para ser desfrutado.</Text>
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