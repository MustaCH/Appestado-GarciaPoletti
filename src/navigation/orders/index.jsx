import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../../screens";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.terciary,
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
