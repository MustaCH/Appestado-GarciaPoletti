import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/index";
import { Categories, Product, Products } from "../../screens";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
      <Stack.Screen
        name="HOME"
        component={Categories}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
