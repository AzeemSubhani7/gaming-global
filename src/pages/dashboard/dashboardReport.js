import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/backendUrl";
import { XCircleIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router";

function DashboardReport(props) {
  const [reports, setReports] = useState([]);
  const [change, setChange] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/admin/getreports`);
        if (response.data) {
          console.log(response.data);
          setReports(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getReports();
  }, [change]);

  const deleteAReport = async(id) => {
    try{
      const response = await axios.delete(`${baseUrl}/api/admin/deletereport/${id}`);
      if(response.data) {
        alert("Report Deleted Successfully!");
        setChange((change) => !change)
      }
    }
    catch(error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className="reports main">
      {reports.length > 0 ? (
        reports.map((x) => {
          return (
            <div key={x._id} className="reports text-greyText flex items-center relative mt-4 bg-primary-light rounded-2xl px-20 py-10">
              <div className="ml-6">
                <p onClick={() => history.push(`/profile/user/${x.user._id}`)} className="text-lg cursor-pointer text-secondary font-medium">{x.user.userName}</p>
                <p className="text-lg">{x.user.email}</p>
              </div>
              <div className="ml-6 border-l-4 border-secondary">
                <div className="ml-5">
                " {x.reportText} "
                </div>
                <div 
                onClick={() => history.push(`/posts/${x.post._id}`)}
                className='text-secondary ml-6 mt-2 font-medium text-lg cursor-pointer'>
                    Post
                </div>
                <div className='ml-6 mt-2'>
                  Post Text : {x.post.postText}
                </div>
              </div>
              <div
                className="absolute z-10"
                style={{ top: "20px", right: "20px" }}
              >
                <XCircleIcon 
                onClick={() => deleteAReport(x._id)}
                className="h-8 w-8 transform transition-all duration-300 hover:text-secondary hover:scale-110 cursor-pointer" />
              </div>
            </div>
          );
        })
      ) : (
        <div className="p-10">
          <p className="text-lg text-greyText">No Reports</p>
        </div>
      )}
    </div>
  );
}

export default DashboardReport;
