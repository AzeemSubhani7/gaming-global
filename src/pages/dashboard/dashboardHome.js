// Libraries
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { baseUrl } from '../../utils/backendUrl';

// Components
import Chart from './chart';

function DashboardHome(props) {
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [numberOfPosts, setNumberOfPosts] = useState(0)
  useEffect(() => {
    const fetchStats = async() => {
      try{
        const response = await axios.get(`${baseUrl}/api/admin/getstats`)
        if(response.data) {
          setNumberOfUsers(response.data.user);
          setNumberOfPosts(response.data.post);
          // console.log(response.data);
        }
      }
      catch(error){
        console.error(error)
      }
    }
    fetchStats()
  },[])
  return (
    <div className='flex items-center justify-center space-y-10 p-4 flex-col'>
      <p className='text-white mt-20 font-normal text-2xl'>User & Post statistics</p>
      <Chart className='mt-20' user={numberOfUsers} post={numberOfPosts} />
    </div>
  );
}

export default DashboardHome;