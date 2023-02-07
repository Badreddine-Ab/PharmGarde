import { useEffect, useState } from "react";
import {StyleSheet,Text,View,Image,Button,ScrollText,ScrollView,} from "react-native";
import { Card } from "react-native-elements";
import {GET} from "../../Api/Axios";
import Icon from 'react-native-vector-icons/Feather'
import Time from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Pharmaciera({navigation}) {
  const [pharmacier, setPharmacier] = useState([]);

  useEffect(() => {
    GET('pharmacy/getAllPharmacier')
      .then((response) => {
        setPharmacier(response.data);
      }).catch(e=>{
        console.log(e.response)
      });
  },[]);
  return (
    <>
    <View style={styles.container}>
    <View style={styles.CardGard}>
        <Card style={styles.cardIcon}>
         <Icon name="sun" size={30}  /> 
        </Card>
        <Card style={styles.cardIcon}>
        <Icon name="moon" size={30}  /> 
        </Card>
        <Card style={styles.cardIcon}>
        <Time name="hours-24" size={30}  /> 
        </Card>
      </View>
       <ScrollView>

      <View >
     
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
                  <Text style={styles.Title}>Pharmacie: {item.data.name}</Text>
                  <Text style={styles.Open}>{item.data.opening_hours}</Text>
                  <Text style={styles.paragraph}>{item.data.address} </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button title="show more" 
                //  textStyle={{ color:"red "}}
                onPress={()=>navigation.navigate('Detail',{ id: item.id })}
                 color={"#87E1C7"}  />
              </View>
            </Card>
          );
        })}
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
   width:240,
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
    width:260,
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
    marginBottom:10,
    textAlign: 'center',
  },
  cardIcon:{
    borderRadius : 10,
    backgroundColor: "white",
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"

  }
});
