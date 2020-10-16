import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      
      <form className='shipping-from' onSubmit={handleSubmit(onSubmit)}>      

        <input placeholder="Enter Your Name"  defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} />
        {errors.name && <span className='error'>Name is required</span>}

        <input placeholder="Enter Your Email" defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} />
        {errors.email && <span className='error'>email is required</span>}

        <input placeholder="Enter Your Phone" defaultValue={loggedInUser.phone} name="phone" ref={register({ required: true })} />
        {errors.phone && <span className='error'>phone is required</span>}

        <input placeholder="Enter Your Address" name="address" ref={register({ required: true })} />
        {errors.address && <span className='error'>address is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;