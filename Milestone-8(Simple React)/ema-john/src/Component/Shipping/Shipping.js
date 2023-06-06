import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const navigate = useNavigate();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                    navigate('/placeorder');
                }
            })
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