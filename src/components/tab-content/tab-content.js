/**
 * Created by Andra on 01-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './tab-content.less';
import Subtab from '../subtab/subtab';

export default class TabContent extends Component {

    constructor(props) {
        super(props);
        this.onClickSubtabButtonHandler = this.onClickSubtabButtonHandler.bind(this);
    }

    onClickSubtabButtonHandler(id) {
    }

    render() {
        const tabs = this.props.tabs.map((subtabData) =>
            <Subtab {...subtabData} onClickSubtabButtonHandler={this.onClickSubtabButtonHandler} />
        );

        return (
            <div className="tab-content">
                <div className="title">{this.props.title}</div>
                {tabs}
            </div>
        );
    }
}

TabContent.propTypes = {
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
