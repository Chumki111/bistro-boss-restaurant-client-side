

import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CartTable from "./CartTable";


const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total,item) => total + item.price,0)
   
    return (
       <div>
         <SectionTitle subHeading='cart' heading='WANNA ADD MORE?'></SectionTitle>
        <div className="px-12 py-3 bg-white mx-14 mb-5 rounded-lg">
           
            <div className="flex justify-evenly items-center mb-4">
                <h1 className="text-[#151515] text-3xl font-bold">Total Orders : {cart.length}</h1>
                <h1 className="text-[#151515] text-3xl font-bold">Total Price : ${totalPrice}</h1>
               {
                cart.length ?  <> <Link to='/dashboard/payment'>
                <button  className=" bg-[#D1A054] px-3 py-3 rounded-md text-white font-bold">Pay</button>
                </Link></> :<> <button  className=" bg-[#D1A054] px-3 py-3 rounded-md text-white font-bold">Pay</button></>
               }
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] text-white rounded-lg text-xl mb-4">
      <tr>
        <th>
          
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {

        cart?.map((item ,index)=> <CartTable item={item} index={index} key={item._id} refetch={refetch}></CartTable>)
      }
    
    
     
    
     
     
    
    </tbody>
   
    
    
  </table>
</div>
        </div>
       </div>
    );
};

export default Cart;