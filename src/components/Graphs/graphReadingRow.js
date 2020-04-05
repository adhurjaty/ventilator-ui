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
    padding: 10px;
`;

const GraphContainer = styled.View`
    width: 65%;
`;

const ValueContainer = styled.View`
    width: 35%;
`;

const GraphReadingRow = ({data, label}) => (
    <RowContainer>
        <GraphContainer>
            <LineGraph data={data} />
        </GraphContainer>
        <ValueContainer>
            <GraphReading label={label} value={lastDataValue(data)} />
        </ValueContainer>
    </RowContainer>
);

function lastDataValue(data) {
    if (!data || data.length === 0) {
        return 0;
    }
    return data[data.length - 1];
}

export default GraphReadingRow;
