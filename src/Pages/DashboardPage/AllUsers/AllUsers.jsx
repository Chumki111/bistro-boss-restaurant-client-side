import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import AllUsersTable from "./AllUsersTable";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users')
            return res.data;


        }
    })
    return (
        <div>
            <SectionTitle subHeading='---How many??---' heading='MANAGE ALL USERS' />
            <div className="px-12 py-3 bg-white mx-14 mb-5 rounded-lg">

                <div className="flex items-center mb-4 p-4">
                    <h1 className="text-[#151515] text-3xl font-bold">Total Orders : {users.length}</h1>

                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white rounded-lg text-lg mb-4">
                            <tr className="uppercase">
                                <th>

                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                users?.map((item, index) => <AllUsersTable item={item} refetch={refetch} index={index} key={item._id}></AllUsersTable>)
                            }







                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;