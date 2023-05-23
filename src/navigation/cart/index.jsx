import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../../screens";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
