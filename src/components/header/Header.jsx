import React from 'react'
import "./Header.scss"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {TbBellRingingFilled} from "react-icons/tb"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate();
  return (
    <div className='header'>
        <div className="container">
            <div className="left">
            <BsFillArrowLeftCircleFill className='icon' onClick={()=>navigate("/")}/>
                <div className="img-container">
                    <img src={logo} alt="" />
                </div>
            
            </div>

            <div className="right">
                 <TbBellRingingFilled className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header