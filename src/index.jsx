import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./styles";
import AppNavigator from "./navigation/index";

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return <AppNavigator />;
}
