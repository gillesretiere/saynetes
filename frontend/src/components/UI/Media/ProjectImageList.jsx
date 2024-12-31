import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';


export default function ProjectImageList( {projects, matches, } ) {
  return (
    <ImageList variant="masonry" cols={matches ? 1 : 3}>
      {projects.map((item) => (
        <ImageListItem key={item.item} >
          <img
            srcSet={`${item.imgURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.imgURL}?w=248&fit=crop&auto=format`}
            alt={item.project}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.project}
            subtitle={item.desc}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.project}`}
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
