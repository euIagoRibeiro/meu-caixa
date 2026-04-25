import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { TransactionsScreen } from '../screens/TransactionsScreen';

export type RootStackParamList = {
  Home: undefined;
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#F7F8FA',
          },
          headerTitleStyle: {
            color: '#111827',
            fontSize: 18,
            fontWeight: '700',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meu Caixa' }} />
        <Stack.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{ title: 'Registros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
