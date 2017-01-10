/**
 * Created by Andra on 01-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import {} from './tab-content.less';
import Subtab, { SUBTAB_MAGAZINES, SUBTAB_SHOPPING, SUBTAB_SOCIAL, SUBTAB_TEMPLATES } from '../subtab/subtab';
import Magazines from '../subtab/magazines';

export default class TabContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubtab: this.props.selectedSubtab,
        };
        this.onClickSubtabButtonHandler = this.onClickSubtabButtonHandler.bind(this);
    }

    onClickSubtabButtonHandler(id) {
        this.setState({
           selectedSubtab: id,
        });
    }

    render() {
        const tabs = this.props.tabs.map((subtabData) =>
            <Subtab
                {...subtabData}
                onClickSubtabButtonHandler={this.onClickSubtabButtonHandler}
                key={subtabData.id}
                selected={this.state.selectedSubtab === subtabData.id}
            />
        );

        console.log(tabs);

        let content = null;

        switch (this.props.selectedSubtab) {
            case SUBTAB_MAGAZINES:
                content = <Magazines />;
                break;
            // case SUBTAB_SHOPPING:
            //     content = <Shopping />;
            //     break;
        }

        return (
            <div className="tab-content">
                <div className="title">{this.props.title}</div>
                {tabs}
                {content}
            </div>
        );
    }
}

TabContent.propTypes = {
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
