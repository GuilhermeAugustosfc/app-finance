import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

const Graphics = () => {
  const widthAndHeight = 250;
  const series = [321, 50];
  const sliceColor = ["#424242", "#f5f5f5"];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Balanco</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.9}
          coverFill={"#FFF"}
        />

        <View style={styles.centerTextContainer}>
          <Text style={styles.centerValue}>R$321,00</Text>
          <Text style={styles.centerText}>Saldo R$50,00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  centerTextContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 340,
  },

  centerValue: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#424242",
  },
  centerText: {
    fontSize: 18,
    color: "#aaaaaa",
  },
});

export default Graphics;
