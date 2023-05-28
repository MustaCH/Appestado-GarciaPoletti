import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 10,
    margin: 20,
  },

  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: COLORS.secondary,
  },

  image: {
    height: 100,
    width: 100,
  },
});
