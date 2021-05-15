import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

import styles from './cardStyle.js';

const useStyles = makeStyles(styles);

export default function CustomCard(props) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [className]: className !== undefined,
  });

  return (
    <Card className={cardClasses} {...rest}>
      <CardContent className={classes.content}>{children}</CardContent>
    </Card>
  );
}

CustomCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
