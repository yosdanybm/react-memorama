import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from 'components/card/CustomCard';
import Icon from '@material-ui/core/Icon';
import styles from './cartStyle.js';
import cardImage from 'assets/images/card.png';
import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles(styles);

const CardFlip = (props) => {
  let { currentCart, index, handleCardClick } = props;
  const classes = useStyles();

  return (
    <ReactCardFlip isFlipped={currentCart.isFlipped || currentCart.selected}>
      <CustomCard onClick={() => handleCardClick(index)}>
        <img src={cardImage} className={classes.back} />
      </CustomCard>

      <CustomCard onClick={() => handleCardClick(index)}>
        <Icon className={classes.icon}>{currentCart.icon}</Icon>
      </CustomCard>
    </ReactCardFlip>
  );
};

CardFlip.propTypes = {
  currentCart: PropTypes.object,
  index: PropTypes.number,
  handleCardClick: PropTypes.func,
};

export default memo(CardFlip);
