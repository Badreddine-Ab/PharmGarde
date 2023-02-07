import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Card } from "react-native-elements";
import {GET} from "../../Api/Axios";
import { View, Image,Text,Button,Share,ScrollView, TouchableOpacity} from "react-native";
import Form from "../../components/AddCommante/Commante"
import {} from 'react-native';
import styles from "../../../steles/style";  
export default function Detail ({route}){

  const [pharmacier, setPharmacier] = React.useState([]);
  
  React.useEffect(() => {
    GET(`pharmacy/get/${id}`)
      .then((response) => {
        setPharmacier(response.data);
        console.log(response.data);
      }).catch(e=>{
        console.log(e)
      });
  },[]);

  const shareOptions = () => {
    Share.share({
      title: 'Share via',
      message: 'Example message to share',
      url: 'https://example.com'
    })  
  };
  const {id} = route.params;


  const addToFavorites = async (item) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray;
      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      } else {
        favoritesArray = [];
      }
      favoritesArray.push(item);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
   <ScrollView>
  
    <Card containerStyle={{}} wrapperStyle={{}}>
     
      <Card.Title>Pharmacire</Card.Title>

      <TouchableOpacity>
      <Button 
     
        title="partager "
        color={"#87E1C7"}
        accessibilityLabel="Learn more about this purple button"
    />
    </TouchableOpacity>
    
      <Card.Divider />
        <View style={{ position: "relative",alignItems: "center" }} >
      
          <Image style={{ width: "100%", height: 100 }} resizeMode="contain"source={require("../../../assets/medical.png")} />
          <Text >Pranshu Chittora {id}</Text>
           <Text  style={{ paddingBottom: 50 }}>{pharmacier.name}</Text>
         
          <View >

              <Button 
                title="partager"
                color={"#87E1C7"}
                accessibilityLabel="Learn more about this purple button"
              />
          
          </View>
        </View> 
    </Card> 
    <Form/>
    </ScrollView>
    </>
  );
}