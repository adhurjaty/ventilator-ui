import React from 'react';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GraphReadingContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ReadingLabel = styled.View`
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px 5px 17px 5px;
    width: 100%;
    align-items: center;
`;

const ReadingValue = styled.View`
    position: relative;
    top: -20%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 25px 5px 25px;
    z-index: 2;
    text-align: center;
`;

const GraphReading = ({label, value}) => (
    <GraphReadingContainer>
        <ReadingLabel>
            <Text>{label}</Text>
        </ReadingLabel>
        <ReadingValue style={{backgroundColor: 'white'}}>
            <Text>{formatValue(value)}</Text>
        </ReadingValue>
    </GraphReadingContainer>
);

GraphReading.PropTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
};

function formatValue(val) {
    return val.toFixed(1);
}

export default GraphReading;
