import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import Button from './Button';
import { IoIosHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Line from './Line';

const UserCard = () => {
  return (
   <div className='w-[20rem] h-[30rem] shadow-2xl rounded-lg'>

        {/* top Section */}
        <div className='w-full h-[10rem] bg-blue-500 rounded-lg relative'>
            <img className='h-full rounded-full aspect-square object-cover absolute translate-x-20 translate-y-1/4 border-blue-200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7_LrOZxC0sObij4JbDE0UUMySULj9yZ_NQ&s" alt="avatar" />
        </div>

        {/* bottom Section */}

        <div className='flex flex-col items-center mt-16 gap-2'>
            <h1 className='text-2xl font-bold '>Bazil Khan</h1>
            <p>Mern Stack Developer</p>
            <div className='flex gap-5 mt-3 text-2xl text-black-500'>
                <IoLogoYoutube />
                <IoLogoFacebook />
                <IoLogoInstagram />
                <IoLogoTwitter />
            </div>
            <div className='flex gap-2.5 mt-5'>
            <Button title="Subscribe"/>
            <Button title="Message"/>
            </div>

        <div className='flex items-center gap-1 mt-3 text-s text-black-500'>
            <IoIosHeart />
            <span>100 Likes</span>
            <Line />
            <FaComment />
            <span>50 Comments</span>
            <Line />
            <FaShare />
            <span>20 Shares</span>


        </div>

        </div>
        
    </div>
  )
}

export default UserCard
