// import * as React from "react";
import { Card } from "react-native-elements";
import {GET} from "../../Api/Axios";
import React, { useState } from 'react';
import { View,Image,Text,Button,Share,ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
                                                                          import Form from "../../components/AddCommante/Commante"
  
export default function Detail ({route}){

  const [data, setData] = useState(null);
  const [Local, setlocal] = useState(false);


  const [pharmacier, setPharmacier] = React.useState([]);
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setlocal(true)
    } catch (error) {
      console.error(error);
    }
  };
 
  React.useEffect(() => {
    GET(`pharmacy/get/${id}`)
      .then((response) => {
        setPharmacier(response.data);
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

return (
    <>
   <ScrollView>
  
    <Card containerStyle={{}} wrapperStyle={{}}>
     
      <Card.Title>Pharmacire</Card.Title>
      
      <Button 
      onPress={() => storeData('key',pharmacier)}
        title="partager "
        color={"#87E1C7"}
        accessibilityLabel="Learn more about this purple button"
    />


      <Card.Divider />
        <View style={{ position: "relative",alignItems: "center" }} >
      
          <Image style={{ width: "100%", height: 100 }} resizeMode="contain"source={require("../../../assets/medical.png")} />
          <Text >Pranshu Chittora {id}</Text>
           <Text >{pharmacier.name}</Text>
           <Text >{pharmacier. address}</Text>
           <Text >{pharmacier.latitude}</Text>
           <Text >{pharmacier.longitude}</Text>
           <Text >{pharmacier.opening_hours}</Text>
           <Text >{pharmacier.services}</Text>
          <View >
        
              <Button 
              onPress={() => shareOptions()}
                title="partager "
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