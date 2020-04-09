import React, { useState } from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';
import GraphList from '../Graphs/graphList';
import ControlButton from '../Controls/controlButton';
import {FlatList} from 'react-native';

const ButtonListContainer = styled(FlatList)`
    margin-top: 50px;
`;

const ButtonListItem = styled.View`
    flex: 0.5;
    margin-bottom: 50px;
`;

const createButton = (item) => (
    <ButtonListItem>
        <ControlButton
            value={item.value}
            label={item.label}
            heading={item.heading}
            onPress={item.onPress}
        />
    </ButtonListItem>
);

const TestBed = ({navigation, handleOpen}) => {
    const data = [
        {
            value: 5.0,
            label: 'cmH2O',
            heading: 'Pressure',
            onPress: () => handleOpen('centerModal'),
        },
        {
            value: 5.0,
            label: 'cmH2O',
            heading: 'Pressure',
            onPress: () => handleOpen('centerModal'),
        },
        {
            value: 5.0,
            label: 'cmH2O',
            heading: 'Pressure',
            onPress: () => handleOpen('centerModal'),
        },
        {
            value: 5.0,
            label: 'cmH2O',
            heading: 'Pressure',
            onPress: () => handleOpen('centerModal'),
        },
    ];

    return (
        <MainTemplate navigation={navigation} heading="Test Bed">
            <ButtonListContainer
                data={data}
                renderItem={({item}) => createButton(item)}
                keyExtractor={(item, i) => `${item.label}-${i}`}
                numColumns={2}
            />
        </MainTemplate>
    );
};

export default TestBed;
