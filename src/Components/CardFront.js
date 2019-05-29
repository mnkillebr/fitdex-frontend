import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CardFront = (props) => {
  return (
    <div>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.exercise.name}
          className="card-media"
          height="200"
          image={props.exercise.media}
          title={props.exercise.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.exercise.name}</Typography>
          <Typography component="p">{props.exercise.difficulty}</Typography>
        </CardContent>
      </CardActionArea>
    </div>
  )
}

export default CardFront;
