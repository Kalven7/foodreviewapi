import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from
'@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
const Stack = createNativeStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }} >
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="RegisterUser" component={Register} />
</Stack.Navigator>
</NavigationContainer>
)
}
const styles = StyleSheet.create({
App: {
flex: 1,backgroundColor: 'white',
},
});
export default () => {
return (
<SafeAreaProvider>
<App />
</SafeAreaProvider>
);
};