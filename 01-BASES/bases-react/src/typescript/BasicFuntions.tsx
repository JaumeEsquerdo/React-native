const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`
}
/* si la constante no depende de ningun state es mejor dejarlo fuera de los functional components */

export const BasicFuntions = () => {

    return (
        <>
            <div>Funciones</div>
            <span>El resultado de sumar 2+8= {addTwoNumbers(2, 8)}</span>
        </>
    )
}
