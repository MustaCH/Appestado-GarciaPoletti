import { createNavigateStackNavigator } from "@react-navigation/native";
import { Categories, Product, Products } from "../../screens/index";

const stack = createNavigateStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
