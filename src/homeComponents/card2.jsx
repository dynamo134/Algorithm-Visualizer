import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from '@material-ui/core/IconButton';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import "./style.css";
import { ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";

/* -----useStyles creates styles using the makeStyles hook.
  Styles for the card, media, expand icon, and action area are defined.-----------*/
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 350,
    maxWidth: 350,
    minHeight: 200,
    borderRadius: 5,
    '&:hover': {
      boxShadow: `0 6px 12px 0 #000000
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
    },
  },
  media: {
    height: 100
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actionArea: {
    padding: 15,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));



export default function ImgMediaCard2(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
//   The state variable expanded and the function handleExpandClick are created using the useState hook to manage the expansion state of the card.
// The component returns a Material-UI Card with an CardActionArea and various other Material-UI components.
// The card includes an image, a title, and a description.
// The card is wrapped in a Link component, creating a link to the specified route.
// An expandable section is added to display additional content when the user clicks on an expand icon.
return (
    <CardActionArea className={classes.actionArea} m={20}>
      <Card className={classes.card}>
        <Link to={props.card.route}>
          <CardMedia
            component="img"
            alt={props.card.title}
            height="250"
            src={props.card.img}
          />
        </Link>
        <CardHeader
          title={props.card.title}
          style={{ backgroundColor: "gray" ,color :"white", padding:10}}
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ backgroundColor: "gray" ,color:"white"}}>
            <Typography>
              {props.card.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CardActionArea>
  );
}
