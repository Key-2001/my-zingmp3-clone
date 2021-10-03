import React from 'react'
import Img from '../assets/Img'
import { FiMoreHorizontal } from "react-icons/fi";
const Profile = () => {
    return (
        <div className='profile'>
            <img src={Img.avatarDefault} alt='avatar'/>
            <h3 className='modal-title'>Hoat La</h3>
            <div className='action-profile'>
                <a href='#' className='vip-profile'>mua vip ngay</a>
                <a href='#' className='input-code'>nhập  code  ngay</a>
                <span><FiMoreHorizontal/></span>
            </div>
        </div>
    )
}

export default Profile
