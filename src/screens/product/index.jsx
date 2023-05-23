import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { PRODUCTS } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params;

  console.warn(route.params);

  const product = PRODUCTS.find((product) => product.id === productId);

  console.warn("ID: " + productId);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://front.dev.malditohard.com.ar/img/migration/PC-GAMER-AMD-RYZEN-3-3200G-A320-8GB-480GB-GABINETE-KIT.webp",
          }}
          style={styles.image}
        />
        <Text style={styles.name}>Product</Text>
        <Text style={styles.price}>$123456</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text style={styles.brand}>Marca: Asus</Text>
      </View>
    </ScrollView>
  );
};

export default Product;
