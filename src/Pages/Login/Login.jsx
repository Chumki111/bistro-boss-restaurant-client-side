
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication2.png'
import { useEffect, useRef, useState } from "react";

const Login = () => {

   const captchaRef = useRef(null);
   const [disabled,setDisabled] = useState(true)
	
    const handleLogIn= e =>{
        e.preventDefault();
        const form = e.target;
        
        const email=form.email.value;
        const password = form.password.value;
        console.log(email,password);
       
    }

	const handleCaptcha = () =>{
        const value = captchaRef.current.value;
		if(validateCaptcha(value)){
               setDisabled(false)
		}else{
           setDisabled(true)
		}
	}

	useEffect(()=>{
		loadCaptchaEnginge(6); 
	},[])
	return (
		<div style={{
			background: `url("https://i.ibb.co/ZgW11j4/Rectangle-75.png"), lightgray 50% / cover no-repeat`,
			backgroundSize: 'cover',
		}}>
			<div className="max-w-screen-xl mx-auto py-14 md:px-14" >
				<div className="hero min-h-[500px] shadow-2xl" style={{
					background: `url("https://i.ibb.co/ZgW11j4/Rectangle-75.png"), lightgray 50% / cover no-repeat`,
				}}>
					<div className="hero-content flex-col lg:flex-row">
						<div className="w-full lg:w-1/2 mr-12">
							<img src={img} className='w-full max-w-lg rounded-lg ' alt="" />
						</div>
						<div className="w-full max-w-md space-y-3">
							<h1 className="text-2xl font-bold text-center">Login</h1>
							<form className="space-y-6" onSubmit={handleLogIn}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="password" name='password' placeholder="password" className="input input-bordered" required />
								</div>
								<div className="form-control">
								<label className="label">
								<LoadCanvasTemplate/>
									</label>
									
									<input type="text" ref={captchaRef} name='captcha' placeholder="Type here" className="input input-bordered" required />
									<button onClick={handleCaptcha} className=" border-b-2 border-[#1F2937] font-medium text-lg rounded-b py-3 px-3">Validation</button>
								</div>
								<button disabled={disabled} className="block w-full p-3 text-center rounded-sm dark:[#D1A054] dark:bg-[#D1A054] text-white">Sign in</button>
							</form>
							<div className="flex items-center pt-4 space-x-1">
								<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
								<p className="px-3 text-sm dark:text-[#D1A054]">Login with social accounts</p>
								<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
							</div>
							<div className="flex justify-center space-x-4">
								<button className="p-3 border border-[#444] rounded-full">
									<FaGoogle></FaGoogle>
								</button>
								<button className="p-3 border border-[#444] rounded-full">
									<FaFacebookF />
								</button>
								<button className="p-3 border border-[#444] rounded-full">
									<FaGithub></FaGithub>
								</button>
							</div>
							<p className="text-lg text-center sm:px-6 dark:text-[#D1A054]">Don`t have an account?
								<button className="underline font-medium dark:text-[#D1A054] ">Sign up</button>
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Login;