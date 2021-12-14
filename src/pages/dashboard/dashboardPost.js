// Libraris
import axios from "axios";
import React, { useState, useEffect } from "react";
// Utilities
import {
  secondaryButtonStyles,
} from "../../components/Button/Button";
import { baseUrl } from "../../utils/backendUrl";

function DashboardPost(props) {
  const [posts, setPosts] = useState([]);
  const [tableChanged, setTableChanged] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/admin/getposts`);
        if (response.data) {
          console.log(response.data);
          setPosts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [tableChanged]);

  const deletePost = async(id) => {
    try{
      const response = await axios.delete(`${baseUrl}/api/admin/deletepost/${id}`);
      if(response.data) {
        console.log(response.data)
        setTableChanged((tableChanged) => !tableChanged)
      }
    }
    catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              {/* Table Starts*/}

              <table className="min-w-full ">
                {/* Table Heading Start */}
                <thead className="bg-primary-light">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Poster Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Poster Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Text
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Delete Post
                    </th>
                  </tr>
                </thead>
                {/* Table Heading End */}
                {/* Table Body Start */}
                <tbody style={{ backgroundColor: "#423f4f" }} className=" ">
                  {/* Table sinegle row Start */}
                  {posts.length > 0 ? (
                    posts.map((x) => {
                      return (
                        <tr key={x._id} className="">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-greyText">
                                  {x.user.userName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-greyText">
                            {x.user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-400 text-gray-800">
                              {x.postText.length > 20 ?  x.postText.slice(0,20) : x.postText}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => deletePost(x._id)}
                              className={secondaryButtonStyles}
                            >
                              Delete Post
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div className="text-lg text-greyText text-center p-2">
                      {" "}
                      No Data{" "}
                    </div>
                  )}
                  {/* Table sinegle row end*/}
                </tbody>
                {/* Table body end */}
              </table>
              {/* Table end*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPost;
