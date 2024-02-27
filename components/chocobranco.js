import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

export default function Amargo (props) {
    return (
        <ScrollView>
      <View style = {styles.container}>
   <Text style = {styles.paragraph}>Chocolate branco</Text>
       
       
       <View style = {styles.container}>
         
         <View style = {styles.cxfoto}>
           
           <Image style = {styles.img} resizeMethod='auto' source = {require("../assets/doces/branco.jpg")}/>
           <Text style = {styles.texto}>O chocolate branco é feito a partir da manteiga de cacau, leite em pó e açúcar. A manteiga de cacau é extraída dos grãos de cacau e refinada. Em seguida, é misturada com leite em pó e açúcar, aquecida e homogeneizada. Depois de resfriado e endurecido, o chocolate branco está pronto para ser embalado e apreciado por seu sabor doce e cremoso.</Text>
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