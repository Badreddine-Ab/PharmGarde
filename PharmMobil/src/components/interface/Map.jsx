import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    Latitude: 32.243843,
    Longitude: 8.522671,
  });
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{ Latitude: 32.243843, Longitude: 8.522671 }}
        >
          <Marker coordinate={mapRegion} />
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
