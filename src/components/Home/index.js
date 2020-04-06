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
                    body: <GraphList graphs={this.props.graphs} />,
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
