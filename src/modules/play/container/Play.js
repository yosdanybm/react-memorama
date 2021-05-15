import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import styles from './playStyle.js';
import Board from '../components/Board';

const useStyles = makeStyles(styles);

const Play = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.container}>
        <Board />
      </main>
    </div>
  );
};

export default Play;
