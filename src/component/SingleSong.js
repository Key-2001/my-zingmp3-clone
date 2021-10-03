import React,{useState,useEffect} from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FiMoreHorizontal,FiVolume2,FiRepeat } from 'react-icons/fi'
import { GiMicrophone } from 'react-icons/gi'
import {BiShuffle,BiSkipPrevious,BiSkipNext} from 'react-icons/bi'
import {GrCirclePlay} from 'react-icons/gr'
import {MdPlayCircleOutline,MdPauseCircleOutline} from 'react-icons/md'
import Profile from './Profile'

const SingleSong = ({id,name,singer,path,image,handleClickNext,
                    handleClickPrev,handleClickRepeat,
                    handleClickRandom,durationCurrentSong}) => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    
    
    const [isPlaying,setIsPlaying] = useState(false);
    const [isRepeat,setIsRepeat] = useState(false);
    const [isRandom,setIsRandom] = useState(false);
    const [isAudio,setIsAudio] = useState(true);
    const [durationSong,setDurationSong] = useState('');

    const handlePlay = () => {
        const play = $('.btn-play');
        const pause = $('.btn-pause');
        const audio = $('#audio');

        
        if(isPlaying===false){
            pause.classList.remove('none')
            play.classList.add('none')
            audio.play();
            setIsPlaying(true);
            
        }
        else{
            pause.classList.add('none');
            play.classList.remove('none');
            setIsPlaying(false)
            audio.pause();
            
            
        }
    }

    
    const handleInput = (e) => {
        const audio = $('#audio');
        const seekTime = audio.duration /100 * e.target.value;
        audio.currentTime = seekTime;
        
        
    }
    
    const handleShowRepeat = () => {
        let repeat = $('.btn.btn-repeat');
        
        
        if(isRepeat===false){
            repeat.classList.add('is-btn-click')
            setIsRepeat(true);
        }
        else{
            repeat.classList.remove('is-btn-click')
            setIsRepeat(false);
        }
    }
    
    const handleShowRandom = () => {
        let random = $('.btn-random');
        if(isRandom === false){
            random.classList.add('is-btn-click');
            setIsRandom(true);
        }
        else{
            random.classList.remove('is-btn-click');
            setIsRandom(false)
        }
    }
    useEffect(()=>{
        const audio = $('#audio')
        const cdThumb = $('#cd-thumb');
        const cdThumbAnimate = cdThumb.animate([
            {transform:'rotate(360deg)'}
        ],{
            duration:10000,
            iterations:Infinity
        });
        cdThumbAnimate.pause();
        if(isPlaying===true){
            audio.play();
            
        }
        else{
            audio.pause();
        }
        audio.onplay = () => {
            cdThumbAnimate.play();
        }
        audio.onpause = () => {
            cdThumbAnimate.pause();
        }
        
        
        
    },[id])

    useEffect(() => {
        const audio=$('#audio');
        const progress = $('#progress');
        
        progress.value = 0;
        audio.ontimeupdate = () =>{
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100);
                progress.value = progressPercent;
                
                

            }
        }
        
        
    },[])
    useEffect(()=>{
        const audio = $('#audio')
        audio.onended = () => {
            console.log(isRepeat);
            if(isRandom===true){
                handleClickRandom();
            }else if(isRepeat === true){
                handleClickRepeat();
            }else{
                handleClickNext();
            }
            audio.play();
        }
    },[isRepeat,isRandom])

    return (
        <div className='wrapper-single-song'>
            <div key={id} className='song-item' >
                <div className='song-center'>
                    <div className='cd'>
                        <img src={image} alt={name} className='img-size' id='cd-thumb'/>
                        
                    </div>
                    <div>
                        <span className='font-16'>{name}</span>
                        <a href='#'>{singer}</a>
                    </div>
                </div>
                <div className='option-song'>
                                        
                    <div className='icon like'>
                        <span>
                            <AiFillHeart className='font-icon-16'/>

                        </span>

                    </div>
                    <div className='icon more'>
                        <span>
                            <FiMoreHorizontal className='font-icon-16' />

                        </span>
                    </div>
                </div>
            </div>    
            <div className='audio-song'>
                <div className='control-song'>
                    <div className='btn btn-random' onClick={handleShowRandom}>
                        <BiShuffle className='font-icon-20'/>
                    </div>
                    <div className='btn btn-prev' onClick={handleClickPrev}>
                        <BiSkipPrevious className='font-icon-32'/>
                    </div>
                    <div className='btn btn-play' onClick={handlePlay}>
                        <MdPlayCircleOutline className='font-icon-40'/>
                        
                    </div>
                    <div className='btn btn-pause none' onClick={handlePlay}>
                        <MdPauseCircleOutline className='font-icon-40'/>
                    </div>
                    <div className='btn btn-next' onClick={handleClickNext}>
                        <BiSkipNext className='font-icon-32'/>
                    </div>
                    <div className='btn btn-repeat' onClick={handleShowRepeat}>
                        <FiRepeat className='font-icon-20'/>
                    </div>

                </div>
                <div className='wrapper-progress'>
                    <span className='current-time'></span>
                    <input  id='progress'
                            className='progress'
                            type='range'
                            
                            step='1'
                            min='0'
                            max='100' onInput ={(e) => handleInput(e)}/>
                    <span className='duration-time'>{durationCurrentSong}</span>
                    <audio id='audio' src={path}>
                        
                    </audio>
                </div>
            </div> 
            <div className='option-song-more'>
                <div className='option-song'>
                    <div className='icon micro'>
                        
                           <GiMicrophone className='font-icon-16 '/>
                    </div>
                    <div className='icon'>
                        <FiVolume2 className='font-icon-16'/>
                    </div>
                </div>
            </div>                 
        </div>
    )
}

export default SingleSong
