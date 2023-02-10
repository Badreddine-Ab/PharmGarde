import React, { useState ,useEffect} from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import * as Location from 'expo-location';

import {GET} from "../../Api/Axios"
export default function Map() {
  const [pharmacier, setPharmacier] = useState([]);
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [Latitude, setLatitude] = useState(32.247439);
  const [Longitude, setLongitude] = useState(-8.52164);

  const [region, setRegion] = React.useState({
    latitude: 32.246137,
    longitude: -8.526196,
    latitudeDelta: 0.0375,
    longitudeDelta: 0.03,
  });

  const getPermission = async () => {   

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }


    let Currantlocation = await Location.getCurrentPositionAsync({});
    setLocation(Currantlocation);

    console.log(Currantlocation)

    console.log(Currantlocation.coords.longitude)

    console.log(Currantlocation.coords.latitude)
    
    setLongitude(Currantlocation.coords.longitude)
    setLatitude(Currantlocation.coords.latitude)


  };
  useEffect(() => {
    getPermission()
    GET("pharmacy/getAllPharmacier")
      .then((response) => {
        setPharmacier(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });

  }, []);

  
    let text = JSON.stringify(location);
  

  
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      {/* coordinate={{ latitude: 32.247439, longitude: -8.52164 }} */}
      {/* latitude:location.latitude, longitude: location.longitude  */}
        <MapView style={styles.map} initialRegion={region}>
          <Marker coordinate={{ latitude:Latitude, longitude: Longitude}}>
            <Callout>
              <Text>i'm here</Text>
            </Callout>
          </Marker>
          {pharmacier.map((item) => (
            <Marker key={item.id} coordinate={{ latitude: parseFloat(item.data.latitude), longitude:parseFloat(item.data.longitude)}} pinColor="#87E1C7" >
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
