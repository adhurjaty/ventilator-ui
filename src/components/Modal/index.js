import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Text,
    Left,
    Body,
    Right,
    Content,
} from 'native-base';
import {StatusBar} from 'react-native';
import styles from './styles';
import ListModal from './listModal';
import MainTemplate from '../mainTemplate';

export default class ModalBox extends Component {
    render() {
        return (
            <MainTemplate navigation={this.props.navigation} heading="Modal">
                <ListModal />
                <Button
                    block
                    style={styles.btnShowModal}
                    onPress={() => this.props.handleOpen('basicModal')}>
                    <Text>Basic Modal</Text>
                </Button>
                <Button
                    block
                    style={styles.btnShowModal}
                    onPress={() => this.props.handleOpen('topModal')}>
                    <Text>Position Top</Text>
                </Button>
                <Button
                    block
                    style={styles.btnShowModal}
                    onPress={() => this.props.handleOpen('centerModal')}>
                    <Text>Position Center</Text>
                </Button>
                <Button
                    block
                    style={styles.btnShowModal}
                    onPress={() => this.props.handleOpen('bottomModal')}>
                    <Text>Position Bottom</Text>
                </Button>
                <Button
                    block
                    style={styles.btnShowModal}
                    onPress={() => this.props.handleOpen('scrollModal')}>
                    <Text>Scroll Modal</Text>
                </Button>
            </MainTemplate>
        );
    }
}
