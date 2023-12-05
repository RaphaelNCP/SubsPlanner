import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./pages/Home";
import { StyleSheet, Text } from "react-native";
import { CustomDrawerContent } from "./components/CustumDrawerContent";
import { Entypo } from "@expo/vector-icons";
import { Texto } from "./components/rootComponents/texts";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: "#fff",
          drawerInactiveBackgroundColor: "#ed7c31b9",
          drawerActiveBackgroundColor: "#ed7c31",
          drawerItemStyle: {
            borderRadius: 8,
          },
          headerStyle: {
            backgroundColor: "#ED7D31",
          },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Entypo
                name="home"
                size={24}
                color="white"
                style={{ marginRight: -16 }}
              />
            ),
            drawerLabel: () => (
              <Texto as="Página Inicial" styles={styles.itemText} />
            ),
          }}
        />
        <Drawer.Screen
          name="Adicionar"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Entypo
                name="plus"
                size={24}
                color="white"
                style={{ marginRight: -16 }}
              />
            ),
            drawerLabel: () => (
              <Texto as="Página Inicial" styles={styles.itemText} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
    color: "#fff",
  },
});
