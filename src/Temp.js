import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("First Name", {required: true, pattern: /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="Last Name" {...register("Last Name", {required: true, pattern: /^[A-Za-z]+$/i})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 8, pattern: /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'<>,.?\/\\|~-]*$/i})} />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: true, maxLength: 8, pattern: /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'<>,.?\/\\|~-]*$/i})} />

      <input type="submit" />
    </form>
  );
}