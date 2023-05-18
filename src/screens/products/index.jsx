import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="See Product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

export default Products;
