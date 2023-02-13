// import * as React from "react";
import { Card } from "react-native-elements";
import { GET } from "../../Api/Axios";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Share,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Form from "../../components/AddCommante/Commante";
import Icon from "react-native-vector-icons/AntDesign";
import Favorite from "react-native-vector-icons/MaterialIcons";

export default function Detail({ route }) {
  const [data, setData] = useState(null);
  const [Local, setlocal] = useState(false);

  const [pharmacier, setPharmacier] = React.useState([]);
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setlocal(true);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    GET(`pharmacy/get/${id}`)
      .then((response) => {
        setPharmacier(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const shareOptions = () => {
    Share.share({
      title: "Share via",
      message: "Example message to share",
      url: "https://example.com",
    });
  };

  const { id } = route.params;

  return (
    <>
      <ScrollView>
        <Card containerStyle={{}} wrapperStyle={{}}>
          <Card.Title>Pharmacire</Card.Title>

         

          <Card.Divider />
          <View style={{ position: "relative", alignItems: "center" }}>
            <Image
              style={{ width: "100%", height: 100 }}
              resizeMode="contain"
              source={require("../../../assets/medical.png")}
            />
            <Text>name:{pharmacier.name}</Text>
            <Text>address:{pharmacier.address}</Text>

            <Text>{pharmacier.opening_hours}</Text>
            <Text>services:{pharmacier.services}</Text>
            <View>
            <View style={styles.CardGard}>
              <Text style={styles.background} onPress={() => shareOptions()}>
                <Icon name="sharealt" size={30} />
              </Text>
              <Text style={styles.background} onPress={() => storeData("key", pharmacier)}>
                <Favorite name="favorite" size={30} />
              </Text>
              </View>
            </View>
          </View>
        </Card>
        <Form />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    color: "#87E1C7",
  },
  CardGard: {
    flexDirection: "row",
    marginBottom: 10,
    textAlign: "center",
  },
});
