import React from 'react'
import {Link} from 'react-router-dom'
const NavMain = () => {
    return (
        <div className='nav-main'>
            <ul className='nav-main-list'>
                <li className='nav-main-item'>
                    <div className='nav-link main-active'>
                        <Link to='/mymusic' className='nav-link-child '>
                            tổng quan
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/song' className='nav-link-child'>
                            bài hát
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/playlist' className='nav-link-child'>
                            playlist
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/artist' className='nav-link-child'>
                            nghệ sĩ
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/album' className='nav-link-child'>
                            album
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/video' className='nav-link-child'>
                            mv
                        </Link>
                    </div>
                </li>
                <li className='nav-main-item'>
                    <div className='nav-link'>
                        <Link to='/mymusic/library/upload' className='nav-link-child'>
                            tải lên
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NavMain
