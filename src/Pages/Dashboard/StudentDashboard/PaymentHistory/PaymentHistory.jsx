import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment";


const PaymentHistory = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        }
    })

    const sortedPayments = paymentHistory.sort((a, b) =>
        moment(b.date).diff(moment(a.date))
    );

    return (
        <div className="w-full p-10">
            <h1 className="text-4xl text-center font-extrabold uppercase mb-10">Total payment: {paymentHistory.length}</h1>

            <div>
                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>TransactionId</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPayments.map((history, index) => <tr

                            key={history._id}

                        >
                            <td>{index + 1}</td>

                            <td><p className="font-bold">{history.name}</p></td>

                            <td><b>{history.email}</b></td>
                            <td><b>{history.transactionId}</b></td>
                            <td>{
                                history.cart.map(cls => <p key={cls._id}><b>{cls.name}</b></p>)
                            }</td>
                            <td><b>${history.price}</b></td>
                            <td><b>{history.date}</b></td>

                        </tr>)}

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;