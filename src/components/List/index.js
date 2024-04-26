import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Componente de item da lista
const ListItem = ({ local, valor, icon, color }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color={color} />
      </Text>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{local}</Text>
        <Text style={styles.itemValue}>R$ {valor},00</Text>
      </View>
      <View style={styles.trashButton}>
        <Ionicons name={"trash"} size={20} color={"red"} />
      </View>
    </View>
  );
};

// Componente da lista
const List = ({ data }) => {
  const generateRandomColor = () => {
    // Gera um número aleatório entre 0 e 16777215 (cor hexadecimal máxima)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Preenche com zeros à esquerda até que a string tenha 6 caracteres
    return "#" + ("000000" + randomColor).slice(-6);
  };
  const renderItem = ({ item }) => (
    <ListItem
      local={item.local}
      valor={item.valor}
      icon={item.icone}
      color={generateRandomColor()}
    />
  );

  return (
    <View>
      <Text style={styles.title}>Lista de gastos</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  title: {
    ...baseText,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8,
  },
  iconContainer: {
    marginRight: 10,
    padding: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    ...baseText,
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: "bold",
  },
  itemValue: {
    ...baseText,
  },
  trashButton: {
    marginRight: 20,
  },
});

// Estilo base para textos
const baseText = {
  textTransform: "capitalize",
};

export default List;
