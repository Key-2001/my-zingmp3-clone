import React,{useState,useEffect} from 'react'

const SlideSong = ({listSong}) => {
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        let lastIndex = listSong.length - 1;
        if(index === listSong.length){
            setIndex(0);
        }
        if(index<0){
            setIndex(lastIndex);
        }
    },[index])

    useEffect(() => {
        let slide = setInterval(() => setIndex(index+1),3000);
        return()=>{
            clearInterval(slide);
        }
    },[index])
    return (
        <>
            {listSong.map((song,songIndex) => {
                const{id,image,name} = song;
                let position = 'second-slider';
                if(index === songIndex){
                    position='first-slider'
                }
                if(songIndex === index -2 || (index === 0 && songIndex === listSong.length-2)||(index===1 && songIndex===listSong.length-1)){
                    position='third-slider'
                }
                return(
                    <div key={id} className='slider-item'>
                        <img src={image} alt={name} className={`img-song ${position}`}/>
                    </div>
                )
            })}

        </>
    )
}

export default SlideSong
