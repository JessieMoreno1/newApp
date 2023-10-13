import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import SchoolEvents from './Screens/SchoolEvents';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="schoolEvents" component={SchoolEvents} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
