import React from "react";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { Texto } from "../rootComponents/texts";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./CustumDrawerContent";

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (
  props
) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <View style={styles.tileContainer}>
          <Texto
            as="SubsPlanner"
            font="Roboto_900Black"
            styles={styles.headerText}
          />
        </View>
        <Texto as="Raphael do Nascimento" font="Roboto_700Bold" />
        <Texto as="raphael.ofc11@gamil.com" />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
        icon={() => <Entypo name="log-out" size={24} color="black" />}
      />
    </DrawerContentScrollView>
  );
};
