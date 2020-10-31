import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 120,
  },
});

export default function Project() {
  const classes = useStyles();
  const cardStyle = {
    height:'50%'
  }
  return (
    <div className="slider-container">
      <Typography variant="h2" gutterBottom>
       Key Projects
      </Typography>
      <div className='silder-items'>
        <div className="slider-item-div">
          <Card className={classes.root} style={cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.gyazo.com/b3f950299fc2ab09311973f5ae12d9af.gif"
              title="Dnd Spells Gif"
            />
            <CardContent>
              <Typography gutterBottom variant="h8" component="h2">
                Spell Compendium: Dungeon and Dragons 5th Edition
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A curated library of spells for the latest edition of the tabletop game, Dungeons and Dragons.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://jqly2.github.io/dndAPI/spell">Link</a>
            </Button>
          </CardActions>
          </Card>
        </div>

        <div className="slider-item-div">
          <Card className={classes.root} style={cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.gyazo.com/18ea089c4be31fe83254942525d729e1.gif"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h8" component="h2">
                Eureka Investment: City and Real Estate Aggerator.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              A visiual analytics for prime real estate currently based around the Bay Area.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            <a href="https://www.eurekainv.com/">Link</a>
            </Button>
          </CardActions>
          </Card>
        </div>

        <div className="slider-item-div">
          <Card className={classes.root} style={cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://gyazo.com/414a7b29a13fa9f32fae8e417da30356.gif"
              title="Figure"
            />
            <CardContent>
              <Typography gutterBottom variant="h8" component="h2">
                Figure
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                An Architecture Firm based in San Francisco 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            <a href="https://figure-design.github.io/landing-page/">Link</a>
            </Button>
          </CardActions>
          </Card>
        </div>
      </div>
    </div>
    
  );
}
