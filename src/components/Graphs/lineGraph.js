import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {View} from 'native-base';
import {LineChart, YAxis} from 'react-native-svg-charts';
import { max, min } from 'moment';

const screenWidth = Dimensions.get('window').width;

const ChartContainer = styled.View`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
`;

const StyledLineChart = styled.LineChart`
    height: 150;
    width: screenWidth * 0.6;
`;

const LineGraph = ({data}) => {
    const contentInset = {top: Math.max(...data), bottom: Math.min(...data)};

    return (
        <ChartContainer>
            <StyledLineChart
                data={data}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 20, bottom: 20}} />
            <YAxis
                data={data}
                contentInset={contentInset}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={2}
                formatLabel={(value) => `${value}`}
            />
        </ChartContainer>
    );
};

export default LineGraph;
