import React, { useState } from 'react';
import {AiOutlineLinkedin , AiFillFlag, AiOutlineUser , AiOutlineMail, AiOutlinePhone} from "react-icons/ai"
import {BiMap} from 'react-icons/bi'
import {BsBuildings} from 'react-icons/bs'
import './CreateProfile.scss'
import leftImg from '../../assets/Screenshot 2023-05-19 at 11.58.42 PM.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateProfile() {

  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [link, setLink] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCheckboxChange = (event) => {
    
    setIsChecked(event.target.checked);
  };

  const handlePostRequest = async () => {
    const url = 'http://localhost:8080/api/profile'; // Replace with your actual API endpoint URL
    const data = {
      name,
      email,
      phoneNumber: phone,
      country: country,
      state,
      linkedinLink:link
    };

    try {
      const response = await axios.post(url, data, {withCredentials:true});
      console.log(response.data);

      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };


  const handleButtonClick = () => {
    handlePostRequest();
  };

  const navigate = useNavigate();

    const inputData = [
        {
            icon : AiOutlineUser,
            info: "Name",
            setState: setName
        },
        {
            icon : AiOutlineMail,
            info: "Email",
            setState: setEmail
        },
        {
            icon : AiOutlinePhone,
            info: "Phone no.",
            setState: setPhone
        },
        {
            icon : AiOutlineLinkedin,
            info: "Likedin Link",
            setState: setLink
        },
        {
            icon : AiFillFlag,
            info: "Country",
            setState: setCountry
        },
        {
            icon : BiMap,
            info: "State",
            setState: setState
        },
    ]

    

  return (
    <div className='container'>
        <div className="heading"><h1>Create <span> Investor <span className='und'>Profile</span>  </span> </h1></div>

        <div className="content-container">
            <div className="leftPart">
                <div className="img-container">
                    <img src={leftImg} alt="" />
                </div>
            </div>

            <div className="rightPart">

                <div className="rightPart-container">
                {
                    inputData.map((data,idx)=>(
                    <div key={idx} className="avatar-input-container">
                    <div className="avatar-container">
                    <data.icon className='icon'/>
                    </div>
                   
                    <input type="text" onChange={(e)=> data.setState(e.target.value)} className="pin-input" placeholder={data.info} />
                    </div>
                ))
                }

                    <div className="bottomPart">
                        <div className="left">
                            <div className="avatar-input-container">
                            <div className="avatar-container">
                            <BsBuildings className='icon'/>
                            </div>
                   
                            <input type="text" className="pin-input" placeholder="City" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="avatar-input-container">
                            <div className="avatar-container">
                            <BiMap className='icon'/>
                            </div>
                   
                            <input type="text" className="pin-input" placeholder="Pin code" />
                            </div>
                        </div>
                    </div>
                    

                </div>

        <div className="bottom-part-terms">
        <div  className="avatar-input-container terms-condition">
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
            <p> I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information.</p>
           
        </div>

        <div className="btn">
        <button
                onClick={handleButtonClick}
                disabled={!isChecked}
                className={isChecked ? 'enabled-button' : 'disabled-button'}
                >
                Next
        </button>
        </div>
        </div>

            </div>
        </div>


        
    </div>
  )
}

export default CreateProfile