import { View, Text } from "react-native"
import { globalStyles } from "@/styles/global-styles";
// import { useFonts } from 'expo-font'
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  // })
  // if (!loaded) {
  //   return null;
  // }

  return (
    <View style={globalStyles.background}>
      <Text style={{ fontSize: 50, color: 'white' }}>
        Header
      </Text>
      <Slot /> {/* el contenido de este componente que lo muestre en el index más cercano  COMO EL CHILDREN EN REACT*/}
      <StatusBar style='light' />
    </View>
  );
}

export default RootLayout;