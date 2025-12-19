import { View, Text } from 'react-native'
import { Slot } from 'expo-router';

const CalculatorApp = () => {
    return (
        <View>
            <Text style={{ fontSize: 50 }}>
                Calculator app
            </Text>
            <Slot /> {/* el contenido de este componente que lo muestre en el index más cercano */}
        </View>
    );
}

export default CalculatorApp;