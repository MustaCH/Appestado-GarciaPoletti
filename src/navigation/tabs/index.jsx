import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../shop";
import OrdersNavigator from "../orders";
import CartNavigator from "../cart";
import { COLORS } from "../../constants";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Poppins-SemiBold", fontSize: 10 },
        tabBarActiveTintColor: COLORS.terciary,
        tabBarActiveBackgroundColor: COLORS.secondary,
        tabBarInactiveTintColor: "lightgray",
        tabBarInactiveBackgroundColor: COLORS.primary,
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrderTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
