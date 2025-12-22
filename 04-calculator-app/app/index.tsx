import CalculatorBtn from '@/components/CalculatorBtn';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native'

const CalculatorApp = () => {
    const { formula, buildNumber, clean, toggleSign, deleteLast,
        prevNumber, divideOperation, multiplyOperation, subtractOperation,
        addOperation, calculateResult } = useCalculator()
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    {formula}
                </ThemeText>


                {formula === prevNumber ? (
                    <ThemeText style={globalStyles.subResult} variant='h2'></ThemeText>
                ) : (
                    <ThemeText style={globalStyles.subResult} variant='h2'>{prevNumber}</ThemeText>
                )}

            </View>

            {/* filas de botones */}
            <View style={globalStyles.row}>
                <CalculatorBtn label='C' color={Colors.lightGray} onPress={clean} />
                <CalculatorBtn label='+/-' color={Colors.lightGray} onPress={toggleSign} />
                <CalculatorBtn label='del' color={Colors.lightGray} onPress={deleteLast} />
                <CalculatorBtn label='÷' color={Colors.orange} onPress={divideOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='7' onPress={() => buildNumber('7')} />
                <CalculatorBtn label='8' onPress={() => buildNumber('8')} />
                <CalculatorBtn label='9' onPress={() => buildNumber('9')} />
                <CalculatorBtn label='x' color={Colors.orange} onPress={multiplyOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='4' onPress={() => buildNumber('4')} />
                <CalculatorBtn label='5' onPress={() => buildNumber('5')} />
                <CalculatorBtn label='6' onPress={() => buildNumber('6')} />
                <CalculatorBtn label='-' color={Colors.orange} onPress={subtractOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='1' onPress={() => buildNumber('1')} />
                <CalculatorBtn label='2' onPress={() => buildNumber('2')} />
                <CalculatorBtn label='3' onPress={() => buildNumber('3')} />
                <CalculatorBtn label='+' color={Colors.orange} onPress={addOperation} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorBtn label='0' doubleSize onPress={() => buildNumber('0')} />
                <CalculatorBtn label='.' onPress={() => buildNumber('.')} />
                <CalculatorBtn label='=' color={Colors.orange} onPress={calculateResult} />
            </View>
        </View>
    );
}

export default CalculatorApp;