import React from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';
import GraphList from '../Graphs/graphList';

const data = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 0},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: -0.1},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: -0.2},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 2},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 3.1},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 4},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 4.5},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 5},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 0},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: -0.1},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: -0.2},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 2},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 3.1},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 4},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 4.5},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 5},
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
        {/* <LineGraph data={allGraphs[0].data} width={350} height={200} /> */}
        <GraphList graphs={allGraphs} />
    </MainTemplate>
);

export default TestBed;
