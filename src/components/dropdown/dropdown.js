/**
 * Created by Andra on 16-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './dropdown.less';

export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMouseEnter() {
        this.setState({
            open: true,
        });
    }

    onMouseLeave() {
        this.setState({
            open: false,
        });
    }

    onClick(option) {
        this.setState({
            open: false,
        });
        if (option.handler) {
            option.handler();
        }
    }

    render() {
        if (!this.props.options) {
            return null;
        }

        let className = 'dropdown';

        if (this.state.open) {
            className += ' open';
        }

        const options = this.props.options.map((option, index) =>
            <li key={index} className="option">
                <a className={option.label.toLowerCase()} onClick={() => this.onClick(option)}>
                    {option.label}
                </a>
            </li>
        );

        return (
            <div className={className} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="text">Publish</div>
                <div className="arrow" />
                {this.state.open &&
                    <div className="dropdown-list">
                        {options}
                    </div>
                }
            </div>
        );
    }
}

Dropdown.propTypes = {
    options: PropTypes.array,
};

Dropdown.defaultProps = {
    options: [
        {
            label: 'Public',
            handler: null,
        },
        {
            label: 'Unlisted',
            handler: null,
        },
        {
            label: 'Save',
            handler: null,
        },
    ],
};

