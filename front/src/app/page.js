"use client";
import NavBar from './components/navbar'
import Sidebar from './components/sidebar/sideBar'
import CaseGrid from './components/grid'
import './styles/menu.css';



export default function Home() {
  return (

    <div className="container-fluid">
      <NavBar /> 
  
      <div className="container">
        <div className="menu-container">
          <div className="sidebar-container"> 
            <Sidebar currentPage="home" />
          </div>
          <div className="casegrid-container">
            <CaseGrid />
            lesgo
          </div>
        </div>
      </div>
    </div>
  
  )
}
