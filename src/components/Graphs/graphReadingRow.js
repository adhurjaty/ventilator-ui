import React from 'react';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphReading from './graphReading';
import LineGraph from './lineGraph';

const screenWidth = Dimensions.get('window').width;

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
    position: relative;
    width: 35%;
    top: 10px;
`;

const GraphReadingRow = ({data, label}) => (
    <RowContainer>
        <GraphContainer>
            <LineGraph data={data} width={screenWidth * 0.65} height={90} />
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
    return data[data.length - 1].value;
}

export default GraphReadingRow;
