/**
 * Created by Andra on 09-Jan-17.
 */
import React, { Component } from 'react';
import TabContent from './tab-content';
import { SUBTAB_SHOPPING, SUBTAB_SOCIAL } from '../subtab/subtab';

export default class TabButtons extends Component {
    render() {
        const subTabProps = [
            {
                id: SUBTAB_SHOPPING,
                label: 'Shopping',
            },
            {
                id: SUBTAB_SOCIAL,
                label: 'Social',
            },
        ];

        return (
            <TabContent title="Buttons" tabs={subTabProps} selectedSubtab={SUBTAB_SHOPPING} />
        );
    }
}
