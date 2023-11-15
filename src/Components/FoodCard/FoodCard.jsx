import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();
    const handleAddToCart = food =>{
        if(user && user.email) {
            // send cart item to database
            console.log(user.email,food);

            const cartItem = {
                menuId : _id,
                email :user.email,
                image,
                name,
                price
            }

            axiosSecure.post('/carts',cartItem)
            .then(res => {
                console.log(res.data);

                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name}------------- added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                    //   refetch
                    refetch()
                }
            })
        } else{
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //  send the user login page
                navigate('/login',{state:{from : location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card  bg-[#F3F3F3] shadow-sm">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 py-1 rounded bg-[#111827] text-white'>${price}</p>
                <div className="card-body">
                    <h2 className=" text-[#151515] font-semibold text-2xl text-center">{name}</h2>
                    <p className="">{recipe}</p>
                    <div className="card-actions my-4 justify-center">
                    <button onClick={() => handleAddToCart(item)} className="border-b-4 bg-[#F3F3F3] text-[#BB8506] border-[#BB8506] shadow-md hover:bg-[#111827]  font-medium text-xl rounded py-3 px-4 uppercase">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes={
    item:PropTypes.object
}
export default FoodCard;