
export const BasicTypes = () => {
    const name: string = 'Fernando'
    const age: number = 38;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Astro']

    return (
        <>

            < div > Tipos Básicos</div >
            {name} - {age} - {isActive ? 'activo' : 'no activo'}

            <p>{powers.join(', ')}</p>
        </>
    )

}
