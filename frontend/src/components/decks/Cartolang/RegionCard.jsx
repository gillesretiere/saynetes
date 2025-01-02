import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import classes from "./card.module.css";

export default function RegionCard({ card }) {
    const { region_uid, region_name, region_name_fr, region_picture, } = card;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <Link to={`/`}>
                <div className={`${classes.card}`}>
                    <CardMedia
                        component="img"
                        sx={{
                            display: 'flex', marginLeft: "auto",
                            marginRight: "auto", maxWidth: 150, borderRadius: '9999px',
                            width: '5rem', height: '5rem',
                            boxShadow: 3
                        }}

                        image={region_picture}
                        title={region_picture}
                    />
                </div>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {region_name}
                </Typography>
                <Typography variant="subtitle1">
                    {region_name_fr}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="button" href={`/`}>Choisir</Button>
            </CardActions>
        </Card>
    );
}