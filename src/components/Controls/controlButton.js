import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {displayFloat} from '../../utils/helpers';

const buttonSize = 150;

const MainContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border: 1px solid black;
    border-radius: 5px;
    padding-top: ${buttonSize / 2 - 35}px;
`;

const ValueText = styled.Text`
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`;

const LabelText = styled.Text`
    font-size: 20px;
    padding-top: 10px;
`;

const ControlButton = ({value, label, onPress}) => (
    <Fragment>
        <MainContainer onPress={onPress}>
            <ValueText>{displayFloat(value)}</ValueText>
            <LabelText>{label}</LabelText>
        </MainContainer>
    </Fragment>
);

export default ControlButton;
