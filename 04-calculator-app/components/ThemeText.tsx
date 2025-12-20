import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

/* para q acepte tener numberOfLines de prop se extiene de TextProps nativamente */
interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (

        <Text style={[
            { color: 'white' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult
        ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            {children}
        </Text>

    )
}

export default ThemeText;