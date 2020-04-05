import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {LineChart, YAxis} from 'react-native-svg-charts';

const screenWidth = Dimensions.get('window').width;

const ChartContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

const LineGraph = ({data}) => {
    const contentInset = {top: Math.max(...data), bottom: Math.min(...data)};

    return (
        <ChartContainer>
            <LineChart
                style={{height: 100, width: screenWidth * 0.6}}
                data={data}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 20, bottom: 20}}
            />
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 12,
                }}
                numberOfTicks={1}
                formatLabel={(value) => `${value}`}
            />
        </ChartContainer>
    );
};

export default LineGraph;
