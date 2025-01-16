import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {
    logo_dac,
    logo_asamla,
    hmrt_logo,
} from "../../../assets/img/index";


export default function PartenairesImageList() {
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    return (
        <>
            <ImageList sx={{ height: 140 }} cols={mq_md || mq_lg || mq_xl ? 2 : 1}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={1} rows={1}>
                        <img
                            srcSet={`${item.img}?w=248&fit=contain&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=contain&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.description}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

const itemData = [
    {
        img: `${logo_dac}`,
        title: 'DAC44',
        description: 'Rédaction des contenus, supervision, portage du projet',
        author: '@helloimnik',
    },
    {
        img: `${logo_asamla}`,
        title: 'ASAMLA',
        description: 'Traductions, voix des audios ,supervision, accompagnement du projet',
        author: '@bkristastucchio',
        featured: true,
    },



];