import React from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';
import GraphList from '../Graphs/graphList';
import ControlButton from '../Controls/controlButton';

const TestBed = ({navigation, handleOpen}) => {
    return (
        <MainTemplate navigation={navigation} heading="Test Bed">
            <ControlButton
                value={5.0}
                label="cmH2O"
                heading="Pressure"
                onPress={() => handleOpen('centerModal')}
            />
        </MainTemplate>
    );
};

export default TestBed;
