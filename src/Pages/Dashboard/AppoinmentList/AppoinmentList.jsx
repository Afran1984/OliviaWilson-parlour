import useAppoinment from '../../../Components/hooks/useAppoinment';

const AppoinmentList = () => {
    const [appoinment] = useAppoinment();
    console.log("appoinment", appoinment);
    return (
        <div className="p-3">
            <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {appoinment.map((uappoinment, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm relative flex flex-col items-start"
          >
            <div className="bg-pink-100 p-4 w-10 h-10 rounded-full mb-4">

            </div>
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-medium ${uappoinment.statusColor}`}
            >
              {/* {treatment.status} */}
              <p>panding..</p>
            </div>
            <div className='text-center'>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {uappoinment.service}
            </h2>
            <p className="text-gray-500 font-mono text-sm">{uappoinment.name}</p>
            <p className="text-gray-500 font-mono text-sm">{uappoinment.email}</p>
            <p className="text-gray-500 font-mono text-sm">{uappoinment.phone}</p>
            <p className="text-gray-500 font-mono text-sm">{uappoinment.date}</p>
            <p className="text-gray-500 font-mono text-sm">{uappoinment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default AppoinmentList;