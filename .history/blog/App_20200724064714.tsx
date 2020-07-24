import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContext';

export type RootStackParamList = {
  IndexScreen: { title: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IndexScreen">
          <Stack.Screen name="IndexScreen" component={IndexScreen} options={{ title: "Index Screen" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


