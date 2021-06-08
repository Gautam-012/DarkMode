import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Dark from "./dark"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
    position: "relative",
    margin: "10rem 2rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Information Card
        </Typography>
        <Typography variant="h5" component="h2">
          Think{bull}Create{bull}Explore{bull}Discover
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         
        </Typography>
        <Typography variant="body2" component="p">
        Experience is the name everyone gives to their mistakes.
          <br />
          {'"Keep learning"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      );
    }
    
    //   <Dark/>