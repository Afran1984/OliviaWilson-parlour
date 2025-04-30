import useOrderCard from "../../../Components/hooks/useOrderCard";

const UserOrder = () => {
    const [orderdata] = useOrderCard();

    // console.log("orderdata", orderdata);
    return (
        <div className="p-3">
            <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orderdata.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm relative flex flex-col items-start"
          >
            <div className="bg-pink-100 p-4 rounded-full mb-4">
            <img src={order.serviceImage} alt="Service" className="w-20 h-20 rounded-full" />

            </div>
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-medium ${order.statusColor}`}
            >
              {/* {treatment.status} */}
              <p>panding..</p>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {order.serviceName}
            </h2>
            <p className="text-gray-500 text-sm">{order.description}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default UserOrder;