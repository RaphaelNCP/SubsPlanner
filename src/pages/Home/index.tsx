import { Button, Text, View } from "react-native";
import { Container } from "../../GlobalStyles/Styles";
import { Texto } from "../../components/rootComponents/texts";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <Container>
      <Texto as="Home" font="Roboto_900Black" />
    </Container>
  );
};
