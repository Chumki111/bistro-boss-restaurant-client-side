import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors }, } = useForm();
    const { createUser ,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser);
            updateUserProfile(data.name,data.photoURL)
            .then(() =>{
            console.log('updated profile');
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your register successfully create ",
                showConfirmButton: false,
                timer: 1500
              });

              navigate('/')
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error);
        })
    };

    

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
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-full lg:w-1/2 mr-12">
                            <img src={img} className='w-full max-w-lg rounded-lg ' alt="" />
                        </div>
                        <div className="w-full max-w-md space-y-3">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name",{required: true })} name='name' placeholder="Your name" className="input input-bordered"/>
                                    {errors.name?.type === "required" && (
                                        <p className="text-red-800">name is required</p>)}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" {...register("photoURL",{required: true })} placeholder="photo" className="input input-bordered"/>
                                    {errors.photoURL?.type === "required" && (
                                        <p className="text-red-800">photo is required</p>)}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", {required: true })} name='email' placeholder="Your email" className="input input-bordered"/>
                                    {errors.email?.type === "required" && (
                                        <p className="text-red-800">email is required</p>)}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true ,pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/})} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-800">password name is required</p>)}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-800">At least one uppercase, one lowercase one digit,one special character,minimum eight in length </p>)}

                                </div>
                                <input className="block w-full p-3 text-center rounded-sm dark:[#D1A054] dark:bg-[#D1A054] text-white cursor-pointer" type="submit" value="Sign Up" />

                                
                            </form>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p className="px-3 text-sm dark:text-[#D1A054]">Sign up with social accounts</p>
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
                            <p className="text-lg text-center sm:px-6 dark:text-[#D1A054]">Already Registered ?
                                <Link to='/login'>
                                    <button className="underline font-medium dark:text-[#D1A054] ">Go To In Sign In</button></Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default SignUp;