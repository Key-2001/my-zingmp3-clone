import React,{useState} from 'react'
import Img from '../assets/Img'
import { AiOutlineClose,AiOutlineSetting,AiOutlineArrowLeft,AiOutlineArrowRight,AiOutlineSearch } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import {BsUpload} from "react-icons/bs";
import { blackPink } from '../data/blackpick';

const Header = () => {
    const [isShowModal,setIsShowModal] = useState(false);
    const [modal,setModal] = useState('rose');
    const handleOnClick = (classname) => {
        const mainBackground = document.querySelector('main');

        mainBackground.classList.remove(modal);
        setModal(classname.classname);
        console.log(classname.classname)
        
        mainBackground.classList.toggle(classname.classname);
        setIsShowModal(false)
    }

    return (
        <section className='header'>
            <div className='header-container'>
                <div className='header-left'>
                    <button className='btn-header'>
                        <AiOutlineArrowLeft/>
                    </button>
                    <button className='btn-header'>
                        <AiOutlineArrowRight/>
                    </button>
                    <form className='search'>
                        <div className='search-container'>
                            <button type='button' className='search-btn'>
                                <AiOutlineSearch/>
                            </button>
                            <div className='input-wrapper'>
                                <input type='text'
                                        placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV…'
                                            className='form-control'
                                        />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='header-right'>
                    <div className='header-right-item'>
                        <button onClick={() => setIsShowModal(!isShowModal)}>
                            <FaTshirt />
                        </button>
                    </div>
                    <div className='header-right-item'>
                        <a href='#'>
                            <BsUpload className='icon-setting'/>
                        </a>
                    </div>
                    <div className='header-right-item'>
                        <a href='#'>
                            <AiOutlineSetting className='icon-setting'/>
                        </a>
                    </div>
                    <div className='header-right-item'>
                        <img src={Img.avatarDefault} alt='avatar' className='avatar'/>
                    </div>
                </div>
            </div>
            {isShowModal && 
            <div className='modal-wrapper'>
                <div className='modal-content'>
                    <button className='close-btn' onClick={() => setIsShowModal(!isShowModal)}>
                        <AiOutlineClose/>
                    </button>
                    <h3 className='modal-title'>
                        giao diện
                    </h3>
                    <div className='modal-center'>
                        <h3 className='title'>
                            <span >
                                black
                            </span> pink
                        </h3>
                        <div className='content'>
                            {blackPink.map((item) => {
                                const {id,name,path,classname} = item;
                                return(
                                    <div key={id} className='blackpink-item'
                                        onClick={() => handleOnClick({classname})}
                                    >
                                        <div className='wrapper-img'>
                                            <img src={path} alt={name}></img>

                                        </div>
                                        <h6>{name}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>}

        </section>
    )
}

export default Header
