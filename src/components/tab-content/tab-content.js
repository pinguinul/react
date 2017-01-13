/**
 * Created by Andra on 01-Nov-16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {} from './tab-content.less';
import Subtab, { SUBTAB_MAGAZINES, SUBTAB_IMAGES_STOCK, SUBTAB_TEMPLATES } from '../subtab/subtab';
import Magazines from '../subtab/magazines';
import ImagesStock from '../subtab/images-stock';
import MyTemplates from '../subtab/templates';

export default class TabContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubtab: this.props.selectedSubtab,
        };
        this.onClickSubtabButtonHandler = this.onClickSubtabButtonHandler.bind(this);
    }

    onClickSubtabButtonHandler(id) {
        this.props.selectSubtab(id);
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

        let content = null;

        switch (this.props.selectedSubtab) {
            case SUBTAB_MAGAZINES:
                content = <Magazines />;
                break;
            case SUBTAB_IMAGES_STOCK:
                content = <ImagesStock />;
                break;
            case SUBTAB_TEMPLATES:
                content = <MyTemplates />;
                break;
            // case SUBTAB_SHOPPING:
            //     content = <Shopping />;
            //     break;
            default:
                break;
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
    selectedSubtab: PropTypes.number,
    selectSubtab: PropTypes.func,
};

TabContent.defaultProps = {
    selectedSubtab: 1,
    selectSubtab: () => {},
};
