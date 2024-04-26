import React from "react";
import { View } from "react-native";
import List from "../components/List";
import Calender from "../components/Calender";
import MicrophoneComponent from "../components/Microphone";

const ExpanseList = () => {
  const data = {
    gastos: [
      { local: "farmacia", valor: 100, icone: "accessibility" },
      { local: "sorvete", valor: 10, icone: "accessibility-outline" },
      { local: "internet", valor: 100, icone: "accessibility-sharp" },
      { local: "supermercado", valor: 50, icone: "add" },
      { local: "restaurante", valor: 80, icone: "add-circle" },
      { local: "transporte", valor: 30, icone: "add-circle-outline" },
      { local: "academia", valor: 70, icone: "add-circle-sharp" },
      { local: "lazer", valor: 20, icone: "add-outline" },
      { local: "roupas", valor: 90, icone: "add-sharp" },
      { local: "cinema", valor: 40, icone: "airplane" },
      { local: "livraria", valor: 60, icone: "airplane-outline" },
      { local: "bar", valor: 25, icone: "airplane-sharp" },
      { local: "gasolina", valor: 55, icone: "alarm" },
      { local: "aluguel", valor: 200, icone: "alarm-outline" },
      { local: "telefone", valor: 35, icone: "alarm-sharp" },
      { local: "eletronicos", valor: 120, icone: "albums" },
      { local: "presentes", valor: 45, icone: "albums-outline" },
      { local: "cafe", valor: 15, icone: "albums-sharp" },
      { local: "seguro", valor: 75, icone: "alert" },
      { local: "taxi", valor: 65, icone: "alert-circle" },
    ],
  };

  return (
    <View
      style={{
        height: "80%",
      }}
    >
      <Calender />
      <MicrophoneComponent />
      <List data={data.gastos} />
    </View>
  );
};

export default ExpanseList;
