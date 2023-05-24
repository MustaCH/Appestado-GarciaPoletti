import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  footerContainer: {
    backgroundColor: COLORS.secondary,
    borderTopWidth: 4,
    borderTopColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttonConfirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: COLORS.terciary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,

    elevation: 10,
  },

  buttonConfirmText: {
    color: COLORS.terciary,
    fontFamily: "Poppins-Bold",
  },

  totalContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalText: {
    color: COLORS.terciary,
    fontFamily: "Poppins-Regular",
  },

  totalPrice: {
    color: COLORS.terciary,
    fontFamily: "Poppins-Bold",
  },
});
