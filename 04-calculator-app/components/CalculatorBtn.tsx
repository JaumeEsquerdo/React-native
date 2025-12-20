import { globalStyles } from "@/styles/global-styles"
import { Pressable, Text } from "react-native"
import { Colors } from "@/constants/theme";

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
    doubleSize?: boolean
}

const CalculatorBtn = ({ label,
    color = Colors.darkGray,
    blackText = false,
    onPress,
    doubleSize = false
}: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80
            })}
            onPress={onPress}
        >

            < Text

                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}> {label}</Text >

        </Pressable>
    )
}

export default CalculatorBtn
