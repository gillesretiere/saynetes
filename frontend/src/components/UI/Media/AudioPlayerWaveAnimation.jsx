
import React, { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline"; // Optionnel : pour changer l'icône
import { sound_wave } from '../../../assets/img/index.js';
import classes from "./AudioPlayer.module.css";


const AudioPlayerWaveAnimation = ({ media_url, language, callbackAudio }) => {
    const [isReady, setIsReady] = useState(false);
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // Nouvel état pour l'animation

    useEffect(() => {
        const newAudio = new Audio(media_url);

        // Gestionnaires d'événements pour synchroniser l'état React
        const setPlay = () => setIsPlaying(true);
        const setPause = () => setIsPlaying(false);

        newAudio.addEventListener("play", setPlay);
        newAudio.addEventListener("pause", setPause);
        newAudio.addEventListener("ended", setPause);

        setAudio(newAudio);
        setIsReady(true);

        // Nettoyage pour éviter les fuites de mémoire
        return () => {
            newAudio.pause();
            newAudio.removeEventListener("play", setPlay);
            newAudio.removeEventListener("pause", setPause);
            newAudio.removeEventListener("ended", setPause);
        };
    }, [media_url]);

    useEffect(() => {
        callbackAudio(isPlaying);
    }, [isPlaying])

    function togglePlay() {
        if (!audio) return;
        return audio.paused ? audio.play() : audio.pause();
    }
// ... (gardez le reste du code identique : imports, state, useEffect)

return (
    <div className="flex items-center justify-center gap-3">
        {isReady && (
            <>
                <div onClick={togglePlay} className="cursor-pointer">
                    {isPlaying ? (
                        <PauseCircleOutlineIcon className="text-primary-main" sx={{ height: 70, width: 70 }} />
                    ) : (
                        <PlayCircleOutlineIcon className="text-gray-500 hover:text-[#FF2D55]" sx={{ height: 70, width: 70 }} />
                    )}
                </div>
            </>
        )}
    </div>
);
};

export default AudioPlayerWaveAnimation;
