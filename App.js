import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({ default: 'native' });

export default function App() {
  return <HomeScreen />;
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
