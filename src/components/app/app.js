/**
 * Created by Andra on 14-Dec-16.
 */
import React, { Component } from 'react';
import Tab from '../tab/tab';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(id) {
        console.log(id);
    }

    render() {
        const tabsData = [
            {
                id: 1,
                selected: false,
                label: 'Layouts',
                iconUrl: 'http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png',
            },
            {
                id: 2,
                selected: true,
                label: 'Buttons',
                iconUrl: 'http://downloadicons.net/sites/default/files/notes-icon-54884.png',
            },
            {
                id: 3,
                selected: false,
                iconUrl: 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/24/Google-Drive-icon.png',
            },
        ];

        const tabs = tabsData.map((tabProps) =>
            <Tab {...tabProps} onClickHandler={this.onClickHandler} key={tabProps.id} />
        );

        return (
            <div>
                <div className="tabs">{tabs}</div>
            </div>
        );
    }

}
