import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment-with-locales-es6";
import DateTimePickerModal from "react-native-modal-datetime-picker";

moment.locale("pt-br");
const Calender = () => {
  const currentDate = moment().locale("pt-br");
  const formattedDate = currentDate.format("DD/MM dddd");

  const [dateCurrent, setDateCurrent] = useState(formattedDate);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formateted = moment(date).format("DD/MM dddd");
    setDateCurrent(formateted);
    hideDatePicker();
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={showDatePicker}>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{dateCurrent}</Text>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 10,
    paddingTop: 11,
    flexDirection: "row",
    marginBottom: 25,
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10,
  },
  dateContainer: {
    flex: 1,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  gastoText: {
    fontSize: 15,
  },
  totalContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  totalGastoText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  aReceberText: {
    fontSize: 20,
  },
});

export default Calender;
