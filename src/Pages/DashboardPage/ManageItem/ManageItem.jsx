import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item => {
        console.log(item._id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your menu has been deleted.",
                        icon: "success"
                    });
                }

            }
        });

    }
    return (
        <div>
            <SectionTitle subHeading="---Hurry Up!---" heading="MANAGE ALL ITEMS" />


            <div className="px-12 py-3 bg-white mx-14 mb-5 rounded-lg">

                <div className="flex items-center mb-4">
                    <h1 className="text-[#151515] text-3xl font-bold">Total Orders : </h1>

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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-20 rounded">
                                                    <img src={item?.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}

                                    </td>
                                    <td>${item?.price}</td>

                                    <th>
                                       <Link to={`/dashboard/updatedItem/${item._id}`}> <button className="bg-[#D1A054] text-white px-3 py-3 rounded-md"><FaRegEdit className="text-2xl" />
                                        </button></Link>
                                    </th>

                                    <th>
                                        <button onClick={() => handleDelete(item)} className="bg-[#B91C1C] text-white px-3 py-3 rounded-md"><FaTrashAlt className="text-xl"></FaTrashAlt></button>
                                    </th>
                                </tr>)

                            }







                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;