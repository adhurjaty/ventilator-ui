import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {show} from 'redux-modal';
import TestBed from '../../components/TestBed';

class TestBedContainer extends Component {
    handleOpen(modal) {
        this.props.show(modal, {message: `This is a ${modal} modal`});
    }

    render() {
        return (
            <TestBed
                handleOpen={(modal) => this.handleOpen(modal)}
                navigation={this.props.navigation}
            />
        );
    }
}

export default connect(null, (dispatch) =>
    bindActionCreators({show}, dispatch),
)(TestBedContainer);
