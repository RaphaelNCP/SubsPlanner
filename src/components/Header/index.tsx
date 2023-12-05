import { Text, View } from "react-native";
import { styles } from "./Header";
import { Texto } from "../rootComponents/texts";
export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Texto
          as="Bem vindo,"
          styles={styles.textHeader}
          font="Roboto_900Black"
        />
        <Texto
          as="Raphael do Nascimento"
          styles={styles.textHeader}
          font="Roboto_400Regular"
        />
      </View>
      <Texto
        as="Confira suas assinaturas abaixo:"
        styles={styles.textSubHeader}
        font="Roboto_100Thin"
      />
    </View>
  );
};
