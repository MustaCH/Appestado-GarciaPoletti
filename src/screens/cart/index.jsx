import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { CART } from "../../constants/data/cart";
import { CartItem } from "../../components";

const Cart = () => {
  const TOTAL = 1024100;

  const onRemove = (id) => {
    console.warn("id", id);
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onRemove={onRemove}></CartItem>
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      ></FlatList>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={null}>
          <Text style={styles.buttonConfirmText}>CONFIRM</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${TOTAL}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
