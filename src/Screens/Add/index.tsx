import { View } from "react-native";
import { Texto } from "../../components/common/texts";
import { Container } from "../../styles/Styles";
import { styles } from "./Add";
import { Divider } from "react-native-elements";
import { AddForm } from "../../components/screen/AddScreen/AddForm";

export const AddScreen = () => {
  return (
    <Container>
      <View style={styles.header}>
        <Texto
          as="Adicionar assinatura"
          font="Roboto_900Black"
          styles={styles.title}
        />
        <Texto
          as="Preencha as informações abaixo para adicionar uma assinatura"
          font="Roboto_400Regular"
          styles={styles.subtitle}
        />
      </View>
      <Divider color="#4F4A45" />
      <AddForm />
    </Container>
  );
};
