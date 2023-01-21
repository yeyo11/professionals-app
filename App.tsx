import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { RootStackParamList } from './src/models/navigation';
import ProfessionalDetailsScreen from './src/screens/ProfessionalDetailsScreen';
import { ThemeProvider } from '@rneui/themed';
import { customTheme } from './src/lib/theme';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ThemeProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Perfil" component={ProfessionalDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;