// Libraris
import axios from "axios";
import React, { useState, useEffect } from "react";
// Utilities
import {
  defaultButtonStyles,
  secondaryButtonStyles,
} from "../../components/Button/Button";
import { baseUrl } from "../../utils/backendUrl";

function DashboardUser(props) {
  const [users, setUsers] = useState([]);
  const [tableChanged, setTableChanged] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/admin/getusers`);
        if (response.data) {
          // console.log(response.data);
          setUsers(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [tableChanged]);

  const makeAdmin = async (id) => {
    try {
      const response = await axios.post(`${baseUrl}/api/admin/makeadmin/${id}`);
      if (response.data) {
        console.log("Maked admin");
        setTableChanged((tableChanged) => !tableChanged);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeAdmin = async (id) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/admin/removeadmin/${id}`
      );
      if (response.data) {
        console.log("removeadmin");
        setTableChanged((tableChanged) => !tableChanged);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const banUser = async (id) => {
    try {
      const response = await axios.post(`${baseUrl}/api/admin/banuser/${id}`);
      if (response.data) {
        console.log("banned user");
        setTableChanged((tableChanged) => !tableChanged);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const unBanUser = async (id) => {
    try {
      const response = await axios.post(`${baseUrl}/api/admin/unbanuser/${id}`);
      if (response.data) {
        console.log("unbanned user");
        setTableChanged((tableChanged) => !tableChanged);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Banned
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                {/* Table Heading End */}
                {/* Table Body Start */}
                <tbody style={{ backgroundColor: "#423f4f" }} className=" ">
                  {/* Table sinegle row Start */}
                  {users.length > 0 ? (
                    users.map((x) => {
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
                                  {x.userName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-greyText">
                              {x.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-400 text-gray-800">
                              {x.isBanned ? "Banned" : "Active"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap uppercase text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-400 text-gray-800">
                              {x.role === 'root' ? 'Admin' : 'User'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {x._id ===
                            "61515c84d2d77d2994ab0efd" ? null : x.role ===
                              "user" ? (
                              <button
                                onClick={() => makeAdmin(x._id)}
                                className={secondaryButtonStyles}
                              >
                                Make Admin
                              </button>
                            ) : (
                              <button
                                onClick={() => removeAdmin(x._id)}
                                className={secondaryButtonStyles}
                              >
                                Remove Admin
                              </button>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {x._id ===
                            "61515c84d2d77d2994ab0efd" ? null : x.isBanned ? (
                              <button
                                onClick={() => unBanUser(x._id)}
                                className={defaultButtonStyles}
                              >
                                Unban User
                              </button>
                            ) : (
                              <button
                                onClick={() => banUser(x._id)}
                                className={defaultButtonStyles}
                              >
                                Ban User
                              </button>
                            )}
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

export default DashboardUser;
