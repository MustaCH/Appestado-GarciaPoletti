import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  name: {
    fontFamily: "Poppins-Black",
    fontSize: 20,
    paddingVertical: 20,
  },

  price: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
  },

  description: {
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    paddingVertical: 15,
  },

  brand: {
    fontFamily: "Poppins-Light",
  },

  image: {
    height: 500,
    width: 500,
    borderRadius: 10,
  },
});
