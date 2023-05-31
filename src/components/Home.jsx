import React from 'react'
import Hero from './img/hero.jpg'
import "../../src/App.css"
import Sparkle from './img/sparkle.png'
import { useFormik } from 'formik'
import {validationSchema} from '../../src/schema/index.jsx'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Home = () => {

    const initialvalues = {
      email:'',
      password:'',
      confirmPassword:''
    }

    const onSubmit =  (values,action) => {
      console.log('Form data', values)
      toast.success('Form Submitted Successfully')
      
      action.resetForm()

    }

  const {values,errors,touched, handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialvalues,
    onSubmit: onSubmit,
    validationSchema: validationSchema

  })

  return (
    <div className='flex w-screen h-screen bg-[#eef2f5]'>
      <form onSubmit={handleSubmit}>
         
         <div className='container bg-white flex justify-center items-center mx-32 my-10 rounded-xl'  >
                <div className='modal-left flex-1 flex flex-col gap-2 justify-start items-start'>
                    <img src={Sparkle} alt="" className=' w-24 h-24 ml-6' />
                    <h1 className=' text-3xl font-medium text-black mx-8'>Back to your <span className=' text-5xl font-bold text-black'>digital life</span></h1>
                    <p className=' text-xl text-[#979696] mx-8'>Choose one of the options to go.</p>
                        <input className="inputBox"
                        type="email"
                        placeholder="Email Address"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}

                     />
                     {
                        errors.email && touched.email ? <div className='text-red-500 ml-10 -mt-3'>{"*"+ errors.email}</div> : null
                     }
                    <input className="inputBox" 
                        type="password"
                        placeholder="Password"
                        name='password'
                        autoComplete='off'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                     {
                        errors.password && touched.password? <div className='text-red-500 ml-10 -mt-3'>{"*"+ errors.password}</div> : null
                     }
                    <input className="inputBox"  
                        type="password"
                        placeholder="Confirm Password"
                        name='confirmPassword'
                        autoComplete='off'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                     {
                        errors.confirmPassword && touched.confirmPassword? <div className='text-red-500 ml-10 -mt-3'>{"*"+ errors.confirmPassword}</div> : null
                     }
                    <button className='bg-[#0266ff] text-white text-lg w-32 h-14 rounded-xl mx-8 mt-2'>Sign Up</button>
                </div>
                <div className='modal-right flex-[0.9] overflow-y-hidden'>
                <img className='hero rounded-tr-xl rounded-br-xl'  src={Hero} alt="" />
                </div>
         </div>
      </form>
    </div>
  )
}

export default Home
