import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Navigation } from "./Navigation";
import { HistoryNav } from './HistoryNav'

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Главная" component={Navigation} />
      <Tab.Screen options={{ headerShown: false }} name="История" component={HistoryNav} />
    </Tab.Navigator>
  );
};
