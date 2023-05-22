import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTouchable: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },

  name: {
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    marginHorizontal: 5,
    color: "#fff",
  },

  price: {
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    color: COLORS.terciary,
  },

  brand: {
    textAlign: "center",
    fontFamily: "Poppins-Light",
    color: COLORS.background,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});
