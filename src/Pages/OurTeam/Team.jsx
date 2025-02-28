import { useEffect, useState } from 'react';

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [looding, setLooding] = useState(true);

    console.log(teams);

    useEffect(() => {
        fetch('team.json')
        .then((res) => res.json())
        .then(res => {
            setTeams(res);
            setLooding(false);
        })

    },[]);


    // set Looding
    if (looding){
      return (
        <div className='min-h-screen bg-white flex justify-center items-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800'></div>
          <p className='ml-4 text-purple-800'>Loading...</p>
        </div>
      );
    }

    return (
        <div className="py-16 bg-white text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {teams.map(team => (
          <div key={team.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src={team.image}
                alt={team.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900">{team.name}</h3>
              <p className="text-sm text-gray-500">{team.position}</p>
              <p className="text-gray-700 mt-4">{team.service}</p>
              <div className="flex mt-4 text-yellow-500">
                {'⭐'.repeat(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
    );
};

export default Team;