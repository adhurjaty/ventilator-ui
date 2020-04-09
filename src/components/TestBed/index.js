import React, { useState } from 'react';
import {Content, View} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';
import GraphReadingRow from '../Graphs/graphReadingRow';
import styled from 'styled-components';
import LineGraph from '../Graphs/lineGraph';
import GraphList from '../Graphs/graphList';
import ControlButton from '../Controls/controlButton';
import EditValueModal from '../Controls/editValueModal';
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
    const [modal, changeModal] = useState(null);

    const handlePress = (newModal) => () => {
        changeModal(newModal);
        handleOpen('centerModal');
    };

    const dataItem = ({value, label, heading}) => {
        let options = [
            {
                value: value,
                label: label,
                id: 0,
            },
            {
                value: 4,
                label: 'other',
                id: 1,
            },
        ];
        return {
            value: value,
            label: label,
            heading: heading,
            onPress: handlePress(
                <EditValueModal initVal={value} valueOptions={options} />,
            ),
        };
    };

    const data = [
        dataItem({
            value: 5.0,
            label: 'cmH2O',
            heading: 'Pressure',
        }),
        dataItem({
            value: 8,
            label: 'Rate',
            heading: 'Rate / I:E Ratio',
            onPress: () => handleOpen('centerModal'),
        }),
        dataItem({
            value: 50,
            label: 'O2 %',
            heading: 'FI02',
            onPress: () => handleOpen('centerModal'),
        }),
        dataItem({
            value: 1.1,
            label: 'Liters',
            heading: 'TV / MY',
            onPress: () => handleOpen('centerModal'),
        }),
    ];

    return (
        <MainTemplate navigation={navigation} heading="Test Bed">
            {modal}
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
