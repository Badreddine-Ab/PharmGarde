import React from "react";
import Pharmaciera from "./src/components/interface/Pharmacier";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./src/components/interface/Detail";
const Stack = createNativeStackNavigator();
// import Picker from './src/components/AddCommante/Commante';
import Nav from "./src/components/Nav";

const App = () => {
  return (
    <>

     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Nav} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
   
  );
};
export default App;
