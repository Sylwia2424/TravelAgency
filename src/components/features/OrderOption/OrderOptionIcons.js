import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon.js';
import PropTypes from 'prop-types';


const OrderOptionIcons = props => (
  <div className={styles.icon}>
    {props.values.map(value => (
      <div
        key={value.id}
        className={`${styles.icon}
      ${props.currentValue === value.id ? styles.iconActive : ''}`}
        onClick={() => props.setOptionValue(value.id)}
      >
        <Icon name ={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;