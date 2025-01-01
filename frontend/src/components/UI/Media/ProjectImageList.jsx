import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ProjectImageList({ projects, minMediaSize, callBack }) {

  const handleClicked = (event) => { callBack(event.currentTarget.id) };

  const mq_xs = useMediaQuery('(min-width:0px)');
  const mq_sm = useMediaQuery('(min-width:600px)');
  const mq_md = useMediaQuery('(min-width:900px)');
  const mq_lg = useMediaQuery('(min-width:1200px)');
  const mq_xl = useMediaQuery('(min-width:1536px)');
  const dynamicStylesListItem = {
    ...mq_xs && { cols: 1, },
    ...mq_sm && { cols: 1, },
    ...mq_md && { cols: 2, },
    ...mq_lg && { cols: 3, },
    ...mq_xl && { cols: 3, },
  }

  return (
    <ImageList cols={dynamicStylesListItem.cols}>
      {projects.map((item) => (
        <ImageListItem key={item.item} id={item.href} onClick={handleClicked} >
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.project}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.project}
            subtitle={item.desc}
            actionIcon={
              <Tooltip title={item.desc} enterDelay={500} leaveDelay={200}>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.project}`}
                >
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            }
          />
        </ImageListItem>

      ))}
    </ImageList>
  );
}
