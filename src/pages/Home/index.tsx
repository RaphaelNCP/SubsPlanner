import { View } from "react-native";
import { Container } from "../../GlobalStyles/Styles";
import { Header } from "../../components/Header";
import { Texto } from "../../components/rootComponents/texts";
import { FAB } from "react-native-elements/dist/buttons/FAB";
import { styles } from "./Home";
import { Entypo } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header />
      <FAB
        title={<Entypo name="plus" size={24} color="white" />}
        style={styles.fab}
        onPress={() => navigation.navigate("Add")}
        color="#ED7D31"
      />
    </View>
  );
};
