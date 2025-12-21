import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',

}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0')

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    useEffect(() => {
        //todo: calcular subResultado
        setFormula(number)
    }, [number])

    // const lastOperation = useRef<Operator>()

    const buildNumber = (numberString: string) => {
        //veriricar si ya existe un punto decimal
        if (number.includes('.') && numberString === '.') return

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString)
            }
            //evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }
            // evaluar si es dif de 0, no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            //evitar el 000000.00
            if (numberString === '0' && !number.includes('.')) {
                return
            }
        }

        setNumber(number + numberString)
    }

    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormula('0')

        // lastOperation.current(undefined)
    }


    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        } else {

            setNumber('-' + number)
        }
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-'; // guarda el signo '-', para despues aplicar la logica de si emporalNumber.length > 1, asi entran todos los numeros q son sean 0 
            temporalNumber = number.substring(1) //extrae una cadena  de number desde la posicion 1 hasta el final
        }

        if (temporalNumber.length > 1) { // si el length es mayor a 1, es decir si tiene más de 1 digito
            return setNumber(currentSign + temporalNumber.slice(0, -1)) // quita el último número, conserva el - si existe y finaliza el método.
        }

        setNumber('0') // si solo quedaba un digito, pone el 0
    }

    return {
        //props
        formula,
        number,
        prevNumber,

        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast
    }
}