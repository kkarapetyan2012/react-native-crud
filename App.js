import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => {
        <Button title='ro right' 
          onPress={() => {navigation.navigate('ManageExpense')}}
        />
      }
    })}
  >
    <BottomTabs.Screen 
      name='RecentExpense' 
      component={RecentExpense} 
      options={{
        title: 'Recent Expense',
        tabBarLabel: 'Recent Expense',
        tabBarActiveTintColor: { backgroundColor: GlobalStyles.colors.primary200},
        tabBarIcon: ({ color, size}) => (
          <Ionicons name='hourglass' color={color} size={size} />
        )
      }}
    />
    <BottomTabs.Screen 
      name='AllExpenses' 
      component={AllExpenses} 
      options={{
        title: 'All',
        tabBarLabel: 'All',
        tabBarActiveTintColor: { backgroundColor: GlobalStyles.colors.primary200},
        tabBarIcon: ({ color, size}) => (
          <Ionicons name='calendar' color={color} size={size} />
        )
       }}
    />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator >

          <Stack.Screen 
            name='ExpenseOverview' 
            component={ExpenseOverview} 
            options={{
              headerShown: false,
            }} />

          <Stack.Screen 
            name='Manage' 
            component={ManageExpense} 
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}