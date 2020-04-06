import React, {PureComponent} from 'react';
import {Text, Separator} from 'native-base';
import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from 'accordion-collapse-react-native';
import styled from 'styled-components';
import MainTemplate from '../mainTemplate';
import GraphList from '../Graphs/graphList';

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

const HeaderText = styled.Text`
    font-size: 20;
    font-weight: bold;
    text-align: center;
`;

export default class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    heading: 'Monitors',
                    isOpen: true,
                    body: <GraphList graphs={allGraphs} />,
                },
                {
                    heading: 'Controls',
                    isOpen: false,
                    body: <Text>foo</Text>,
                },
            ],
        };

        this.accordionToggle = this.accordionToggle.bind(this);
        this.renderSection = this.renderSection.bind(this);
    }

    accordionToggle(section) {
        return (collapseState) => {
            let sections = this.state.sections.map((s) => {
                return Object.assign({}, s, {
                    isOpen: s === section && collapseState,
                });
            });

            console.log(section);
            this.setState({
                sections: sections,
            });
        };
    }

    renderSection(section, i) {
        // weirdly, isCollapsed is actually isOpen
        return (
            <Collapse
                key={`${section.heading}-${i}`}
                isCollapsed={section.isOpen}
                onToggle={this.accordionToggle(section)}>
                <CollapseHeader
                    style={{padding: 10, backgroundColor: '#E6E6E6'}}>
                    <HeaderText>{section.heading}</HeaderText>
                </CollapseHeader>
                <CollapseBody>{section.body}</CollapseBody>
            </Collapse>
        );
    }

    render() {
        return (
            <MainTemplate navigation={this.props.navigation} heading="Home">
                {this.state.sections.map(this.renderSection)}
            </MainTemplate>
        );
    }
}
