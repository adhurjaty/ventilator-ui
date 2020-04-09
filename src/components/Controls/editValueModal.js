import React, {useState} from 'react';
import Modal from 'react-native-modalbox';
import {Icon, Button, Text, Picker} from 'native-base';
import {connectModal} from 'redux-modal';
import styled from 'styled-components';
import {displayFloat} from '../../utils/helpers';

const modalHeight = 400;
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

const FormContainer = styled.View`
    position: absolute;
    bottom: 30;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const ValueInput = styled.TextInput`
    font-size: 30;
    font-weight: bold;
    margin-bottom: 15px;
`;

const LabelText = styled.Text`
    font-size: 24px;
    margin-bottom: 10px;
`;

const ErrorText = styled.Text`
    height: 40px;
    font-size: 16px;
    color: red;
    padding: 0px 20px 0px 20px;
    text-align: center;
    margin-bottom: 30px;
`;

const SubmitButton = styled(Button)`
    align-self: center;
`;

const HeadingText = styled.Text`
    text-align: center;
    font-size: 20;
    font-weight: bold;
`;

const EditValueModal = ({
    show,
    handleHide,
    heading,
    valueOptions,
    optionIdx,
    validateAndSubmit,
}) => {
    let i = optionIdx || 0;
    let selectedOption = valueOptions[i];

    const [value, valueChanged] = useState(displayFloat(selectedOption.value));
    const [label, labelChanged] = useState(selectedOption.label);
    const [error, errorChanged] = useState('');

    const optionSelected = (newId) => {
        let option = valueOptions.find((x) => x.id === newId);
        labelChanged(option.label);
        valueChanged(option.value);
    };

    const onPress = () => {
        var errMessage = validateAndSubmit();
        if (errMessage) {
            errorChanged(errMessage);
        } else {
            handleHide();
        }
    };

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
                    <FormContainer>
                        <ValueInput
                            value={value}
                            keyboardType="numeric"
                            onChangeText={valueChanged}
                        />
                        {(() => {
                            if (valueOptions.length > 1) {
                                return (
                                    <Picker
                                        onValueChange={optionSelected}
                                        selectedValue={0}>
                                        {valueOptions.map((vo) => (
                                            <Picker.Item
                                                key={`${vo.label}-${vo.id}`}
                                                label={vo.label}
                                                value={vo.id}
                                            />
                                        ))}
                                    </Picker>
                                );
                            }
                            return <LabelText>{label}</LabelText>;
                        })()}
                        <ErrorText>{error}</ErrorText>
                        <SubmitButton onPress={onPress}>
                            <Text>Submit</Text>
                        </SubmitButton>
                    </FormContainer>
                </ContentContainer>
            </ModalPopup>
        </ModalContainer>
    );
};

export default connectModal({
    name: 'centerModal',
    destroyOnHide: true,
})(EditValueModal);
