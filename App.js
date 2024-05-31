import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// You can import supported modules from npm
// import { Card } from 'react-native-paper';

// or any files within the Snack
// import AssetExample from './components/AssetExample';{id: 1, date: "7.1.2024 3:28", table: 1, dishes: {}, price: 1200}
// import { Main } from './screens/main'
      // <Main/><Navigation />
import {BottomTabNavigator} from './screens/TabNavigation'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
