import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import './AdminManageUsers.css'
import StickyHeadTable from '../../../components/StickyHeadTable'

const AdminManageUsers = () => {
  return (
    <div className='admin-container'>
      <Sidebar isAdmin/>
      <div className="admin-main">
        <div className="admin-content">
            <div className="admin-header">
                <span className="admin-title">Manage Users</span>
                <span className="admin-subtext">View and manage all users</span>
            </div>
            <div className="user-table-container">
             <StickyHeadTable/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminManageUsers
