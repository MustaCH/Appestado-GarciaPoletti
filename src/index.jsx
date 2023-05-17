import { Categories } from "./screens";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold"),
  });

  return <Categories />;
}
