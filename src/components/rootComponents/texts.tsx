import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_100Thin,
} from "@expo-google-fonts/roboto";
import { Text, TextStyle, View, ViewStyle } from "react-native";

type TextProps = {
  as: string;
  font?:
    | "Roboto_100Thin"
    | "Roboto_400Regular"
    | "Roboto_700Bold"
    | "Roboto_900Black";
  styles?: TextStyle;
} & React.ComponentProps<typeof Text>;

export const Texto = ({
  as,
  font = "Roboto_400Regular",
  styles,
  ...props
}: TextProps) => {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Text {...props} style={[{ fontFamily: font }, styles]}>
      {as}
    </Text>
  );
};
