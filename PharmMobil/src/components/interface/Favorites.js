import * as React from "react";
import { Card } from "react-native-elements";
import {  useState } from "react";
import {GET} from "../../Api/Axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image,Text,Button,Share,ScrollView } from "react-native";
import Form from "../../components/AddCommante/Commante"
  
export default function Favorites (){
  const [address, setAddress] = useState('');
  const [data, setData] = useState();


  const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // return JSON.parse(value);
        setData(value);
      }
    } catch (error) {
      console.error(error);
    }
    
  };

    React.useEffect(() => {
    retrieveData('key')
    console.log(retrieveData('key'));
  },[]);

  return (

   <View>
   
      <Text>{data}</Text> 

     </View>

  );
}