import React from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import {LineChart, Grid} from 'react-native-svg-charts';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';

const data = [
    0,
    -0.1,
    -0.2,
    2,
    3.1,
    4,
    4.5,
    5,
    0,
    -0.1,
    -0.2,
    2,
    3.1,
    4,
    4.5,
    5,
];

const RowContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TestBed = (props) => (
    <MainTemplate navigation={props.navigation} heading="Test Bed">
        <GraphReadingRow data={data} label="02 Sat (Oxgm.)" />
        {/* <LineGraph data={data} /> */}
        {/* <BarChartExample /> */}
        {/* <GraphReadingRow label="02 Sat (Oxgm)" data={data} /> */}
        {/* <RowContainer> */}
            {/* <LineChart
                style={{
                    height: 200,
                }}
                data={data}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 20, bottom: 20}}>
                <Grid />
            </LineChart> */}
        {/* </RowContainer> */}
    </MainTemplate>
);

export default TestBed;
