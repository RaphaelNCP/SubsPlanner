import { Entypo } from "@expo/vector-icons";
import { Input } from "../../../../styles/Styles";
import { View } from "react-native";
import { Texto } from "../../../common/texts";
import { useState } from "react";

export const AddForm = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  return (
    <View>
      <Input
        autoComplete="name"
        placeholder="Nome da assinatura"
        keyboardType="default"
        onChange={(e) => setName(e.nativeEvent.text)}
        value={name}
      />
      <Input
        placeholder="Valor da assinatura"
        keyboardType="decimal-pad"
        onChange={(e) => setValue(e.nativeEvent.text)}
        value={value}
      />
      <Input
        placeholder="Data de início da assinatura"
        keyboardType="number-pad"
        onChange={(e) => setDate(e.nativeEvent.text)}
        value={date}
      />
    </View>
  );
};
