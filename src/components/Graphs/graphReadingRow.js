import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphReading from './graphReading';
import LineGraph from './lineGraph';

const RowContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const GraphReadingRow = ({data, label}) => (
    <RowContainer>
        <LineGraph data={data} />
        <GraphReading label={label} value={lastDataValue(data)} />
    </RowContainer>
);

function lastDataValue(data) {
    if (!data || data.length === 0) {
        return 0;
    }
    return data[data.length - 1];
}

export default GraphReadingRow;
