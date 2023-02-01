import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View,Image, TextInput,TouchableOpacity,} from "react-native"

export default function Pharmaciera() {
  
  return (
   <View style={styles.container}>
   <Text> Welcom to componnante </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
});