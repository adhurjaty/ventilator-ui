import React from 'react';
import {Content} from 'native-base';
import MainTemplate from '../mainTemplate';
import GraphReading from '../Graphs/graphReading';

const TestBed = (props) => (
    <MainTemplate navigation={props.navigation} heading="Test Bed">
        <Content>
            <GraphReading label="02 Sat (Oxgm)" value={99.0} />
        </Content>
    </MainTemplate>
);

export default TestBed;
