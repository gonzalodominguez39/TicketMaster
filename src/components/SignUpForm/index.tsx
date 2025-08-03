
import { useForm,type SubmitHandler } from 'react-hook-form'
import type { InputsForm } from '../../types/useForm'

export const SignUpForm = () => {
  const { register, handleSubmit,reset, formState: { errors },} = useForm<InputsForm>()

   const handleClearForm =()=>{reset()}
  
  const handleSubmitForm: SubmitHandler<InputsForm>= (data:InputsForm) => {
    console.log(data)

  }
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor=''>
        Name
        <input {...register("name",{ required: true })} />
      </label>
      <br />
      <label htmlFor=''>
        age
           <input {...register("age",{ required: true })} />
      </label>
      <br />
      <label htmlFor=''>
        Address
             <input {...register("address",{ required: true })} />     
      </label>
      <br />
      <label htmlFor=''>
        ZipCode
          <input {...register("zipCode",{ required: true })} />
      </label>
      <br />
      <label htmlFor=''>
        Phone
          <input {...register("phone",{ required: true })} />
      </label>
      <br />
      <button
        onClick={handleClearForm}
        type='button'>
        Clear
      </button>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
