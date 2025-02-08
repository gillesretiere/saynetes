import React, { useState } from "react";

import Button from '@mui/material/Button';
import Popper from "@mui/material/Popper";


const ReadMoreCard = ({ text, callbackModal }) => {

    const [isReadMore, setIsReadMore] = useState(true);
    
    const closeButtonClickHandler = () => {
        callbackModal();
    }

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    return (
        <>
            <p>
                {isReadMore ? text.slice(0, 100) : text}
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "green" }}
                >
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        </>
    )
}

export default ReadMoreCard