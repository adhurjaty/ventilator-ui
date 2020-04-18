import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import GraphReadingRow from './graphReadingRow';
import {getDataTimeDomain} from './graphUtils';
import TimeAxis from './timeAxis';
import {graphWidth} from './graphValues';
import {GraphColors} from '../Common/common';

const GraphList = ({graphs}) => {
    if (!graphs || graphs.length === 0) {
        throw new Error('Must supply graphs');
    }
    const axisWidth = graphWidth - 5;

    // assume all graphs have same time range
    const timeRange = getDataTimeDomain(graphs[0].data);

    const gl = graphs.map((graph, i) => (
        <GraphReadingRow
            key={`${graph.name}-${i}`}
            label={graph.name}
            data={graph.data}
            color={GraphColors[i]}
        />
    ));

    return (
        <Fragment>
            <TimeAxis timeRange={timeRange} width={axisWidth} />
            {gl}
        </Fragment>
    );
};

GraphList.PropTypes = {
    graphs: PropTypes.arrayOf(
        PropTypes.objectOf({
            name: PropTypes.string,
            data: PropTypes.arrayOf(PropTypes.number),
        }),
    ),
};

export default GraphList;
