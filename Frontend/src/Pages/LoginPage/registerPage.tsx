//@ts-ignore

import React from 'react';
import Google_Icon from '../Assets/google-removeBG.png';
import { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const RegisterUser: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [RegisterMessage, setRegisterMessage] = useState('');
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);


    const handleButton = () => {
        // Set loading state to true when the button is clicked
        setIsLoading(true);

        // Simulate a delay (for example purposes)
        setTimeout(() => {
            // Reset loading state after a delay (simulate page loading)
            setIsLoading(false);
            history.push('/Login')
        }, 1000); // Replace 1000 with the actual loading time or async operation time
    };

    const handleRegister = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
        // const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/; // Regular expression for password validation

        // Check if the email matches the pattern
        const isEmailValid = emailRegex.test(email);

        // Check if the password matches the pattern
        // const isPasswordValid = passwordRegex.test(password);

        if (!isEmailValid) {
            // Invalid email format, show an error message or take appropriate action
            console.log('Invalid email format');
            setRegisterMessage('Invalid email format');
            setTimeout(() => {
                setRegisterMessage('');
            }, 3000); // Clear the message after 3 seconds
            return; // Stop further execution
        }

        // if (!isPasswordValid) {
        //     // Invalid password format, show an error message or take appropriate action
        //     console.log('Invalid password format');
        //     setRegisterMessage('Password must be minimum 5 characters with 1 capital letter and 1 special character');
        //     setTimeout(() => {
        //         setRegisterMessage('');
        //     }, 3000); // Clear the message after 3 seconds
        //     return; // Stop further execution
        // }

        try {
            const userregister = {
                FullName: fullName,
                UserEmail: email,
                Role :role,
                Password: password
            }
            // console.log(userregister)
            const response = await axios.post('http://localhost:5000/api/users', userregister);
          
          // Handle successful login response, e.g., store token in local storage or state
          console.log('Registration successful!', response.data);
          if(response.data === "Email Already Exists"){
            alert("Email Already Exists");
        }else{
            alert("Registration Successfully");
            window.location.href="/login";
        }
        } catch (error) {
          console.log('Registration failed:', error);
          // Handle Registration failure, show error message, etc.
          setRegisterMessage('Registration failed. Please try again');
        }
        setFullName('');
        setEmail('');
        setRole('');
        setPassword('');
        setTimeout(() => {
            setRegisterMessage('');
          }, 3000);
      };  //Handle Register

    return(
        <div className='w-full h-screen flex items-center'>
            {/* navl */}
            <div className="relative w-1/2 h-full flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-4xl text-white font-bold my-4">Turn Your Ideas into reality</h1>
                    <p className="text-xl text-white font-normal">Let's start and enjoy the best offers from community</p>
                </div>
                <img src="https://images.unsplash.com/photo-1668714742426-c47d8a0e6ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt='Error 400' className='w-full h-full object-cover' />
            </div>
            <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
                {/* <h1 className='text-3xl text-[#060606] font-bold'>Your Project handler</h1> */}
                
                <div className="w-full flex flex-col max-w-[500px]">
                    <div className='w-full flex flex-col mb-8 items-center'>
                        <h3 className="text-4xl font-bold mb-2">Sign Up</h3>
                        <p className='mt-2'>it's Free</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input 
                            type = 'text' 
                            placeholder='Full Name' 
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />

                        <input 
                            type = "email" 
                            placeholder='Email' 
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}   
                        />
                        
                        {/* <button onClick={()=>{}}>Register with Email</button> */}
                        {/* <button><img src={Google_Icon}/></button> */}
                        <input 
                            type = 'text'
                            placeholder='Role'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                            value={role}
                            onChange={(e) => setRole(e.target.value)}    
                        />

                        <input 
                            type = "password" 
                            placeholder='Password' 
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <div className="w-full flex flex-col">
                        <button onClick={handleRegister} className='w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer hover:text-black hover:bg-white'>
                            Sign up
                        </button>
                        {RegisterMessage && <p className='flex justify-center text-blue-700 font-semibold'>{RegisterMessage}</p>}

                        {/* <button className='w-full text-black font-semibold my-2 bg-white border-[1px] border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                            Register
                        </button> */}
                    </div>

                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black/20"></div>
                        <p className="text-md absolute text-black/80 bg-[#f5f5f5] mb-1">or</p>
                    </div>
                    <button className='w-full text-black font-semibold my-2 bg-white border-[1px] border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        <img src={Google_Icon} alt='/Google' className='h-6 mr-2' />
                        Sign up with Google
                    </button>
                </div>

                {/* <button className="w-full">
                    <p className="text-sm font-normal text-[#060606]"> <span className='font-semibold underline underline-offset-2 cursor-pointer'>Already have an account? Sign in</span></p>
                </button> */}
                <div className="w-full flex justify-center">
                    <button onClick={handleButton} className="text-sm font-normal text-[#060606]"> 
                        <span className='font-semibold underline underline-offset-2 cursor-pointer hover:text-blue-600'>Already have an account? Sign in</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RegisterUser;