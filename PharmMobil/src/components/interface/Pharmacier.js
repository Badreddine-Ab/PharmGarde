import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollText,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";

import axios from "axios";
export default function Pharmaciera({navigation}) {
  const [pharmacier, setPharmacier] = useState([]);

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:9000/api/pharmacy/getAllPharmacier`)
      .then((response) => {
        setPharmacier(response.data);
      }).catch(e=>{
        console.log(e)
      });
  },[]);
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        {pharmacier.map((item) => {
          return (
            <Card key={item.id} title="Local Modules">
              <View style={styles.Card}>
                <View>
                  <Image
                    style={styles.Image}
                    source={require("../../../assets/image/medical.png")}
                  />
                </View>
                <View>
                  <Text style={styles.Title}>Pharmacie {item.name}</Text>
                  <Text style={styles.Open}>{item.opening_hours}</Text>
                  <Text style={styles.paragraph}>{item.address} </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button title="show more" 
                onPress={()=>navigation.navigate('Detail')} color={"#87E1C7"}  />
              </View>
          
            </Card>
          );
        })}
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 2,
    fontWeight: "bold",
    textAlign: "center",
    color: "#21605D",
  },
  Open: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#21605D",
  },
  Title: {
    marginBottom: 10,
    marginLeft: 1,
    fontSize: 19,
    color: "#1c95b2",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  Card: {
    flexDirection: "row",
  },
  Image: {
    width: 100,
    height: 100,
  },
  btn: {
    justifyContent: "center",
    marginTop: 20,
  },
});