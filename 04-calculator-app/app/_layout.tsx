import { View, Text, Platform } from "react-native"
import { globalStyles } from "@/styles/global-styles";
// import { useFonts } from 'expo-font'
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';
/* para ver la barra de android de debajo en negro */
if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black')
}

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