import React from 'react';
import PropTypes from 'prop-types';
import {
    Header,
    Left,
    Container,
    Button,
    Body,
    Title,
    Right,
    Icon,
    Content,
} from 'native-base';
import {StatusBar} from 'react-native';
import styles from './styles';

const MainTemplate = ({children, navigation, heading}) => (
    <Container style={styles.container}>
        <StatusBar translucent={false} />
        <Header
            noShadow
            iosBarStyle={'dark-content'}
            androidStatusBarColor={'#fff'}
            style={{borderBottomWidth: 1}}>
            <Left style={styles.headerLeft}>
                <Button transparent onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" style={{color: '#000'}} />
                </Button>
            </Left>
            <Body style={styles.headerBody}>
                <Title style={styles.textBody}>{heading}</Title>
            </Body>
            <Right style={styles.headerRight} />
        </Header>
        <Content>{children}</Content>
    </Container>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    navigation: PropTypes.element.isRequired,
    heading: PropTypes.string,
};

export default MainTemplate;
