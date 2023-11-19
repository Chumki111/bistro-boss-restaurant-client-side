
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialAccount = () => {

    const {createUserWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate  = useNavigate()
    

    const handleGoogleSignIn =() =>{
        createUserWithGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo ={
                email : result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
             <div className="flex justify-center space-x-4">
                                    <button onClick={handleGoogleSignIn} className="p-3 border border-[#444] rounded-full">
                                        <FaGoogle></FaGoogle>
                                    </button>
                                    <button className="p-3 border border-[#444] rounded-full">
                                        <FaFacebookF />
                                    </button>
                                    <button className="p-3 border border-[#444] rounded-full">
                                        <FaGithub></FaGithub>
                                    </button>
                                </div>
        </div>
    );
};

export default SocialAccount;