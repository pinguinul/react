/**
 * Created by Andra on 13-Dec-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './slider.less';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: this.props.value,
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (
            <div className="slider">
                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    onChange={this.handleChange}
                    step={this.props.step}
                />
                <input
                    type="number"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    onChange={this.handleChange}
                    step={this.props.step}
                />
            </div>
        );
    }
}

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
};

Slider.defaultProps = {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
};
