import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Svg, Line, Path, Text} from 'react-native-svg';
import * as d3 from 'd3';

const verticalPadding = 10;
const leftPadding = 5;
const rightPadding = 30;

const ChartContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

const LineGraph = ({data, width, height}) => {
    let domain = getDataTimeDomain(data);
    let range = getDataValueRange(data);

    const labelStart = width - rightPadding + 2 * leftPadding;

    const scaleX = d3
        .scaleTime()
        .domain(domain)
        .range([leftPadding, width - rightPadding]);
    const scaleY = d3
        .scaleLinear()
        .domain(range)
        .range([height - verticalPadding, verticalPadding]);
    const line = d3
        .line()
        .x((d) => scaleX(d.time))
        .y((d) => scaleY(d.value))(data);

    return (
        <ChartContainer>
            <Svg {...{width, height}}>
                <Path
                    d={line}
                    fill="transparent"
                    stroke="rgb(134, 65, 244)"
                    strokWidth={5}
                />
                {createBorder(width, height)}
                {createYAxisLabels(range, scaleY, labelStart)}
            </Svg>
        </ChartContainer>
    );
};

function getDataTimeDomain(data) {
    if (!data || data.length === 0) {
        return [new Date(), new Date()];
    }
    if (data.length === 1) {
        return [data[0].time, data[0].time];
    }
    return [data[0].time, data[data.length - 1].time];
}

function getDataValueRange(data) {
    if (!data || data.length === 0) {
        return [0, 0];
    }
    let values = data.map((x) => x.value);
    return [Math.min(...values), Math.max(...values)];
}

// function getPaddedRange(range) {
//     let rangeSize = range[1] - range[0];
//     var rangePadding = valuePadding * rangeSize;
//     return [range[0] - rangePadding, range[1] + rangePadding];
// }

function createBorder(width, height) {
    const left = 0;
    const right = width - rightPadding + leftPadding;
    const borderThickness = 1;
    const borderBrush = 'black';

    return (
        <Fragment>
            <Line
                x1={left}
                x2={right}
                y1={0}
                y2={0}
                strokeWidth={borderThickness}
                stroke={borderBrush}
            />
            <Line
                x1={left}
                x2={right}
                y1={height}
                y2={height}
                strokeWidth={borderThickness}
                stroke={borderBrush}
            />
            <Line
                x1={left}
                x2={left}
                y1={0}
                y2={height}
                strokeWidth={borderThickness}
                stroke={borderBrush}
            />
            <Line
                x1={right}
                x2={right}
                y1={0}
                y2={height}
                strokeWidth={borderThickness}
                stroke={borderBrush}
            />
        </Fragment>
    );
}

function createYAxisLabels(range, scaleY, x) {
    return (
        <Fragment>
            <Text
                fill="black"
                stroke="black"
                fontSize={12}
                x={x}
                y={scaleY(range[0])}>
                {range[0]}
            </Text>
            <Text
                fill="black"
                stroke="black"
                fontSize={12}
                x={x}
                y={scaleY(range[1])}>
                {range[1]}
            </Text>
        </Fragment>
    );
}

LineGraph.PropTypes = {
    data: PropTypes.arrayOf(
        PropTypes.objectOf({
            time: PropTypes.instanceOf(Date),
            value: PropTypes.number,
        }),
    ),
    width: PropTypes.number,
    height: PropTypes.number,
};

export default LineGraph;
