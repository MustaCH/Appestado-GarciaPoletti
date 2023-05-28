import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Image
            resizeMode="contain"
            source={{ uri: item.image }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
