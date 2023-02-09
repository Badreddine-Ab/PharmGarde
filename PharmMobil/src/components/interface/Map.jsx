import React, { useState ,useEffect} from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import {GET} from "../../Api/Axios"
export default function Map() {
  const [pharmacier, setPharmacier] = useState([]);
  const [region, setRegion] = React.useState({
    latitude: 32.246137,
    longitude: -8.526196,
    latitudeDelta: 0.0375,
    longitudeDelta: 0.03,
  });
  useEffect(() => {
    GET("pharmacy/getAllPharmacier")
      .then((response) => {
        setPharmacier(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={region}>
          <Marker coordinate={{ latitude: 32.247439, longitude: -8.52164 }}>
            <Callout>
              <Text>i'm here</Text>
            </Callout>
          </Marker>
          {pharmacier.map((item) => (
            <Marker coordinate={{ latitude: parseFloat(item.data.latitude), longitude:parseFloat(item.data.longitude)}} pinColor="#87E1C7">
            <Callout>
              <Text>{item.data.name}</Text>
            </Callout>
          </Marker>
          ))}

          
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
