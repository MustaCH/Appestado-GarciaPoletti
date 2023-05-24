import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./style";
import { ORDERS } from "../../constants/data/orders";
import OrderItem from "../../components/order-item";

const Orders = () => {
  const onRemove = (id) => {
    console.warn("id:", id);
  };
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => (
    <OrderItem item={item} onRemove={onRemove} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
};

export default Orders;
