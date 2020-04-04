import React from 'react';
import PropTypes from 'prop-types';

const GraphReading = ({label, value}) => (
    <div>
        <div>{label}</div>
        <div>{value}</div>
    </div>
);

GraphReading.PropTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
};

export default GraphReading;
