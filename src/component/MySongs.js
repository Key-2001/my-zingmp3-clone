import React,{useState,useEffect} from 'react'
import {BsUpload,BsFillPlayFill, BsPeople} from "react-icons/bs";
import {AiOutlineRight,AiFillHeart} from "react-icons/ai"
import {songs} from '../data/songs'
import { id } from 'common-tags';
import {GiMicrophone} from 'react-icons/gi'
import {FcLike} from 'react-icons/fc'
import {FiMoreHorizontal} from 'react-icons/fi'
import SingleSong from './SingleSong';
import SlideSong from './SlideSong';


const MySongs = () => {
    const [listSong,setListSong] = useState(songs);
   
    const [currentSong,setCurrentSong] = useState(listSong[0]);
    
    
    

    

    const handleCurrentSong = (id) => {
        let curSong = listSong.filter((song) => song.id===id);
        
        console.log(curSong)
        setCurrentSong(() => {
            return{
                id:curSong[0].id,
                name:curSong[0].name,
                singer:curSong[0].singer,
                path:curSong[0].path,
                image:curSong[0].image,
                
            }
        })
        
    }

    const handleClickNext = () => {
        let curSong = listSong.find((song) => song.id === (currentSong.id+1));
        
        setCurrentSong(curSong);
        if(currentSong.id === listSong.length){
            setCurrentSong(listSong[0]);
        }

    }

    const handleClickPrev = () => {
        let curSong = listSong.find((song) => song.id === (currentSong.id-1));
        console.log(curSong)
        setCurrentSong(curSong);
        if(currentSong.id === 1){
            setCurrentSong(listSong[listSong.length-1]);
        }
    }

    const handleClickRepeat = () => {
        let curSong = listSong.find((song) => song.id === (currentSong.id))
        setCurrentSong(curSong);
    }

    const handleClickRandom = () => {
        let newId;
        do{
            newId = Math.floor(Math.random() * listSong.length)

        }while(newId === currentSong.id);
        let curSong = listSong.find((song) => song.id === newId);
        setCurrentSong(curSong);
    }

    

    

    return (
        <div className='songs'>
            <div className='song-header'>
                <a href='/mymusic/library/song'>
                    bài hát    <AiOutlineRight className='icon-song'/>
                </a>
                <div className='song-option'>
                    <a href='mymusic/library/upload'>
                        <BsUpload className='icon-song'/>  Tải lên
                    </a>
                    <button>
                        <BsFillPlayFill className='icon-song'/> phát tất cả
                    </button>
                </div>
            </div>
            <div className='song-body'>
                <div className='slider-song'>
                    <SlideSong listSong={listSong}/>
                </div>
                <div className='list-songs'>
                    <div className='center-list'>
                        {listSong.map((song,indexSong) => {
                            const {id,name,singer,path,image} = song;
                            const audio = new Audio(path) ;
                            
                            

                            return(
                                <div key={id} className='song-item' onClick={() => handleCurrentSong(id)}>
                                    <div className='song-center'>
                                        <img src={image} alt={name}/>
                                        <div>
                                            <span>{name}</span>
                                            <a href='#'>{singer}</a>
                                        </div>
                                    </div>
                                    <div className='duration-song'>
                                        
                                    </div>
                                    <div className='option-song'>
                                        <div className='icon micro'>
                                            <GiMicrophone />
                                        </div>
                                        <div className='icon like'>
                                            <span>
                                                <AiFillHeart />

                                            </span>
                                            
                                        </div>
                                        <div className='icon more'>
                                            <span>
                                                <FiMoreHorizontal />

                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
            <div className='current-song'>
                <SingleSong {...currentSong} handleClickNext={handleClickNext} 
                                        handleClickPrev={handleClickPrev} 
                                        handleClickRepeat={handleClickRepeat}
                                        handleClickRandom={handleClickRandom}
                                      
                                        />
            </div>
            
        </div>
    )
}

export default MySongs
