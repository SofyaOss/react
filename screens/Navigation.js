import { createStackNavigator } from '@react-navigation/stack';

import {Main} from './main';
import {Edit} from './tableEdit';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Столы" component={Main} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
  )
}
