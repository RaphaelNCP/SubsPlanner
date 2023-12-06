import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { CustomDrawerContent } from "./CustumDrawerContent";
import { HomeScreen } from "../Screens/Home";
import { Entypo } from "@expo/vector-icons";
import { Texto } from "../components/common/texts";
import { AddScreen } from "../Screens/Add";

export const AppNavigator = () => {
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
            title: "Página Inicial",
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
          component={AddScreen}
          options={{
            title: "Adcionar",
            drawerIcon: () => (
              <Entypo
                name="plus"
                size={24}
                color="white"
                style={{ marginRight: -16 }}
              />
            ),
            drawerLabel: () => (
              <Texto as="Adicionar assinatura" styles={styles.itemText} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
    color: "#fff",
  },
});
