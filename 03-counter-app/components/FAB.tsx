
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
    label: string;

    position?: 'left' | 'right';

    //methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export const FAB = ({ label, onLongPress, onPress, position = 'right' }: Props) => {
    return (
        <Pressable
            /* el ({pressed})=> para desestrcuturar el booleano de si está apretado el btn y por ej. poder hacer un ternario para hacer un fade al clicar (como hago despues en pressed ===  true?) */
            style={({ pressed }) => [styles.floatingButton, position === 'right' ? styles.positionRight : styles.positionLeft,
            pressed === true ? { opacity: 0.7 } : { opacity: 1 }
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,

        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3, /* añade una sombra en android */
        shadowRadius: 4
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    }
})
