import React from 'react';
import {Svg, Line, Text} from 'react-native-svg';

const height = 25;
const vPadding = 5;

const TimeAxis = ({timeRange, width}) => {
    const lineBottom = height - vPadding;
    const textBottom = height - 2 * vPadding;
    const textSize = 50;

    return (
        <Svg {...{width, height}}>
            <Line
                x1={0}
                x2={width}
                y1={lineBottom}
                y2={lineBottom}
                strokeWidth={1}
                stroke="black"
            />
            <Text stroke="black" fontSize={12} x={0} y={textBottom}>
                {formatTime(timeRange[0])}
            </Text>
            <Text
                stroke="black"
                fontSize={12}
                x={width - textSize}
                y={textBottom}>
                {formatTime(timeRange[1])}
            </Text>
        </Svg>
    );
}

function formatTime(d) {
    return `${zeroPad(d.getHours())}:${zeroPad(d.getMinutes())}:${zeroPad(
        d.getSeconds(),
    )}`;
}

function zeroPad(num) {
    if (num <= 9) {
        return `0${num}`;
    }
    return `${num}`;
}

export default TimeAxis;
