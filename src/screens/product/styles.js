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
    textAlign: "left",
    paddingVertical: 15,
    marginHorizontal: 25,
  },

  brand: {
    fontFamily: "Poppins-Light",
    marginBottom: 15,
  },

  image: {
    height: 350,
    width: 350,
    borderRadius: 10,
    marginTop: 15,
  },
});
