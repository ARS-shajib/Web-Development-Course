import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} placeholder='Email' {...register("email", { required: true })} />

                {errors.exampleRequired && <span className='error'>This field is required</span>}

                <input placeholder='Address' defaultValue="" {...register("address")} />
                <input placeholder='City' defaultValue="" {...register("City")} />
                <input placeholder='Phone-number' defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;