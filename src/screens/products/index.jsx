import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { PRODUCTS } from "../../constants";
import ProductItem from "../../components/product-item";

const Products = ({ navigation, route }) => {
  const category = useSelector((state) => state.categories.selected);

  const onSelected = (item) => {
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
    });
  };

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === category.id
  );

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Products;
