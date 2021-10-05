import React from "react";
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles({
    jumbotron: {
        color: 'white',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100'
    },
  });

const Hero = (props) => {

    const classes = useStyles();

  return (
    <div className={`jumbotron jumbotron-fluid ${classes.jumbotron}`} style={{ backgroundImage: `url(${props.image})`}}>
      <div className="container">
        <h1 className="display-4">{props.heading}</h1>
        <p className="lead">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Hero;
