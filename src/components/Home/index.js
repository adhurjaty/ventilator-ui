import React, {Component} from 'react';
import {Text} from 'native-base';
import MainTemplate from '../mainTemplate';

export default class Home extends Component {
    render() {
        return (
            <MainTemplate navigation={this.props.navigation} heading="Home">
                <Text style={{alignSelf: 'center', marginTop: 10}}>
                    React Native Starter Kit v2.7.2
                </Text>
            </MainTemplate>
        );
    }
}
