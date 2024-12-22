import React, { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";



const AudioPlayer = ({ media_url, language, }) => {

    const [isReady, setIsReady] = useState(false);
    const [audio, setAudio] = useState(null);


    useEffect(() => {
        setIsReady(true);
        setAudio(new Audio(
            media_url
        ));
    }, [media_url]);

    function togglePlay() {
        return audio.paused ? audio.play() : audio.pause();
    };

    return (
        <>
            {isReady &&
                <PlayCircleOutlineIcon sx={{ height: 38, width: 38 }} onClick={togglePlay}></PlayCircleOutlineIcon>
            }
        </>
    )
}

export default AudioPlayer