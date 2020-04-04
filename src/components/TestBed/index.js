import React from 'react';
import {Text} from 'native-base';
import MainTemplate from '../mainTemplate';

const TestBed = (props) => (
    <MainTemplate navigation={props.navigation} heading="Test Bed">
        <Text>foo</Text>
    </MainTemplate>
);

export default TestBed;
