import { createStackNavigator } from '@react-navigation/stack';

import {History} from './History';
import {HistoryInfo} from './HistoryInfo';

const Stack = createStackNavigator();

export const HistoryNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="История" component={History} />
        <Stack.Screen name="HistoryInfo" component={HistoryInfo} />
      </Stack.Navigator>
  )
}
