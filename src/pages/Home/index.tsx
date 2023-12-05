import { View } from "react-native";
import { FAB } from "react-native-elements/dist/buttons/FAB";
import { styles } from "./Home";
import { Entypo } from "@expo/vector-icons";
import { HomeHeader } from "../../components/screen/HomeScreen/HomeHeader";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <FAB
        title={<Entypo name="plus" size={24} color="white" />}
        style={styles.fab}
        onPress={() => navigation.navigate("Add")}
        color="#ED7D31"
      />
    </View>
  );
};
