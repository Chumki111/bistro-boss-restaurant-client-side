import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    
    const {data :payments = []} = useQuery({
        queryKey:['payments',user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
        
    })
    return (
        <div>
            <SectionTitle heading="PAYMENT HISTORY" subHeading="---At a Glance!---"/>
            <div>
                <h1>total payments : {payments.length}</h1>
            </div>
        </div>
    );
};

export default PaymentHistory;
