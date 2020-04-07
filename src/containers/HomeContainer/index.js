import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {show} from 'redux-modal';
import Home from '../../components/Home';

const data = [
    {time: new Date(2020, 4, 1, 11, 0, 0), value: 0},
    {time: new Date(2020, 4, 1, 11, 0, 1), value: -0.1},
    {time: new Date(2020, 4, 1, 11, 0, 2), value: -0.2},
    {time: new Date(2020, 4, 1, 11, 0, 3), value: 2},
    {time: new Date(2020, 4, 1, 11, 0, 4), value: 3.1},
    {time: new Date(2020, 4, 1, 11, 0, 5), value: 4},
    {time: new Date(2020, 4, 1, 11, 0, 6), value: 4.5},
    {time: new Date(2020, 4, 1, 11, 0, 7), value: 5},
    {time: new Date(2020, 4, 1, 11, 0, 8), value: 0},
    {time: new Date(2020, 4, 1, 11, 0, 9), value: -0.1},
    {time: new Date(2020, 4, 1, 11, 0, 10), value: -0.2},
    {time: new Date(2020, 4, 1, 11, 0, 11), value: 2},
    {time: new Date(2020, 4, 1, 11, 0, 12), value: 3.1},
    {time: new Date(2020, 4, 1, 11, 0, 13), value: 4},
    {time: new Date(2020, 4, 1, 11, 0, 14), value: 4.5},
    {time: new Date(2020, 4, 1, 11, 0, 15), value: 5},
];

const allGraphs = [
    {
        name: 'O2 Sat (oxgm.)',
        data: data,
    },
    {
        name: 'PaO2',
        data: data,
    },
    {
        name: 'PaCO2',
        data: data,
    },
    {
        name: 'pH',
        data: data,
    },
    {
        name: 'HCO3',
        data: data,
    },
    {
        name: 'Cardiac Output',
        data: data,
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
