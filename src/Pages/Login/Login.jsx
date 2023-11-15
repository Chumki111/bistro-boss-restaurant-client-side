
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication2.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {

	
	const [disabled, setDisabled] = useState(true);
	const { logInUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';
	




	const handleCaptcha = (e) => {
		const value = e.target.value;
		if (validateCaptcha(value)) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	const handleLogIn = e => {
		e.preventDefault();
		const form = e.target;

		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		logInUser(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				Swal.fire({
					title: "User Login Successfully",
					showClass: {
						popup: `
					animate__animated
					animate__fadeInUp
					animate__faster
				  `
					},
					hideClass: {
						popup: `
					animate__animated
					animate__fadeOutDown
					animate__faster
				  `
					}
				});

				navigate(from,{replace:true})

			})
			.catch(error => {
				console.log(error);
			})

	}



	useEffect(() => {
		loadCaptchaEnginge(6);
	}, [])
	return (
		<>
			<Helmet>
				<title>Bistro-Boss-Restaurant | Sign Up</title>

			</Helmet>

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
											<LoadCanvasTemplate />
										</label>

										<input onBlur={handleCaptcha} type="text"  name='captcha' placeholder="Type here" className="input input-bordered" required />
										
									</div>
									<button disabled={disabled} className="block w-full p-3 text-center rounded-sm dark:[#D1A054] cursor-pointer dark:bg-[#D1A054] text-white">Sign in</button>
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
									<Link to='/signUp'>
										<button className="underline font-medium dark:text-[#D1A054] ">Sign up</button>
									</Link>
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default Login;