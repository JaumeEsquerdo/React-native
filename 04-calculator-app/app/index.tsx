import CalculatorBtn from '@/components/CalculatorBtn';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    50 x 500000000000000000
                </ThemeText>

                <ThemeText
                    variant='h2'
                    style={globalStyles.subResult}
                >
                    250
                </ThemeText>
            </View>

            {/* filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorBtn label='7' onPress={() => console.log('7')} />
                <CalculatorBtn label='8' onPress={() => console.log('8')} />
                <CalculatorBtn label='9' onPress={() => console.log('9')} />
                <CalculatorBtn label='x' color={Colors.orange} onPress={() => console.log('X')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='4' onPress={() => console.log('4')} />
                <CalculatorBtn label='5' onPress={() => console.log('5')} />
                <CalculatorBtn label='6' onPress={() => console.log('6')} />
                <CalculatorBtn label='-' color={Colors.orange} onPress={() => console.log('-')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='1' onPress={() => console.log('1')} />
                <CalculatorBtn label='2' onPress={() => console.log('2')} />
                <CalculatorBtn label='3' onPress={() => console.log('3')} />
                <CalculatorBtn label='+' color={Colors.orange} onPress={() => console.log('+')} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='0' doubleSize onPress={() => console.log('0')} />
                <CalculatorBtn label='.' onPress={() => console.log('.')} />
                <CalculatorBtn label='=' color={Colors.orange} onPress={() => console.log('=')} />
            </View>
        </View>
    );
}

export default CalculatorApp;