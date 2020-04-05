import React from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import {LineChart, Grid} from 'react-native-svg-charts';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';
import GraphList from '../Graphs/graphList';

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

const allGraphs = [
    {
        name: 'O2 Sat (oxgm.)',
        data: data,
    },
    {
        name: 'PaO2',
        data: data,
    },
    {
        name: 'PaCO2',
        data: data,
    },
    {
        name: 'pH',
        data: data,
    },
    {
        name: 'HCO3',
        data: data,
    },
    {
        name: 'Cardiac Output',
        data: data,
    },
];

const RowContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TestBed = (props) => (
    <MainTemplate navigation={props.navigation} heading="Test Bed">
        <GraphList graphs={allGraphs} />
    </MainTemplate>
);

export default TestBed;
