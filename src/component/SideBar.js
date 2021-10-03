import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <section className='side-bar'>
            <div className='side-bar-logo'>
                <img src='https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg' alt='logo'/>
            </div>
            <div className='nav-bar'>
                <ul className='nav-menu'>
                    <li className='nav-item is-active'>
                        <Link to='/' className='link'>
                            <a title='Cá Nhân'>
                                <span>cá nhân</span>
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a title='Khám Phá '>
                            <span>khám phá</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a title='#zingchart'>
                            <span>#zingchart</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a title='Radio'>
                            <span>radio</span>
                            <span className='live-item'>live</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a title='Theo Dõi'>
                            <span>theo dõi</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='underline'></div>
            <div className='wrapper-nav-bottom'>  
                <div className='nav-bar nav-scroll'>
                    <ul className='nav-menu'>
                        <li className='nav-item '>
                            <a title='Nhạc Mới'>
                                <span>nhạc mới</span>
                            </a>
                        </li>
                        <li className='nav-item '>
                            <a title='Thể Loại'>
                                <span>thể loại</span>
                            </a>
                        </li>
                        <li className='nav-item '>
                            <a title='Top 100'>
                                <span>top 100</span>
                            </a>
                        </li>
                        <li className='nav-item '>
                            <a title='MV'>
                                <span>MV</span>
                            </a>
                        </li>
                    </ul>
                    <div className='vip-banner-sidebar'>
                        <div className='text'>Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
                        <a href="#">mua vip</a>
                    </div>
                    <div className='library-sidebar'>
                        <div className='title-library'>
                            thư viện
                        </div>
                        <ul className='list-library'>
                            <li className='item-library'>
                                <a href='#'>
                                    <i className='icon'>
                                        <img src='https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg' alt='song'/>
                                    </i>
                                    <span>Bài hát</span>
                                </a>
                            </li>
                            <li className='item-library'>
                                <a href='#'>
                                    <i className='icon'>
                                        <img src='https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg' alt='playlist'/>
                                    </i>
                                    <span>Playlist</span>
                                </a>
                            </li>
                            <li className='item-library'>
                                <a href='#'>
                                    <i className='icon'>
                                        <img src='https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-album.24e3332b.svg' alt='album'/>
                                    </i>
                                    <span>Album</span>
                                </a>
                            </li>
                            {/* <li className='item-library'>
                                <a href='#'>
                                    <i className='icon'>
                                        <img src='' alt='song'/>
                                    </i>
                                    <span>Bài hát</span>
                                </a>
                            </li> */}
                            <li className='item-library'>
                                <a href='#'>
                                    <i className='icon'>
                                        <img src='https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg' alt='recently'/>
                                    </i>
                                    <span>Gần đây</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBar
