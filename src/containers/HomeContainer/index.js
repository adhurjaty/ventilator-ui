import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {show} from 'redux-modal';
import Home from '../../components/Home';

const o2satData = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 92},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 91},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 89},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 91},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 94},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 99},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 97},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 98},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 99},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 99.3},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 99.5},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 98.4},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 81},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 88},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 85},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 99},
];

const paO2Data = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 100},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 120},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 140},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 160},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 170},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 177},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 174},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 179},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 188},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 210},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 205},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 210},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 199},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 194},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 190},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 179},
];

const paCo2Data = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 21},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 22},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 24},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 30},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 37},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 35},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 33},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 33},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 31},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 27},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 20},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 19},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 21},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 24},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 28},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 33},
];

const phData = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 7.1},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 7},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 7.1},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 7.2},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 7.25},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 7.3},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 7.34},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 7.42},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 7.5},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 7.3},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 7.25},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 7.3},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 7.43},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 7.5},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 7.4},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 7.35},
];

const hco3Data = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 22},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 21},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 25},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 28},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 26},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 19},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 21},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 24},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 28},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 30},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 25},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 22},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 19},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 18},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 16},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 19.1},
];

const cardOutputData = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 5.5},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: 5.8},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: 6.7},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 6.5},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 6.6},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 6.3},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 6.1},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 5.9},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 6.1},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: 6.3},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: 6.3},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 6.3},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 6.6},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 6.7},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 6.3},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 6.4},
];

const allGraphs = [
    {
        name: 'O2 Sat (oxgm.)',
        data: o2satData,
    },
    {
        name: 'PaO2',
        data: paO2Data,
    },
    {
        name: 'PaCO2',
        data: paCo2Data,
    },
    {
        name: 'pH',
        data: phData,
    },
    {
        name: 'HCO3',
        data: hco3Data,
    },
    {
        name: 'Cardiac Output',
        data: cardOutputData,
    },
];

class HomeContainer extends Component {
    handleOpen(modal) {
        this.props.show(modal, {message: `This is a ${modal} modal`});
    }

    render() {
        return (
            <Home
                handleOpen={(modal) => this.handleOpen(modal)}
                navigation={this.props.navigation}
                graphs={allGraphs}
            />
        );
    }
}

export default connect(null, (dispatch) =>
    bindActionCreators({show}, dispatch),
)(HomeContainer);
