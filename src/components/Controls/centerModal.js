import React, {useState} from 'react';
import Modal from 'react-native-modalbox';
import {Icon, Button, Text} from 'native-base';
import {connectModal} from 'redux-modal';
import styled from 'styled-components';
import {displayFloat} from '../../utils/helpers';

const modalHeight = 300;
const modalWidth = 300;

const ModalContainer = styled.View`
    flex: 1;
    background-color: #fff;
`;

const ModalHeader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: lightgreen;
    top: 0;
    left: 0;
    height: 45;
    width: 100%;
`;

const ModalPopup = styled(Modal)`
    height: ${modalHeight};
    width: ${modalWidth};
    justify-content: center;
    align-items: center;
    background-color: #dcdcdc;
`;

const ContentContainer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #dcdcdc;
    height: ${modalHeight};
    width: ${modalWidth};
`;

const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    left: 0;
`;

const ButtonIcon = styled(Icon)`
    color: #000000;
`;

const ValueInput = styled.TextInput`
    position: absolute;
    top: ${modalHeight / 2 - 50};
    font-size: 30;
    font-weight: bold;
`;

const LabelText = styled.Text`
    position: relative;
    top: 50;
    font-size: 24px;
`;

const SubmitButton = styled(Button)`
    position: relative;
    align-self: center;
    top: 90;
`;

const HeadingText = styled.Text`
    text-align: center;
    font-size: 20;
    font-weight: bold;
`;

const CenterModal = ({show, handleHide, heading, initVal, label}) => {
    const [value, valueChanged] = useState(displayFloat(initVal));

    return (
        <ModalContainer>
            <ModalPopup
                coverScreen={true}
                position="center"
                isOpen={show}
                onClosed={handleHide}>
                <ContentContainer>
                    <ModalHeader>
                        <CloseButton transparent onPress={handleHide}>
                            <ButtonIcon name="close" />
                        </CloseButton>
                        <HeadingText>{heading}</HeadingText>
                    </ModalHeader>
                    <ValueInput
                        value={value}
                        keyboardType="numeric"
                        onChangeText={valueChanged}
                    />
                    <LabelText>{label}</LabelText>
                    <SubmitButton onPress={onPress}>
                        <Text>Submit</Text>
                    </SubmitButton>
                </ContentContainer>
            </ModalPopup>
        </ModalContainer>
    );
};

function onPress() {
    console.log('pressed');
}

export default connectModal({
    name: 'centerModal',
    destroyOnHide: true,
})(CenterModal);
