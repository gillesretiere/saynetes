import React, { useState, useEffect, } from "react";
import Popper from "@mui/material/Popper";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';



const ReadMore = ({ text, style, children }) => {

    const [isReadMore, setIsReadMore] = useState(true);
    const [isWorth, setIsWorth] = useState(false);
    const maxLength = 300;
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    useEffect(
        () => {
            if (text.length >= maxLength) {
                setIsWorth(true);
                setIsReadMore(true);

            } else {
                setIsWorth(false)
            }
        }, [text]
    );

    return (
        <>
            {isWorth ? (
                isReadMore ? (
                    <>
                        <Typography style={style} sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "8",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {text.slice(0, maxLength)}...

                        </Typography>
                        <span
                            onClick={toggleReadMore}
                            className={`font-articulat_cf text-sm text-primary-orange`}
                        >
                            lire plus
                        </span>
                    </>
                ) : (
                    <>
                        <Typography style={style} sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "48",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {text}

                        </Typography>
                        <span
                            onClick={toggleReadMore}
                            className={`font-articulat_cf text-sm text-primary-orange`}
                        >
                            &nbsp;lire moins
                        </span>
                    </>
                )
            ) : (
                <>
                    <Typography style={style} sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "48",
                        WebkitBoxOrient: "vertical",
                    }}>
                        {text}

                    </Typography></>
            )
            }


        </>

    );
};

export default ReadMore;