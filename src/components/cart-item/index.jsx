import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, Text, View, Image } from "react-native";

import { styles } from "./style";
import { COLORS } from "../../constants";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={"#EE1527"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
