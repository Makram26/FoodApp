import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/components/navigation/Navigation';
// import Home from './src/screens/Home';
// import RestaurantDetails from './src/screens/RestaurantDetails';

export default function App() {
  return (
    // <Home/>
    // <RestaurantDetails/>
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
