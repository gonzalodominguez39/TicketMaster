import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./MyInfo.module.css";

type InputsForm = {
  name: string;
  email: string;
  age: number;
};

export const MyInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InputsForm>();

  const handleClearForm = () => {
    reset();
  };
  const USER_DATA = "user_data";
  useEffect(() => {
    try {
      const userData =JSON.parse(localStorage.getItem(USER_DATA)||'');
      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error
        
      )
    }
  }, [])
  const handleSubmitForm: SubmitHandler<InputsForm> = (data: InputsForm) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
            alert("Usuario actualizado");
    } catch (error) {
      alert("Error al guardar los datos");
      console.log(error);
    }
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          {...register("name", { required: true, min: 1, max: 120 })}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          {...register("email", { required: true })}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        age
        <input
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
          className={styles.input}
          type="number"
        />
      </label>

      <button type="submit" className={styles.submitButton}>
        Save
      </button>
    </form>
  );
};
