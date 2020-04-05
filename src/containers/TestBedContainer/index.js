import React, {Component} from 'react';
import TestBed from '../../components/TestBed';

const TestBedContainer = ({navigation}) => <TestBed navigation={navigation} />;

export default TestBedContainer;

// export default class TestBedContainer extends Component {
//     render() {
//         return <TestBed navigation={this.props.navigation} />;
//     }
// }
