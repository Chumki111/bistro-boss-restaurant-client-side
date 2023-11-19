import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const AllUsersTable = ({ item, refetch, index }) => {

    const axiosSecure = useAxiosSecure();

    const handleMakeAdmin = item => {
        axiosSecure.patch(`/users/${item._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    const handleDelete = (item) => {
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


                axiosSecure.delete(`/users/${item._id}`)
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
                {item.name}
            </td>
            <td>
                {item.email}

            </td>
            <td>{item.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(item)} className="bg-[#D1A054] text-white px-3 py-3 rounded-md"><FaUsers className="text-xl" /></button>}</td>
            <th>
                <button onClick={() => handleDelete(item)} className="bg-[#B91C1C] text-white px-3 py-3 rounded-md"><FaTrashAlt className="text-xl"></FaTrashAlt></button>
            </th>
        </tr>
    );
};

export default AllUsersTable;