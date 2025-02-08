import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import ReadMoreCard from "./ReadMoreCard";
import Button from '@mui/material/Button';


const ReadMore = ({ text, style, children }) => {

    const [isReadMore, setIsReadMore] = useState(true);
    const [arrowRef, setArrowRef] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const callbackModal = () => {
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setArrowRef(event.currentTarget);
        setAnchorEl(anchorEl ? null : event.currentTarget);
        return;
    }

    const openPopup = Boolean(anchorEl);
    const id = openPopup ? "simple-popper" : undefined;


    return (
        <>
            <p>
                {isReadMore ? (
                    <Typography style={style} sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "8",
                        WebkitBoxOrient: "vertical",
                    }}>
                        {text.slice(0, 300)}...
                        <span
                            onClick={toggleReadMore}
                            className={`font-articulat_cf text-sm text-slate-500`}
                        >
                            lire plus
                        </span>
                    </Typography>

                ) : (
                    <Typography style={style} sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "48",
                        WebkitBoxOrient: "vertical",
                    }}>
                        {text}
                        <span
                            onClick={toggleReadMore}
                            className={`font-articulat_cf text-sm text-slate-500`}
                        >
                            &nbsp;lire moins
                        </span>
                    </Typography>

                )}
            </p>

            {/* 

            */}

        </>

    );
};

export default ReadMore;