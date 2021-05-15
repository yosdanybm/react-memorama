import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from 'components/Card/Card';
import Icon from '@material-ui/core/Icon';
import styles from './cartStyle.js';
import cardImage from 'assets/images/card.png';
import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles(styles);

const Cart = (props) => {
  let { currentCart } = props;

  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <CustomCard onClick={() => setIsFlipped((prev) => !prev)}>
        <img src={cardImage} className={classes.back} />
      </CustomCard>

      <CustomCard onClick={() => setIsFlipped((prev) => !prev)}>
        <Icon className={classes.icon}>{currentCart.icon}</Icon>
      </CustomCard>
    </ReactCardFlip>
  );
};

Cart.propTypes = {
  currentCart: PropTypes.object,
};

export default Cart;
