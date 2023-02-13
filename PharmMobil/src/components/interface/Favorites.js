import * as React from "react";
import { Card } from "react-native-elements";
import { useState } from "react";
import { GET } from "../../Api/Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, Text, Button, Share, ScrollView } from "react-native";
import Form from "../../components/AddCommante/Commante";
import { Card } from "react-native-elements";

export default function Favorites() {
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const getDataFromStorage = async () => {
    let storage = (await AsyncStorage.getItem("key")) || "[]";
    storage = JSON.parse(storage);

    setData(storage);
  };

  React.useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <View>
      {/* {data.map((key)=>(
    <>
    <Text>{key.name}</Text>
    </>
   ))} */}
      {data.map((e, indx) => (
        <Card key={indx}>
          <Text>{e?.address}</Text>
          <Text>{e?.name}</Text>
          <Text>{e?.services}</Text>
          <Text>{e?.opening_hours}</Text>
        </Card>
      ))}
    </View>
  );
}
