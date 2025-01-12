import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {
  langdeck_projects_saynetes_smart,
  langdeck_projects_cartolang_smart,
  langdeck_projects_dialango_smart,
} from "../../../assets/img/index";


export default function TitlebarImageList() {
  return (
    <ImageList sx={{ height: 450 }}>
      {/* 
            <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      
      */}

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
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
    img: `${langdeck_projects_saynetes_smart}`,
    title: 'Les Saynètes',
    author: '@helloimnik',
    rows: 2,
    cols: 1,
  },
  {
    img: `${langdeck_projects_cartolang_smart}`,
    title: 'Cartolang',
    author: '@bkristastucchio',
    featured: true,
    rows: 2,
    cols: 3,
  },
  {
    img: `${langdeck_projects_dialango_smart}`,
    title: 'Dialango',
    author: '@rollelflex_graphy726',
    rows: 2,
    cols: 1,
  },


];