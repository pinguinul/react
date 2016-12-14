/**
 * Created by Andra on 14-Dec-16.
 */
import React, { Component } from 'react';
import Tab from '../tab/tab';
import { connect } from 'react-redux';
import { selectTab } from '../../actions';

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
                id: 1,
                label: 'Layouts',
                iconUrl: 'http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png',
            },
            {
                id: 2,
                label: 'Buttons',
                iconUrl: 'http://downloadicons.net/sites/default/files/notes-icon-54884.png',
            },
            {
                id: 3,
                iconUrl: 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/24/Google-Drive-icon.png',
            },
        ];

        const tabs = tabsData.map((tabProps) =>
            <Tab {...tabProps} onClickHandler={this.onClickHandler} key={tabProps.id} selected={tabProps.id === this.props.selectedTab} />
        );

        return (
            <div>
                <div className="tabs">{tabs}</div>
            </div>
        );
    }

}

export default connect(
    ({tabs}) => {
        return {
            selectedTab: tabs,
        };
    },
    (dispatch) => {
        return {
            selectTab: (id) => {
                dispatch(selectTab(id));
            }
        }
    }
)(App);
