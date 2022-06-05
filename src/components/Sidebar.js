import React from 'react'
import { IoStatsChart } from 'react-icons/io'

const Sidebar = () => {
   return (
      <div className="sidebar-container col-lg-2">
         <div className="sidebar">
            <ul className="sidebar-list">
               <div className="sidebar-item">
                  <img src={require('../img/icon.png')} alt="" />
                  <li className="sidebar-list-item">Dashboard</li>
               </div>
               <div className="sidebar-item active">
                  <img src={require('../img/award.png')} alt="" />
                  <li className="sidebar-list-item">Skill Test</li>
               </div>
               <div className="sidebar-item">
                  <img src={require('../img/icon3.png')} alt="" />
                  <li className="sidebar-list-item">Internships</li>
               </div>
            </ul>
         </div>
      </div>
   )
}

export default Sidebar
