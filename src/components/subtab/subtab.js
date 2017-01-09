/**
 * Created by Andra on 15-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './subtab.less';

export default class Subtab extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClickSubtabButtonHandler(this.props.id);
    }

    render() {
        console.log(this.props);
        let subtabClass = 'subtab';

        if (this.props.selected) {
            subtabClass += ' selected';
        }

        return (
            <div className={subtabClass} onClick={this.onClick}>
                <a href="#some-link">{this.props.label}</a>
            </div>
        );
    }
}

export const SUBTAB_MAGAZINES = 1;
export const SUBTAB_TEMPLATES = 2;
export const SUBTAB_SHOPPING = 3;
export const SUBTAB_SOCIAL = 4;


Subtab.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    selected: PropTypes.bool,
    onClickSubtabButtonHandler: PropTypes.func,
};

Subtab.defaultProps = {
    label: 'Subtab',
    selected: false,
    onClickSubtabButtonHandler: () => {},
};
