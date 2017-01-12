/**
 * Created by dodo on 11.01.2017.
 */
import React, { Component } from 'react';
import TabContent from './tab-content';
import { SUBTAB_IMAGES_STOCK, SUBTAB_IMAGES_TEXTURES } from '../subtab/subtab';

export default class TabImages extends Component {
    render() {
        const subTabProps = [
            {
                id: SUBTAB_IMAGES_STOCK,
                label: 'Magazines',
            },
            {
                id: SUBTAB_IMAGES_TEXTURES,
                label: 'My templates',
            },
        ];

        return (
            <TabContent title="Images" tabs={subTabProps} selectedSubtab={SUBTAB_IMAGES_STOCK} />
        );
    }
}