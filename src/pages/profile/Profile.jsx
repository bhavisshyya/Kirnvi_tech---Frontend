import React from 'react'
import Header from '../../components/header/Header'
import dummy from '../../assets/user.png'
import "./Profile.scss"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

function Profile() {
const subTopics = [
    "Dashbord" , "Profile" , "Edit Profile" , "Network" ,"Need Help" , "Logout"
]

const [activeIndex, setActiveIndex] = useState(0);
const [userImg, setUserImg] = useState("");
const handleClic = (index) => {
    setActiveIndex(index);
};
const [name, setName] = useState('');

function handleImage(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setUserImg(fileReader.result);
      }
    };
  }

  const handlePostRequest = async () => {
    const url = 'http://localhost:8080/api/profile/info'; // Replace with your actual API endpoint URL
    try {
      const response = await axios.get(url, 
        {withCredentials:true}
    );
        console.log(response.data);
        setName(response.data._doc.name);
      } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handlePostRequest();
  }, []);
  return (
    <>
       <Header/>
       <div className="profile-container">
            <div className="left-part">
                <div className="upper">
                <div className='input-user-img'>
                    <label htmlFor='inputImg' className='labelImg'>
                        <img src={userImg ? userImg : dummy} alt="nam" />
                    </label>
                    <input
                    className='inputImg'
                    id='inputImg'
                    type='file'
                    accept='image/*'
                    onChange={handleImage}
                    />
                </div>
                    <h2>{name}</h2>
                </div>

                <div className="lower">

                    {subTopics.map((topic , index)=>(
                        <div key={index} className={`sub-title ${activeIndex === index ? 'active' : ''} `} onClick={() => handleClic(index)}>{topic}</div>
                    ))}

                </div>


            
            </div>


            <div className="right-part">
                
                <div className="subhead"><p>Live Deals</p></div>
                <div className="subhead2"><p>Most Funded</p></div>
            </div>
       </div> 
    </>
  
  )
}

export default Profile