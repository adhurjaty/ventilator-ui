import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CenterModal from '../Controls/centerModal';
import {displayFloat} from '../../utils/helpers';

const MainContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
    padding-top: 25px;
`;

const ValueText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const LabelText = styled.Text`
    font-size: 16px;
    padding-top: 10px;
`;

const ControlButton = ({heading, value, label, onPress}) => (
    <Fragment>
        <CenterModal initVal={value} label={label} heading={heading} />
        <MainContainer onPress={onPress}>
            <ValueText>{displayFloat(value)}</ValueText>
            <LabelText>{label}</LabelText>
        </MainContainer>
    </Fragment>
);

export default ControlButton;
