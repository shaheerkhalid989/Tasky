//@ts-ignore

// import GOOGLE_IMAGE from 'D:/Images/Background Remove/gooogle-removeBG.png';
import GOOGLE_IMAGE from '../Assets/google-removeBG.png';
import React from 'react';
import { useState, useEffect, } from 'react';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

// import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    // Variables---------------------------------------------
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('Waiting for the message...');
    // Variables---------------------------------------------

    // Methods-----------------------------------------------
    const handleDontAccountButton = () => {
        // Set loading state to true when the button is clicked
        setIsLoading(true);

        // Simulate a delay (for example purposes)
        setTimeout(() => {
            // Reset loading state after a delay (simulate page loading)
            setIsLoading(false);
            history.push('/Registration')
        }, 1000); // Replace 1000 with the actual loading time or async operation time
    };

    useEffect(() => {


        axios.get('http://127.0.0.1:5000/api/data') // Replace with your API endpoint
        .then(response => {
            setMessage(response.data);
        })
        .catch(error => {
            console.log('Error:', error);
            setMessage('Failed to fetch data');
        });

        const rememberedUsername = localStorage.getItem('rememberedUsername');
        if (rememberedUsername) {
          setUsername(rememberedUsername);
          setRememberMe(true);
        }
      }, []);


    const handleLogin = async () => {
        try {
            const userLogin = {
                UserEmail: username,
                Password: password
            }
            const response = await axios({
                method: "post",
                url: 'http://localhost:5000/api/login',
                headers: {'Content-Type': 'application/json'},
                data: userLogin
            });
          
          // Handle successful login response, e.g., store token in local storage or state
          console.log('Login successful!', response.data);
          if(response.status === 200){
            setLoginMessage("Successfully Logged In");
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            window.location.href="/Home";
            }else{
                setLoginMessage("Invalid Username and Password")
            }
            setLoginMessage('Login successful!');
            if (rememberMe) {
                localStorage.setItem('rememberedUsername', username);
              }
        } catch (error) {
          console.error('Login failed:', error.response?.data);
          // Handle login failure, show error message, etc.
          setLoginMessage('Login failed. Please try again');
          console.log(username);
          console.log(password);
        }
        setUsername('');
        setPassword('');
        setTimeout(() => {
            setLoginMessage('');
          }, 3000);
      };  //Handle Login

    return(
        <div className='w-full h-screen flex items-center'>
            <div className="relative w-full h-full flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className="text-4xl text-white font-bold my-4">Turn Your Ideas into reality</h1>
                    <p className="text-xl text-white font-normal">Efficiency Redefined: Elevate Project Management to Peak Performance!</p>
                </div>
                <img src = "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt='/CoverImage' className='w-full h-full object-cover' />
            </div>
            <div className="w-full h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
                <h1 className='text-3xl text-[#060606] font-bold mt-4'>Your Project Handler</h1>
                
                <div className="w-full flex flex-col max-w-[500px]">
                    <div className='w-full flex flex-col mb-2 items-center'>
                        <h3 className="text-2xl font-bold mb-2 ">Login</h3>
                        <p className="text-base mb-2">Welcome back! Please enter fields</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={username}
                            onChange={(e) =>setUsername(e.target.value)}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                        
                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

                    </div>
                    
                    <div className='w-full flex items-center justify-between'>
                        <div className="w-full flex items-center">
                            <input
                                type="checkbox" 
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className='w-4 h-4 mr-2'/>
                                <p className='text-sm'>Remember Me</p>
                                
                        </div>

                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password?</p>
                    </div>
                    <div className="w-full flex flex-col">
                        <button onClick={handleLogin} className='w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer hover:text-black hover:bg-white'>
                            Sign in
                        </button>
                        {loginMessage && <p className='flex justify-center text-blue-700 font-semibold'>{loginMessage}</p>}

                    </div>

                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black/20"></div>
                        <p className="text-md absolute text-black/80 bg-[#f5f5f5] mb-1">or</p>
                    </div>
                    <div className='w-full text-black font-semibold my-2 bg-white border-[1px] border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        <img src={GOOGLE_IMAGE} alt='Google Icon' className='h-6 mr-2' />
                        Sign in with Google
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button onClick={handleDontAccountButton} className="text-sm font-normal text-[#060606]"> 
                        <span className='font-semibold underline underline-offset-2 cursor-pointer hover:text-blue-900'>Don't have an account? Sign up</span>
                    </button>
                </div>
                <div>
        <h1>Hello from React</h1>
        <p>{message}</p>
      </div>

            </div>
        </div>
    )
}

export default Login;