import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {
    saynetes_section_languages,
    saynetes_section_stories,
    langdeck_projects_saynetes_smart,
} from "../../../assets/img/index";


export default function CardSystemImageList() {

    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');

    return (
        <ImageList sx={{ height: 350 }} cols={mq_md || mq_lg || mq_xl ? 3 : 1}>
            {/* 
            <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      
      */}

            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={1} rows={1}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
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
    );
}

const itemData = [
    {
        img: `${saynetes_section_languages}`,
        title: '1 : Choix d\'une langue',
        description: 'Français, roumain, russe, anglais, arabe, turc...',
        author: '@helloimnik',
    },
    {
        img: `${saynetes_section_stories}`,
        title: '2 : Choix d\'une saynète',
        description: 'Parmi une sélection de plusieurs histoires déjà disponibles',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: `${langdeck_projects_saynetes_smart}`,
        title: '3 : Apprentissage du vocabulaire',
        description: 'Système de mots-clés surlignés avec explication texte + audio',
        author: '@rollelflex_graphy726',
    },


];