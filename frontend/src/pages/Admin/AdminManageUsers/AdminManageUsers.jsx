import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./AdminManageUsers.css";
import StickyHeadTable from "../../../components/StickyHeadTable";
import { fetchUsers } from "../../../services/Users";

const AdminManageUsers = () => {
  // const [users, setUsers] = useState();
  // const token = localStorage.getItem("authToken");
  // useEffect(()=> {
  //   const fetchUsers= async() =>{
  //     console.log("HIII")
  //     const userData = await fetchUsers(token)
  //     console.log(userData);
  //     // console.log(users.username)
  //   }
  // },[token])
  // fetchUsers();

  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/auth/users/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (!res.ok) {
          console.error("Failed to fetch users");
          return;
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchUsers();
  }, [token]);

  useEffect(() => {
    console.log("Fetched users:", users);
  }, [users]);

  return (
    <div className="admin-container">
      <Sidebar isAdmin />
      <div className="admin-main">
        <div className="admin-content">
          <div className="admin-header">
            <span className="admin-title">Manage Users</span>
            <span className="admin-subtext">View and manage all users</span>
          </div>
          <div className="user-table-container">
            <StickyHeadTable users={users}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageUsers;
