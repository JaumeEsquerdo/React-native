import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    passowrd: string;
}

export const FormsPage = () => {

    const { register, handleSubmit } = useForm<FormInputs>({ //libreria para logica del form 'react-hook-form'
        defaultValues: {
            email: 'fernando@google.es',
            passowrd: '12321'
        }
    })

    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm)
    }

    // console.log(watch('email'))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Formularios</h3>
            <div className="flex flex-col space-y-2 w-[500px]">
                <input type="email" placeholder="email"
                    className="p-2 border border-gray-600 rounded-xl"
                    {...register('email', { required: true })}

                />
                <input type="password" placeholder="password"
                    className="p-2 border border-gray-600 rounded-xl"
                    {...register('passowrd', { required: true })}
                />
                <button type="submit"
                    className="p-2 text-white bg-blue-500 rounded-xl"
                >
                    Entrar
                </button>
            </div>
        </form>
    );
}
