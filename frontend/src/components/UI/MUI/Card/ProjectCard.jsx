import React from 'react';
import SmallButton from '../../SmallButton';
import { Link } from "react-router-dom";

import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const styles = theme => ({
  card: {
    margin: 'auto',
    maxWidth: 340,
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9,
    paddingTop: '100%', // 1:1,
  }
});

const ProjectCard = withStyles(styles)(({ classes, project }) => (
  <Card className={classes.card}>
    <CardHeader title={project.project} subheader="Red" />
    <CardMedia
      className={classes.media}
      image={project.imgURL}
      title="Grapefruit"
    />

    <CardContent>
      <Typography>{project.desc}</Typography>
      <Link to={{ pathname: project.route }}>
        <SmallButton label="Visite guidée" />
      </Link>
    </CardContent>
  </Card>
));

export default ProjectCard;