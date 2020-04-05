import React from 'react';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GraphReadingContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReadingLabel = styled.View`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    padding-bottom: 20px;
    z-index: 1;
`;

const ReadingValue = styled.View`
    position: relative;
    top: -12%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 25px 5px 25px;
    z-index: 2;
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
