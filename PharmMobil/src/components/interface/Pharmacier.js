import { useEffect, useState } from "react";
import {StyleSheet,Text,View,Image,Button,ScrollView,TextInput,} from "react-native";
import { Card } from "react-native-elements";
import { GET, POST } from "../../Api/Axios";
import Icon from "react-native-vector-icons/Feather";
import Time from "react-native-vector-icons/MaterialCommunityIcons";
export default function Pharmaciera({ navigation }) {
  const [pharmacier, setPharmacier] = useState([]);
  const [Data, setData] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
  };
  const filteredData = pharmacier.filter((item) => {
    return item.data.name.toLowerCase().includes(query.toLowerCase());
  });
  const getAllPharmacier = () => {
    GET("pharmacy/getAllPharmacier")
      .then((response) => {
        setPharmacier(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    getAllPharmacier();
  }, []);

  useEffect(() => {
    POST("pharmacy/", { opening_hours: Data.opening_hours })
      .then((response) => {
        setPharmacier(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [Data]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => handleSearch(value)}
          value={query}
          placeholder="What are you looking for?"
          style={styles.input}
        />
        <View style={styles.CardGard}>
          <Card style={styles.cardIcon}>
            <Text name="opening_hours" onPress={() => getAllPharmacier()}>
              <Time name="reload" size={30} />{" "}
            </Text>
          </Card>
          <Card style={styles.cardIcon}>
            <Text
              name="opening_hours"
              onPress={() => setData({ opening_hours: "Jour" })}
            >
              <Icon name="sun" size={30} />{" "}
            </Text>
          </Card>
          <Card style={styles.cardIcon}>
            <Text
              name="opening_hours"
              onPress={() => setData({ opening_hours: "Nuit" })}
            >
              <Time name="weather-night-partly-cloudy" size={30} />
            </Text>
          </Card>
          <Card style={styles.cardIcon}>
            <Text
              name="opening_hours"
              onPress={() => setData({ opening_hours: "24/24" })}
            >
              <Time name="hours-24" size={30} />
            </Text>
          </Card>
        </View>
        <ScrollView>
          <View>
            {filteredData.map((item) => (
              <Card style={styles.Cards} key={item.id} title="Local Modules">
                <View style={styles.Card}>
                  <View>
                    <Image
                      style={styles.Image}
                      source={require("../../../assets/image/medical.png")}
                    />
                  </View>
                  <View>
                    <Text style={styles.Title}>
                      Pharmacie: {item.data.name}
                    </Text>
                    <Text style={styles.Open}>{item.data.opening_hours}</Text>
                    <Text style={styles.paragraph}>{item.data.address} </Text>
                  </View>
                </View>
                <View style={styles.btn}>
                  <Button
                    title="show more"
                    //  textStyle={{ color:"red "}}
                    onPress={() =>
                      navigation.navigate("Detail", { id: item.id })
                    }
                    color={"#87E1C7"}
                  />
                </View>
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#21605D",
    width: 240,
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
    fontSize: 19,
    color: "#1c95b2",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
    width: 260,
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
  CardGard: {
    flexDirection: "row",
    marginBottom: 10,
    textAlign: "center",
  },
  cardIcon: {
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  input: {
    marginTop: 10,
    margin: 27,
    height: 48,
    borderWidth: 1,
    borderRadius: 34,
    padding: 10,
    paddingLeft: 18,
    fontSize: 18,
  },
  Cards: {
    borderRadius:10,
    
  },
});
