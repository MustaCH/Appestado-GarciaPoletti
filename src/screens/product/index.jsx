import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { PRODUCTS } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.brand}>Marca: {product.brand}</Text>
      </View>
    </ScrollView>
  );
};

export default Product;
