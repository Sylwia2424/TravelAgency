import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderSummary = props => {
  return (
    <h2 className={styles.component}>
      Total: <strong>{calculateTotal(formatPrice(props.tripCost), props.options)}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderSummary;