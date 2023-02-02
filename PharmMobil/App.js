import React from 'react';
import Picker from './src/components/interface/Pharmacier';
import Pharmaciera from './src/components/interface/Pharmacier';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from "./src/components/interface/Detail";
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Pharmaciera}
        options={{title: 'Welcome'}}
      />   
      <Stack.Screen
      name="Detail"
      component={Detail}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;