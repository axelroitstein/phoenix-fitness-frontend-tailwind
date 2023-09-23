import { useForm } from "react-hook-form"

export default function RegisterForm(){
   const{register, handleSubmit, formState:{errors}} = useForm({criteriaMode:'all'})

   const onSubmit = handleSubmit((data) => {
    console.log(data)})

    console.log(errors)

    return(

        <>
            <form action="" className="min-h-screen grid place-items-center" onSubmit={onSubmit}>
                
                <label htmlFor="firstName"> Nombre: </label>
                <input type="text" {...register('firstName', {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.firstName && <span className="text-red-600 text-xs">Nombre es requerido</span>
                }
                <label htmlFor="lastName"> Apellido: </label>
                <input type="text"  {...register('lastName',  {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.lastName && <span className="text-red-600 text-xs">Apellido es requerido</span>
                }
                <label htmlFor="mail"> Correo electrónico: </label>
                <input type="email"  {...register('mail',  {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.mail && <span className="text-red-600 text-xs">Correo es requerido</span>
                }
                <label htmlFor="password"> Contraseña: </label>
                <input type="password"  {...register('password',  {required:true})}   placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.password && <span className="text-red-600 text-xs">Contraseña es requerida</span>
                }
                <label htmlFor="phone"> Teléfono: </label>
                <input type="number"  {...register('phone',  {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.phone && <span className="text-red-600 text-xs">Teléfono es requerido</span>
                }
                <label htmlFor="address"> Dirección: </label>
                <input type="text"  {...register('address',  {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.address && <span className="text-red-600 text-xs">Dirección es requerida</span>
                }
                <label htmlFor="birthdate"> Fecha de nacimiento: </label>
                <input type="date"  {...register('birthdate', {required:true})} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                {
                    errors.birthdate && <span className="text-red-600 text-xs">Fecha de nacimiento es requerida</span>
                }
                <button type ='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-orange-400 text-black hover:bg-orange-400">Registrate</button>
            </form>
        </>
    )
}