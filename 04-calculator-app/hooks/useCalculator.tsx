import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',

}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0') // guarda la fórmula completa

    const [number, setNumber] = useState('0') // num actual q el user escribe
    const [prevNumber, setPrevNumber] = useState('0') //guarda el resultado parcial, ref visual


    // Si hay una operación, coloca el número después de ella; si no, la fórmula es solo el número actual
    useEffect(() => {

        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0) // divide el texto en partes y toma la primera parte
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }
        else {
            setFormula(number)
        }

    }, [number])

    // Resultado parcial de la calculadora (ej: al escribir "500 +" se guarda y muestra el 500 debajo)
    useEffect(() => {
        //calcula el resultado parcial
        const subResult = calculateSubResult()
        setPrevNumber(`${subResult}`)
    }, [formula])

    //guarda la ultima operacion y no provoca render
    const lastOperation = useRef<Operator | undefined>(undefined)

    // Calcula el resultado actual antes de guardar el número y empezar a escribir el siguiente
    const setLastNumber = () => {
        calculateResult()

        // Evita números inválidos como "5."
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        }

        setPrevNumber(number)
        //reinicia el num para escribir el siguiente
        setNumber('0')
    }

    const divideOperation = () => {
        //guarda num actual y define la operacion seleccionada
        setLastNumber()
        lastOperation.current = Operator.divide;

    }
    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply;

    }
    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.subtract;

    }
    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add;

    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue)

        //si no hay segundo num, devuelve el primero solo
        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`)
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult()
        setFormula(`${result}`)

        //limpia el estado de la operación después de calcular y mostrar resultado
        lastOperation.current = undefined;
        setPrevNumber('0')
    }

    const buildNumber = (numberString: string) => {
        //veriricar si ya existe un punto decimal
        if (number.includes('.') && numberString === '.') return

        // Controla ceros iniciales
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

    // Resetea toda la calculadora
    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormula('0')

        lastOperation.current = undefined
    }

    // toggle de signo negativo/positivo
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        } else {

            setNumber('-' + number)
        }
    }

    const deleteLast = () => {
        // guarda el signo y el num
        let currentSign = '';
        let temporalNumber = number;


        if (number.includes('-')) {
            currentSign = '-'; // guarda el signo '-', para despues aplicar la logica de si emporalNumber.length > 1, asi entran todos los numeros q son sean 0 y 1 (para poder borrar el ultim num)
            temporalNumber = number.substring(1) //extrae una cadena  de number desde la posicion 1 hasta el final
        }

        if (temporalNumber.length > 1) { // si el length es mayor a 1, es decir si tiene más de 1 digito
            return setNumber(currentSign + temporalNumber.slice(0, -1)) // quita el último número, conserva el - si existe y finaliza el método.
        }

        setNumber('0') // si solo quedaba un digito, pone el 0 directamente
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
        deleteLast,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateSubResult,
        calculateResult
    }
}