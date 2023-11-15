import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const CartTable = ({ item, index ,refetch}) => {
    const { _id, image, price, name } = item;
    const axiosSecure = useAxiosSecure();
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
   
    return (

        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-20 rounded">
                            <img src={image} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}

            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="bg-[#B91C1C] text-white px-3 py-3 rounded-md"><FaTrashAlt className="text-xl"></FaTrashAlt></button>
            </th>
        </tr>

    );
};

export default CartTable;