/**
 * Created by Andra on 01-Nov-16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {} from './app.less';
import Tab from './components/tab/tab';
import Subtab from './components/subtab/subtab';
import Dropdown from './components/dropdown/dropdown';
import Slider from './components/slider/slider';

let tabsData;
let subtabsData;
let dropdownData;

const render = (myTabsData, mySubtabsData, myDropdownData) => {
    const tabs = myTabsData.map((tabData) =>
        (<Tab key={tabData.id} {...tabData} />)
    );

    const menu = mySubtabsData.map((myMenu) =>
        (<Subtab key={myMenu.id} {...myMenu} />)
    );

    ReactDOM.render(
        <div>
            <div className="top">
                <div className="tabs">{tabs}</div>
                <Dropdown options={myDropdownData} />
                <Slider value={47} />
            </div>
            <div className="menu-tabs">{menu}</div>
        </div>,
        document.getElementById('app')
    );
};

const onClickHandler = (id) => {
    tabsData.forEach(tab => {
        const myTab = tab;
        myTab.selected = myTab.id === id;
    });
    render(tabsData, subtabsData, dropdownData);
};

const onClickSubtabButtonHandler = (id) => {
    subtabsData.forEach(subtab => {
        const mySubtab = subtab;
        mySubtab.selected = mySubtab.id === id;
    });
    render(tabsData, subtabsData, dropdownData);
};

tabsData = [
    {
        id: 1,
        selected: false,
        label: 'Layouts',
        iconUrl: 'http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png',
        onClickHandler,
    },
    {
        id: 2,
        selected: true,
        label: 'Buttons',
        iconUrl: 'http://downloadicons.net/sites/default/files/notes-icon-54884.png',
        onClickHandler,
    },
    {
        id: 3,
        selected: false,
        iconUrl: 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/24/Google-Drive-icon.png',
        onClickHandler,
    },
];

subtabsData = [
    {
        id: 1,
        selected: true,
        label: 'Shopping',
        onClickSubtabButtonHandler,
    },
    {
        id: 2,
        selected: false,
        label: 'Social',
        onClickSubtabButtonHandler,
    },
    {
        id: 3,
        selected: false,
        onClickSubtabButtonHandler,
    },
];

dropdownData = [
    {
        id: 1,
        label: 'Public',
        handler: null,
    },
    {
        id: 2,
        label: 'Unlisted',
        handler: null,
    },
    {
        id: 3,
        label: 'Save',
        handler: null,
    },
];

render(tabsData, subtabsData, dropdownData);
