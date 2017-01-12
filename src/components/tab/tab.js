/**
 * Created by Andra on 01-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './tab.less';

export default class Tab extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClickHandler(this.props.id);
    }

    render() {
        let tabClass = 'tab';
        const iStyle = {
            background: `url(${this.props.iconUrl})`,
        };

        if (this.props.selected) {
            tabClass += ' selected';
        }

        return (
            <div className={tabClass} onClick={this.onClick}>
                <a>
                    <span>
                        <i style={iStyle} />
                        <label htmlFor="name">{this.props.label}</label>
                    </span>
                </a>
            </div>
        );
    }
}

export const TAB_LAYOUTS = 1;
export const TAB_BUTTONS = 2;
export const TAB_IMAGES = 3;

Tab.propTypes = {
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    label: PropTypes.string,
    iconUrl: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
};

Tab.defaultProps = {
    selected: false,
    label: 'Tab',
    onClickHandler: () => {},
};
