import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import styles from "assets/jss/boardStyle.js";

const useStyles = makeStyles(styles);

function Board() {
  const classes = useStyles();

  const carts = [...new Array(20)];

  return (
    <div className={classes.board}>
      <Grid container spacing={3}>
        {carts.map((cart) => {
          return (
            <Grid key={cart} item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Board;
