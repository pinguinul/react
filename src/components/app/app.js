/**
 * Created by Andra on 14-Dec-16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Tab, { TAB_LAYOUTS, TAB_BUTTONS, TAB_IMAGES } from '../tab/tab';
import { selectTab } from '../../actions';
import TabLayouts from '../tab-content/tab-layouts';
import TabButtons from '../tab-content/tab-buttons';

class App extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(id) {
        this.props.selectTab(id);
    }

    render() {
        const tabsData = [
            {
                id: TAB_LAYOUTS,
                label: 'Layouts',
                iconUrl: 'http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png',
            },
            {
                id: TAB_BUTTONS,
                label: 'Buttons',
                iconUrl: 'http://downloadicons.net/sites/default/files/notes-icon-54884.png',
            },
            {
                id: TAB_IMAGES,
                label: 'Images',
                iconUrl: 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/24/Google-Drive-icon.png',
            },
        ];

        const tabs = tabsData.map((tabProps) =>
            <Tab
                {...tabProps}
                onClickHandler={this.onClickHandler}
                key={tabProps.id}
                selected={tabProps.id === this.props.selectedTab}

            />
        );

        let content = null;

        switch (this.props.selectedTab) {
            case TAB_LAYOUTS:
                content = <TabLayouts />;
                break;
            case TAB_BUTTONS:
                content = <TabButtons />;
                break;
            default:
                content = <TabLayouts />;
        }

        return (
            <div>
                <div className="tabs">
                    {tabs}
                </div>
                {content}
            </div>
        );
    }

}

App.propTypes = {
    selectTab: PropTypes.func.isRequired,
    selectedTab: PropTypes.number.isRequired,
};

export default connect(
    // mapStateToProps
    ({ tabs }) => ({
        selectedTab: tabs.selectedTab,
    }),
    // mapPropsToDispatch
    (dispatch) => ({
        selectTab: (id) => {
            dispatch(selectTab(id));
        },
    })
)(App);
