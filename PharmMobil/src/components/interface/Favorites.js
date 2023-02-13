import * as React from "react";
import { Card } from "react-native-elements";
import {  useState } from "react";
import {GET} from "../../Api/Axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image,Text,Button,Share,ScrollView } from "react-native";
import Form from "../../components/AddCommante/Commante"
  
export default function Favorites (){
  const [address, setAddress] = useState('');
  const [data, setData] = useState({
    name:"",
    address:"",
    services:"",
    opening_hours:""
  });


  const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      // if (value !== null) {
        // return JSON.parse(value);
        const data = JSON.parse(value);
        console.log(data.name);
        setData(JSON.stringify(value));
      // }
    } catch (error) {
      console.error(error);
    }
    
  };

    React.useEffect(async() => {
    // retrieveData('key')
    const value = await AsyncStorage.getItem('key');
      const datas = JSON.parse(value);
      setData({
      name:datas.name,
      address:datas.address,
      services:datas.services,
      opening_hours:datas.opening_hours
    });

  },[]);
console.log(data)
  return (

   <View>
   {/* {data.map((key)=>(
    <>
    <Text>{key.name}</Text>
    </>
   ))} */}
      <Text>{data.address}</Text> 
      <Text>{data.name}</Text> 
      <Text>{data.services}</Text> 
      <Text>{data.opening_hours}</Text> 

     </View>

  );
}