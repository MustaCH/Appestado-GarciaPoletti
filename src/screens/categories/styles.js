import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: StatusBar.currentHeight,
  },

  title: {
    fontFamily: "Poppins-Regular",
  },
});
