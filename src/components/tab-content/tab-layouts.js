/**
 * Created by Andra on 09-Jan-17.
 */
import React, { Component } from 'react';
import TabContent from './tab-content';
import { SUBTAB_MAGAZINES, SUBTAB_TEMPLATES } from '../subtab/subtab';

export default class TabLayouts extends Component {
    render() {
        const subTabProps = [
            {
                id: SUBTAB_MAGAZINES,
                label: 'Magazines',
            },
            {
                id: SUBTAB_TEMPLATES,
                label: 'My templates',
            },
        ];

        return (
            <TabContent title="Layouts" tabs={subTabProps} selectedSubtab={SUBTAB_MAGAZINES} />
        );
    }
}
