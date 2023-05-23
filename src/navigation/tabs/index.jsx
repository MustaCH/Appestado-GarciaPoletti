import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../shop";
import OrdersNavigator from "../orders";
import CartNavigator from "../cart";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{ tabBarLabel: "Shop" }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={OrdersNavigator}
        options={{ tabBarLabel: "Orders" }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{ tabBarLabel: "Card" }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
