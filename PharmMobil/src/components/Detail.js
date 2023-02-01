import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image,Text,TextInput,Button,Share } from "react-native";
import styles from "../../style";  
export default () => {

  const shareOptions = () => {
    Share.share({
      title: 'Share via',
      message: 'Example message to share',
      url: 'https://example.com'
    })
    
  };

  
  return (
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>Pharmacire</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={require("../../assets/medical.png")} 
        />
        <Text style={styles.Title}
        >Pranshu Chittora</Text>
        <Text  style={{ paddingBottom: 50 }}>Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very</Text>

        <View >
        <Button 
        onPress={() => shareOptions()}
          title="partager "
          color="#21605D"
          accessibilityLabel="Learn more about this purple button"
       />
        </View>
      </View> 

    
    
    </Card>
  
  
  );
}