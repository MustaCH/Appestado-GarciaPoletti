import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: 180,
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  productImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },

  headerContainer: {
    flex: 1,

    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },

  quantity: {
    fontSize: 13,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 1,
  },
  price: {
    fontSize: 13,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 1,
  },
});
