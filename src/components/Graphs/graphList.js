import React from 'react';
import PropTypes from 'prop-types';
import GraphReadingRow from './graphReadingRow';

const GraphList = ({graphs}) => {
    return graphs.map((graph, i) => (
        <GraphReadingRow
            key={`${graph.name}-${i}`}
            label={graph.name}
            data={graph.data}
        />
    ));
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
