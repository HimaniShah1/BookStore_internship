import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Register.css';
import axios from "axios";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";


const Register = () => {
 const dispatch = useDispatch();

 useEffect( () => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log("User details: ",res.data);
  });
 },[]);
  

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'Invalid email address'
     ),
      role: Yup.string().required('Role is required'),
       password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
          'Password must contain at least one lowercase letter, one uppercase letter, and one number'
        ),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async(values) => {
      console.log(values);

      const requestData = {
        userFirstName : values.firstName,
        userLastName : values.lastName,
        userEmail : values.email,
        userRole : values.role,
        userPassword : values.password,
        userConfirmPass : values.confirmPassword,
      }

      //API call to post submit the form

     const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);

     if(res.status === 201){
          console.log(res.data.id);
          toast.success('Registered successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
         
      dispatch(addUser(values));

        }
   

    //   axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    //     if(res.status === 200){
    //       toast.success('Data deleted successfully', {
    //       position: "top-center",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",          
    //     });
    //   }
    // }
    // );

    },
  });

  return (
    <>
    <ToastContainer/>
    <div className="register-container">
      <div className="register-form">
        <h2>Don't have an account? Register here!</h2 >
        <form onSubmit={formik.handleSubmit}>
            
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="error">{formik.errors.lastName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            >
              <option value="">Select a role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {formik.touched.role && formik.errors.role && (
              <div className="error">{formik.errors.role}</div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error">{formik.errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className='register-button'>Register</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;